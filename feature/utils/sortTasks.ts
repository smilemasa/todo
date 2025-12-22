import { TaskType } from "../types"

export type SortConfig = {
  key: "priority" | "date" | "custom"
  direction: "asc" | "desc"
}

export const sortTasks = (tasks: TaskType[], sortConfig: SortConfig): TaskType[] => {
  const activeTasks = tasks.filter((task) => !task.completed)

  const sortedTasks = [...activeTasks].sort((a, b) => {
    const direction = sortConfig.direction === "asc" ? 1 : -1

    if (sortConfig.key === "priority") {
      const priorityOrder = { high: 3, medium: 2, low: 1 }
      const priorityA = a.priority ? priorityOrder[a.priority] : 0
      const priorityB = b.priority ? priorityOrder[b.priority] : 0
      return (priorityA - priorityB) * direction
    }

    if (sortConfig.key === "date") {
      return (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()) * direction
    }

    if (sortConfig.key === "custom") {
      return (a.order - b.order) * direction
    }

    return 0
  })

  return sortedTasks
}
