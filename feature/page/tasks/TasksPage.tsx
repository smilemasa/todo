"use client"

import { useState } from "react"
import { FloatingActionButton } from "./components/FloatingActionButton"
import { TaskList } from "./components/TaskList"
import { NewTaskDialog } from "./components/NewTaskDialog"
import { Header } from "../../components/Header"
import { SortMenu } from "./components/SortMenu"
import { TaskCountBadge } from "./components/TaskCountBadge"
import { Box } from "@mui/material"

export const TasksPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <Header title="TODOリスト">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TaskCountBadge />
          <SortMenu />
        </Box>
      </Header>
      <TaskList />
      <FloatingActionButton onClick={() => setIsDialogOpen(true)} />
      <NewTaskDialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  )
}
