"use client"

import { useState } from "react"
import { Box, InputBase, IconButton, Paper, Stack } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { useTaskContext } from "../../context/TaskContext"
import { Header } from "../../components/Header"
import { TaskItem } from "../../components/TaskItem"

export const ArchivePage = () => {
  const { tasks, toggleTask } = useTaskContext()
  const [searchQuery, setSearchQuery] = useState("")

  const completedTasks = tasks.filter((task) => {
    const matchesStatus = task.completed
    const query = searchQuery.toLowerCase()
    const matchesSearch =
      task.title.toLowerCase().includes(query) ||
      (task.description && task.description.toLowerCase().includes(query))
    return matchesStatus && matchesSearch
  })

  return (
    <>
      <Header title="アーカイブ" />
      <Box sx={{ p: "24px", pb: "80px" }}>
        {/* Search Bar */}
        {/* スマホ等でEnterキーを検索ボタンとして機能させるためにformを使用しています */}
        <Paper
          component="form"
          onSubmit={(e) => {
            e.preventDefault()
          }}
          sx={{
            p: "8px 16px",
            display: "flex",
            alignItems: "center",
            bgcolor: "#ffffff",
            border: "2px solid transparent",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            borderRadius: "16px",
            mb: 4,
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: "0 6px 24px rgba(0, 0, 0, 0.12)",
              transform: "translateY(-1px)",
            },
            "&:focus-within": {
              borderColor: "primary.main",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
              transform: "translateY(-2px)",
            },
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="search">
            <SearchIcon sx={{ color: "primary.main", fontSize: "1.5rem" }} />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1, color: "text.primary" }}
            placeholder="タスクを検索..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Paper>

        {/* List */}
        <Stack spacing={2}>
          {completedTasks.map((task) => (
            <TaskItem key={task.id} task={task} onToggle={toggleTask} hideAddSubtask={true} />
          ))}
        </Stack>
      </Box>
    </>
  )
}
