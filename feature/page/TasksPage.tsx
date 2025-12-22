"use client"

import { useState } from "react"
import { FloatingActionButton } from "../components/FloatingActionButton"
import { TaskList } from "../components/TaskList"
import { NewTaskDialog } from "../components/NewTaskDialog"
import { useTaskContext } from "../context/TaskContext"
import { Header } from "../components/Header"
import { SortMenu } from "../components/SortMenu"
import { Box } from "@mui/material"
import { sortTasks } from "../utils/sortTasks"

export const TasksPage = () => {
  const { tasks, toggleTask, addTask, sortConfig } = useTaskContext()
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const displayTasks = sortTasks(tasks, sortConfig)

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
