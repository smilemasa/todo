"use client"

import { useState } from "react"
import { TextField } from "@mui/material"
import { AddSubTaskButton } from "./AddSubTaskButton"

type AddSubTaskProps = {
  onAdd: (title: string) => void
}

export const AddSubTask = ({ onAdd }: AddSubTaskProps) => {
  const [isAdding, setIsAdding] = useState(false)
  const [title, setTitle] = useState("")

  const handleAdd = () => {
    if (title.trim()) {
      onAdd(title)
      setTitle("")
      setIsAdding(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAdd()
    } else if (e.key === "Escape") {
      setTitle("")
      setIsAdding(false)
    }
  }

  const handleBlur = () => {
    if (title.trim()) {
      handleAdd()
    } else {
      setIsAdding(false)
    }
  }

  if (isAdding) {
    return (
      <TextField
        fullWidth
        autoFocus
        variant="outlined"
        size="small"
        placeholder="新しいサブタスクを入力"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        sx={{
          "& .MuiOutlinedInput-root": {
            bgcolor: "background.paper",
            borderRadius: 2,
          },
        }}
      />
    )
  }

  return <AddSubTaskButton onClick={() => setIsAdding(true)} />
}
