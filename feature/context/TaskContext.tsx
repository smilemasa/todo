"use client"

import { createContext, useContext, useState, useEffect } from "react"
import type { ReactNode } from "react"
import type { TaskType, SubTask } from "../types"
import { useSession } from "next-auth/react"
import { useAuth } from "./AuthContext"
import { useSettings } from "./SettingsContext"
import { v4 as uuidv4 } from "uuid"

type TaskContextType = {
  tasks: TaskType[]
  addTask: (task: Omit<TaskType, "id" | "completed" | "createdAt" | "order">) => void
  updateTask: (id: string, updatedTask: TaskType) => void
  toggleTask: (id: string) => void
  deleteTask: (id: string) => void
  duplicateTask: (id: string) => void
  addSubtask: (taskId: string, title: string) => void
  toggleSubtask: (taskId: string, subtaskId: string) => void
  reorderTasks: (newTasks: TaskType[]) => void
  sortConfig: SortConfig
  setSortConfig: (config: SortConfig) => void
  uncompletedCount: number
  isLoading: boolean
}

export type SortConfig = {
  key: "priority" | "date" | "custom"
  direction: "asc" | "desc"
}

const TaskContext = createContext<TaskContextType | undefined>(undefined)

const INITIAL_TASKS: TaskType[] = [
  {
    id: "1",
    title: "チームミーティングの準備",
    description: "資料を3部印刷する",
    completed: false,
    priority: "medium",
    createdAt: "2024-01-01T10:00:00.000Z",
    order: 1,
  },
  {
    id: "2",
    title: "週報を提出",
    deadline: "",
    completed: false,
    subtasks: [
      { id: "s1", title: "資料のデータを収集", completed: true },
      { id: "s2", title: "週報フォーマットに入力", completed: false },
      { id: "s3", title: "上司に提出", completed: false },
    ],
    priority: "medium",
    createdAt: "2024-01-02T14:00:00.000Z",
    order: 2,
  },
  {
    id: "3",
    title: "プロジェクト企画書のレビュー",
    completed: false,
    priority: "medium",
    createdAt: "2024-01-03T09:00:00.000Z",
    order: 3,
  },
  {
    id: "4",
    title: "クライアントへの提案書作成",
    completed: false,
    priority: "medium",
    createdAt: "2024-01-03T11:00:00.000Z",
    order: 4,
  },
  {
    id: "5",
    title: "デザインレビューミーティング",
    deadline: "2025/01/20",
    completed: false,
    priority: "high",
    createdAt: "2024-01-04T16:00:00.000Z",
    order: 5,
  },
  {
    id: "6",
    title: "買い物リスト確認",
    completed: false,
    priority: "low",
    createdAt: "2024-01-05T18:00:00.000Z",
    order: 6,
  },
]

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: "custom", direction: "asc" })
  const { data: session, status } = useSession()
  const { user } = useAuth()
  const { autoCompleteParentTask } = useSettings()

  // 認証されているかどうかをチェック
  const isAuthenticated = status === "authenticated" && session?.user?.email && !user?.isGuest

  // タスクを読み込み
  useEffect(() => {
    const loadTasks = async () => {
      if (status === "loading") return

      // Google認証の場合はGCSからタスクを取得
      if (isAuthenticated) {
        try {
          const response = await fetch("/api/tasks")
          if (!response.ok) {
            throw new Error(`Failed to fetch tasks: ${response.status}`)
          }
          const data = await response.json()
          setTasks(data.tasks || [])
        } catch (error) {
          console.error("Error loading tasks:", error)
          // エラー時は空配列を設定（ユーザーにエラー通知を追加することを推奨）
          setTasks([])
        }
      }
      // Guestログインの場合はInitialタスクを表示
      else if (user?.isGuest) {
        setTasks(INITIAL_TASKS)
      }
      // どちらでもない場合は空配列
      else {
        setTasks([])
      }

      setIsLoading(false)
    }

    loadTasks()
  }, [isAuthenticated, status, user?.isGuest])

  const addTask = async (task: Omit<TaskType, "id" | "completed" | "createdAt" | "order">) => {
    const minOrder = tasks.length > 0 ? Math.min(...tasks.map((t) => t.order)) : 0
    const newTask: TaskType = {
      ...task,
      id: uuidv4(),
      completed: false,
      createdAt: new Date().toISOString(),
      order: minOrder - 1,
    }

    // 楽観的更新: ローカル状態を先に更新
    setTasks((prev) => [newTask, ...prev])

    if (isAuthenticated) {
      try {
        const response = await fetch("/api/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ task: newTask }),
        })

        if (!response.ok) {
          throw new Error(`Failed to create task: ${response.status}`)
        }
      } catch (error) {
        console.error("Error creating task:", error)
        // エラー時はロールバック
        setTasks((prev) => prev.filter((t) => t.id !== newTask.id))
        // TODO: ユーザーにエラー通知を表示
      }
    }
  }

  const toggleTask = async (id: string) => {
    // 楽観的更新: 現在の状態を保存してから更新
    const previousTasks = tasks
    const taskToUpdate = tasks.find((t) => t.id === id)

    if (!taskToUpdate) return

    // ローカル状態を更新
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          const newCompleted = !t.completed
          return {
            ...t,
            completed: newCompleted,
            completedAt: newCompleted ? new Date().toISOString() : undefined,
          }
        }
        return t
      })
    )

    if (isAuthenticated) {
      try {
        const updatedTask = {
          ...taskToUpdate,
          completed: !taskToUpdate.completed,
          completedAt: !taskToUpdate.completed ? new Date().toISOString() : undefined,
        }
        const response = await fetch(`/api/tasks/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ task: updatedTask }),
        })

        if (!response.ok) {
          throw new Error(`Failed to update task: ${response.status}`)
        }
      } catch (error) {
        console.error("Error updating task:", error)
        // エラー時はロールバック
        setTasks(previousTasks)
        // TODO: ユーザーにエラー通知を表示
      }
    }
  }

  const updateTask = async (id: string, updatedTask: TaskType) => {
    // 楽観的更新: 現在の状態を保存
    const previousTasks = tasks

    // ローカル状態を更新
    setTasks((prev) => prev.map((t) => (t.id === id ? updatedTask : t)))

    if (isAuthenticated) {
      try {
        const response = await fetch(`/api/tasks/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ task: updatedTask }),
        })

        if (!response.ok) {
          throw new Error(`Failed to update task: ${response.status}`)
        }
      } catch (error) {
        console.error("Error updating task:", error)
        // エラー時はロールバック
        setTasks(previousTasks)
        // TODO: ユーザーにエラー通知を表示
      }
    }
  }

  const deleteTask = async (id: string) => {
    // 楽観的更新: 現在の状態を保存
    const previousTasks = tasks

    // ローカル状態から削除
    setTasks((prev) => prev.filter((t) => t.id !== id))

    // Google認証時はAPIで削除
    if (isAuthenticated) {
      try {
        const response = await fetch(`/api/tasks/${id}`, {
          method: "DELETE",
        })

        if (!response.ok) {
          throw new Error(`Failed to delete task: ${response.status}`)
        }
      } catch (error) {
        console.error("Error deleting task:", error)
        // エラー時はロールバック
        setTasks(previousTasks)
        // TODO: ユーザーにエラー通知を表示
      }
    }
  }

  const duplicateTask = async (id: string) => {
    const taskToDuplicate = tasks.find((t) => t.id === id)
    if (!taskToDuplicate) return

    // 新しいタスクを作成（IDを新規生成し、completedをfalseに、サブタスクもすべてfalseに）
    const newTask: TaskType = {
      ...taskToDuplicate,
      id: uuidv4(),
      completed: false,
      createdAt: new Date().toISOString(),
      // Insert duplicate right after original, or at top? Let's put it at top for simplicity in logic or same order?
      // For now, let's treat it as a new task at the top (order logic same as add).
      // Or better, make it adjacent to original? The UI code splices it in `index + 1`.
      // So order should be between original and next?
      // Since we use integer orders, reordering everything is expensive.
      // For now, let's stick to the splicing logic in local state for position, but field-wise...
      // If we rely on `order` field for sorting, we need valid order.
      // Let's just give it a new order at top to match "new task" behavior for now, or just `min - 1`
      // But wait, the splice puts it next to original.
      // To keep implementation simple and consistent with "add task", I will use minOrder - 1 and let it jump to top if re-sorted by order.
      // BUT, the `duplicateTask` implementation splices it into the array:
      // const newTasks = [...prev]
      // newTasks.splice(index + 1, 0, newTask)
      // So visual order is enforced by array position.
      // If we sort by `order`, this might break.
      // Let's defer strict order management for duplicate until full D&D.
      // For now, I'll give it `order: original.order`? No duplicate keys.
      // I'll leave `order` as `min - 1` and let the UI splice handle it if custom sort is just array order.
      // Users current custom sort logic:
      // return sortConfig.key === "custom" ? ...activeTasks ... : sortedTasks
      // It uses `activeTasks` (filter result).
      // So array order MATTERS locally.
      // `order` field is for persistence effectively.
      order: (tasks.length > 0 ? Math.min(...tasks.map((t) => t.order)) : 0) - 1,
      subtasks: taskToDuplicate.subtasks?.map((st) => ({
        ...st,
        id: uuidv4(), // Use uuid for subtasks too? Or simple id?
        // Original code used Date.now() + st.id.
        // Let's use uuidv4() for subtasks too if we want consistency.
        completed: false,
      })),
    }

    // 楽観的更新: ローカル状態を先に更新（元のタスクの直後に挿入）
    setTasks((prev) => {
      const index = prev.findIndex((t) => t.id === id)
      const newTasks = [...prev]
      newTasks.splice(index + 1, 0, newTask)
      return newTasks
    })

    if (isAuthenticated) {
      try {
        const response = await fetch("/api/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ task: newTask }),
        })

        if (!response.ok) {
          throw new Error(`Failed to duplicate task: ${response.status}`)
        }
      } catch (error) {
        console.error("Error duplicating task:", error)
        // エラー時はロールバック
        setTasks((prev) => prev.filter((t) => t.id !== newTask.id))
        // TODO: ユーザーにエラー通知を表示
      }
    }
  }

  const addSubtask = async (taskId: string, title: string) => {
    // 楽観的更新: 現在の状態を保存
    const previousTasks = tasks
    const taskToUpdate = tasks.find((t) => t.id === taskId)

    if (!taskToUpdate) return

    const newSubtask: SubTask = {
      id: uuidv4(),
      title,
      completed: false,
    }

    const updatedTask = {
      ...taskToUpdate,
      subtasks: [...(taskToUpdate.subtasks || []), newSubtask],
    }

    // ローカル状態を更新
    setTasks((prev) => prev.map((t) => (t.id === taskId ? updatedTask : t)))

    if (isAuthenticated) {
      try {
        const response = await fetch(`/api/tasks/${taskId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ task: updatedTask }),
        })

        if (!response.ok) {
          throw new Error(`Failed to add subtask: ${response.status}`)
        }
      } catch (error) {
        console.error("Error adding subtask:", error)
        // エラー時はロールバック
        setTasks(previousTasks)
        // TODO: ユーザーにエラー通知を表示
      }
    }
  }

  const toggleSubtask = async (taskId: string, subtaskId: string) => {
    // 楽観的更新: 現在の状態を保存
    const previousTasks = tasks
    const taskToUpdate = tasks.find((t) => t.id === taskId)

    if (!taskToUpdate) return

    const updatedSubtasks = taskToUpdate.subtasks?.map((st) =>
      st.id === subtaskId ? { ...st, completed: !st.completed } : st
    )

    const allSubtasksCompleted = updatedSubtasks?.every((st) => st.completed)

    const updatedTask = {
      ...taskToUpdate,
      subtasks: updatedSubtasks,
      // 設定が有効な場合、サブタスクがすべて完了したら親タスクも完了にする
      ...(autoCompleteParentTask && allSubtasksCompleted ? { completed: true } : {}),
    }

    // ローカル状態を更新
    setTasks((prev) => prev.map((t) => (t.id === taskId ? updatedTask : t)))

    if (isAuthenticated) {
      try {
        const response = await fetch(`/api/tasks/${taskId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ task: updatedTask }),
        })

        if (!response.ok) {
          throw new Error(`Failed to toggle subtask: ${response.status}`)
        }
      } catch (error) {
        console.error("Error toggling subtask:", error)
        // エラー時はロールバック
        setTasks(previousTasks)
        // TODO: ユーザーにエラー通知を表示
      }
    }
  }

  const reorderTasks = async (newTasks: TaskType[]) => {
    // Calculate new order values based on array index
    const tasksWithNewOrder = newTasks.map((task, index) => ({
      ...task,
      order: index,
    }))

    // 楽観的更新: 現在の状態を保存
    const previousTasks = tasks

    // ローカル状態を更新
    setTasks(tasksWithNewOrder)

    if (isAuthenticated) {
      try {
        // Bulk update - send all tasks with new orders
        const response = await fetch("/api/tasks", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ tasks: tasksWithNewOrder }),
        })

        if (!response.ok) {
          throw new Error(`Failed to reorder tasks: ${response.status}`)
        }
      } catch (error) {
        console.error("Error reordering tasks:", error)
        // エラー時はロールバック
        setTasks(previousTasks)
        // TODO: ユーザーにエラー通知を表示
      }
    }
  }

  const uncompletedCount = tasks.filter((t) => !t.completed).length

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        toggleTask,
        deleteTask,
        duplicateTask,
        addSubtask,
        toggleSubtask,
        reorderTasks,
        sortConfig,
        setSortConfig,
        uncompletedCount,
        isLoading,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export const useTaskContext = () => {
  const context = useContext(TaskContext)
  if (context === undefined) {
    throw new Error("useTaskContext must be used within a TaskProvider")
  }
  return context
}
