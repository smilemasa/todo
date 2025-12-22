export type SubTask = {
  id: string
  title: string
  completed: boolean
}

export type Priority = "low" | "medium" | "high"

export type TaskType = {
  id: string
  title: string
  description?: string
  deadline?: string
  completed: boolean
  subtasks?: SubTask[]
  priority: Priority
  completedAt?: string
}
