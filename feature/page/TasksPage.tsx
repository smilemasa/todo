"use client"

import { useState } from "react"
import { FloatingActionButton } from "../components/FloatingActionButton"
import { TaskList } from "../components/TaskList"
import { NewTaskDialog } from "../components/NewTaskDialog"
import { useTaskContext } from "../context/TaskContext"

export const TasksPage = () => {
  const { tasks, toggleTask, addTask } = useTaskContext()
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const activeTasks = tasks.filter((task) => !task.completed)

  return (
    <>
      <TaskList tasks={activeTasks} onToggle={toggleTask} />
      <FloatingActionButton onClick={() => setIsDialogOpen(true)} />
      <NewTaskDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onCreate={addTask}
      />
    </>
  )
}
