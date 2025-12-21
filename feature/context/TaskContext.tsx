"use client"

import { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"
import type { TaskType, SubTask } from "../types"

type TaskContextType = {
  tasks: TaskType[]
  addTask: (task: Omit<TaskType, "id" | "completed">) => void
  toggleTask: (id: string) => void
  addSubtask: (taskId: string, title: string) => void
  toggleSubtask: (taskId: string, subtaskId: string) => void
  uncompletedCount: number
}

const TaskContext = createContext<TaskContextType | undefined>(undefined)

const INITIAL_TASKS: TaskType[] = [
  {
    id: "1",
    title: "チームミーティングの準備",
    description: "資料を3部印刷する",
    completed: true,
  },
  {
    id: "2",
    title: "週報を提出",
    deadline: "金曜日17:00まで",
    completed: false,
    subtasks: [
      { id: "s1", title: "資料のデータを収集", completed: true },
      { id: "s2", title: "週報フォーマットに入力", completed: false },
      { id: "s3", title: "上司に提出", completed: false },
    ],
  },
  {
    id: "3",
    title: "プロジェクト企画書のレビュー",
    completed: false,
  },
  {
    id: "4",
    title: "クライアントへの提案書作成",
    tags: [
      { text: "今日", variant: "warning", icon: "clock" },
      { text: "高", variant: "warning" },
    ],
    completed: false,
  },
  {
    id: "5",
    title: "デザインレビューミーティング",
    date: "2025/01/20",
    dateCurrent: "2025/01/04",
    completed: false,
  },
  {
    id: "6",
    title: "買い物リスト確認",
    completed: false,
  },
]

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TaskType[]>(INITIAL_TASKS)

  const addTask = (task: Omit<TaskType, "id" | "completed">) => {
    const newTask: TaskType = {
      ...task,
      id: Date.now().toString(),
      completed: false,
    }
    setTasks((prev) => [newTask, ...prev])
  }

  const toggleTask = (id: string) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)))
  }

  const addSubtask = (taskId: string, title: string) => {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id === taskId) {
          const newSubtask: SubTask = {
            id: Date.now().toString(),
            title,
            completed: false,
          }
          return { ...t, subtasks: [...(t.subtasks || []), newSubtask] }
        }
        return t
      })
    )
  }

  const toggleSubtask = (taskId: string, subtaskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => {
        if (t.id === taskId) {
          return {
            ...t,
            subtasks: t.subtasks?.map((st) =>
              st.id === subtaskId ? { ...st, completed: !st.completed } : st
            ),
          }
        }
        return t
      })
    )
  }

  const uncompletedCount = tasks.filter((t) => !t.completed).length

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, toggleTask, addSubtask, toggleSubtask, uncompletedCount }}
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
