"use client"

import { Box, Typography, Checkbox, IconButton, Stack, InputBase } from "@mui/material"
import { Check, Delete } from "@mui/icons-material"
import { useState } from "react"
import type { SubTask } from "../types"

const TAG_COLORS = {
  subtaskBg: "#6366f1", // indigo-500
} as const

type SubTaskListProps = {
  subtasks: SubTask[]
  showDeleteButton?: boolean
  onUpdate: (id: string, title: string) => void
  onDelete: (id: string) => void
  onToggle: (id: string) => void
}

export const SubTaskList = ({
  subtasks,
  showDeleteButton = false,
  onUpdate,
  onDelete,
  onToggle,
}: SubTaskListProps) => {
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editValue, setEditValue] = useState("")

  const startEditing = (id: string, title: string) => {
    setEditingId(id)
    setEditValue(title)
  }

  const saveEditing = (id: string) => {
    if (editValue.trim()) {
      onUpdate(id, editValue)
    }
    setEditingId(null)
  }

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === "Enter") {
      saveEditing(id)
    } else if (e.key === "Escape") {
      setEditingId(null)
    }
  }

  if (subtasks.length === 0) {
    return null
  }

  return (
    <Stack spacing={0.5}>
      {subtasks.map((subtask) => (
        <Box
          key={subtask.id}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            bgcolor: "transparent",
            borderRadius: 1,
            p: 0.5,
          }}
        >
          <Checkbox
            checked={subtask.completed}
            onChange={(e) => {
              e.stopPropagation()
              onToggle(subtask.id)
            }}
            icon={
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: 1,
                  border: "2px solid",
                  borderColor: "grey.300",
                  bgcolor: "white",
                }}
              />
            }
            checkedIcon={
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: 1,
                  bgcolor: TAG_COLORS.subtaskBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Check sx={{ fontSize: 14, color: "white" }} />
              </Box>
            }
          />
          {editingId === subtask.id ? (
            <InputBase
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onBlur={() => saveEditing(subtask.id)}
              onKeyDown={(e) => handleKeyDown(e, subtask.id)}
              autoFocus
              fullWidth
              sx={{
                fontSize: "0.9375rem",
                color: "text.primary",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <Typography
              sx={{
                flexGrow: 1,
                fontSize: "0.9375rem",
                textDecoration: subtask.completed ? "line-through" : "none",
                color: subtask.completed ? "text.secondary" : "text.primary",
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.stopPropagation()
                startEditing(subtask.id, subtask.title)
              }}
            >
              {subtask.title}
            </Typography>
          )}
          {showDeleteButton && (
            <IconButton
              size="small"
              onClick={(e) => {
                e.stopPropagation()
                onDelete(subtask.id)
              }}
              sx={{
                color: "text.secondary",
                "&:hover": {
                  color: "error.main",
                },
              }}
              aria-label={`サブタスク「${subtask.title}」を削除`}
            >
              <Delete fontSize="small" />
            </IconButton>
          )}
        </Box>
      ))}
    </Stack>
  )
}
