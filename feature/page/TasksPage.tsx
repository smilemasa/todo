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
import type { TaskType } from "../types"

export const TasksPage = () => {
  const { tasks, toggleTask, addTask, sortConfig, reorderTasks } = useTaskContext()
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const displayTasks = sortTasks(tasks, sortConfig)

  const handleReorder = (newTasks: TaskType[]) => {
    // 完了済みタスクと未完了タスクを分離
    const completedTasks = tasks.filter((task) => task.completed)
    
    // 降順の場合は、表示順序と実際のorder値が逆になるため、配列を反転
    const orderedTasks = sortConfig.direction === "desc" ? [...newTasks].reverse() : newTasks
    
    // 新しい順序で未完了タスクを配置し、その後に完了済みタスクを追加
    const reorderedTasks = [...orderedTasks, ...completedTasks]
    
    reorderTasks(reorderedTasks)
  }

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
      <TaskList
        tasks={displayTasks}
        onToggle={toggleTask}
        onReorder={handleReorder}
        sortKey={sortConfig.key}
      />
      <FloatingActionButton onClick={() => setIsDialogOpen(true)} />
      <NewTaskDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onCreate={addTask}
      />
    </>
  )
}
