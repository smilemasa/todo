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
      // Focus restoration could be handled here if needed, but not strictly required
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault() // Prevent form submission if any
      handleAdd()
    } else if (e.key === "Escape") {
      setTitle("")
      setIsAdding(false)
    }
  }

  const handleBlur = () => {
    if (!title.trim()) {
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
