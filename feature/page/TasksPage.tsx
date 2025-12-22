"use client"

import { useState } from "react"
import { FloatingActionButton } from "../components/FloatingActionButton"
import { TaskList } from "../components/TaskList"
import { NewTaskDialog } from "../components/NewTaskDialog"
import { useTaskContext } from "../context/TaskContext"
import { Header } from "../components/Header"
import { SortMenu } from "../components/SortMenu"
import { Box } from "@mui/material"

export const TasksPage = () => {
  const { tasks, toggleTask, addTask, sortConfig } = useTaskContext()
  const [isDialogOpen, setIsDialogOpen] = useState(false)

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
      // Use id as a proxy for creation date since id is timestamp based
      return (Number(a.id) - Number(b.id)) * direction
    }

    return 0
  })

  const displayTasks =
    sortConfig.key === "custom"
      ? sortConfig.direction === "asc"
        ? [...activeTasks].reverse()
        : activeTasks
      : sortedTasks

  return (
    <>
      <Header title="TODOリスト">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="span"
            sx={{
              bgcolor: "#eff6ff", // blue-50
              color: "#2563eb", // blue-600
              fontWeight: 600,
              fontSize: "0.875rem",
              borderRadius: "9999px",
              px: 1.5,
              py: 0.5,
              mr: 1,
            }}
          >
            {useTaskContext().uncompletedCount}件
          </Box>
          <SortMenu />
        </Box>
      </Header>
      <TaskList tasks={displayTasks} onToggle={toggleTask} />
      <FloatingActionButton onClick={() => setIsDialogOpen(true)} />
      <NewTaskDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onCreate={addTask}
      />
    </>
  )
}
