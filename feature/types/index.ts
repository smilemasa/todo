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
  deadlineCurrent?: string
  date?: string
  dateCurrent?: string
  tags?: Array<{
    text: string
    variant: "warning" | "default"
    icon?: "clock"
  }>
  completed: boolean
  subtasks?: SubTask[]
  priority?: Priority
  memo?: string
}
