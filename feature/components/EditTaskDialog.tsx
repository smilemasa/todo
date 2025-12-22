import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Box,
  Typography,
  Checkbox,
  Stack,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
} from "@mui/material"
import { Close, Check, CalendarToday, Flag, EditOutlined } from "@mui/icons-material"
import { useState } from "react"
import type { TaskType, SubTask, Priority } from "../types"
import { SubTaskList } from "./SubTaskList"
import { AddSubTask } from "./AddSubTask"

type EditTaskDialogProps = {
  open: boolean
  onClose: () => void
  task: TaskType
  onSave: (updatedTask: TaskType) => void
}

import { PRIORITY_COLORS, PRIORITY_LABELS } from "../constants"

export const EditTaskDialog = ({ open, onClose, task, onSave }: EditTaskDialogProps) => {
  const [title, setTitle] = useState(task.title)
  const [completed, setCompleted] = useState(task.completed)
  const [deadline, setDeadline] = useState(task.deadline || "")
  const [priority, setPriority] = useState<Priority>(task.priority || "medium")
  const [description, setDescription] = useState(task.description || "")
  const [subtasks, setSubtasks] = useState<SubTask[]>(task.subtasks || [])
  const [titleError, setTitleError] = useState(false)

  // Reset form when task changes
  // useEffect removed to fix "setState in effect" lint error.
  // The parent component (TaskItem) will handle resetting state by unmounting/remounting this dialog.

  const handleToggleSubtask = (subtaskId: string) => {
    setSubtasks((prev) =>
      prev.map((st) => (st.id === subtaskId ? { ...st, completed: !st.completed } : st))
    )
  }

  const handleAddSubtask = (title: string) => {
    const newSubtask: SubTask = {
      id: Date.now().toString(),
      title: title.trim(),
      completed: false,
    }
    setSubtasks((prev) => [...prev, newSubtask])
  }

  const handleDeleteSubtask = (subtaskId: string) => {
    setSubtasks((prev) => prev.filter((st) => st.id !== subtaskId))
  }

  const handleSave = () => {
    // Validation
    if (!title.trim()) {
      setTitleError(true)
      return
    }
    setTitleError(false)

    const updatedTask: TaskType = {
      ...task,
      title,
      completed,
      deadline,
      priority,
      description,
      subtasks,
    }
    onSave(updatedTask)
    onClose()
  }

  const completedSubtasksCount = subtasks.filter((st) => st.completed).length
  const totalSubtasksCount = subtasks.length

  return (
    <Dialog
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            borderRadius: 4,
            maxHeight: "90vh",
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          pb: 2,
          pt: 3,
          px: 3,
        }}
      >
        <Checkbox
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
          icon={
            <Box
              sx={{
                width: 28,
                height: 28,
                borderRadius: 2,
                border: "2px solid",
                borderColor: "grey.300",
                bgcolor: "background.paper",
              }}
            />
          }
          checkedIcon={
            <Box
              sx={{
                width: 28,
                height: 28,
                borderRadius: 2,
                bgcolor: "primary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Check sx={{ fontSize: 18, color: "white" }} />
            </Box>
          }
        />
        <Box sx={{ flexGrow: 1 }}>
          <TextField

            variant="standard"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
              if (titleError && e.target.value.trim()) {
                setTitleError(false)
              }
            }}
            placeholder="タスク名 *"
            error={titleError}
            slotProps={{
              input: {
                disableUnderline: true,
                sx: {
                  fontSize: "1.25rem",
                  fontWeight: 700,
                },
              },
            }}
          />
          {titleError && (
            <Typography variant="caption" color="error" sx={{ mt: 0.5 }}>
              タスク名は必須です
            </Typography>
          )}
          {deadline && !titleError && (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {deadline}
            </Typography>
          )}
        </Box>
        <IconButton onClick={onClose} size="small" sx={{ color: "text.secondary" }}>
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ px: 3, pb: 3 }}>
        {/* サブタスク */}
        <Box sx={{ mb: 3 }}>
          <Box
            sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}
          >
            <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: 700 }}>
              サブタスク
            </Typography>
            {totalSubtasksCount > 0 && (
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  fontWeight: 600,
                }}
              >
                {completedSubtasksCount}/{totalSubtasksCount}
              </Typography>
            )}
          </Box>

          <Stack spacing={0}>
            <SubTaskList
              subtasks={subtasks}
              onToggle={handleToggleSubtask}
              onDelete={handleDeleteSubtask}
              showDeleteButton={true}
            />

            <AddSubTask onAdd={handleAddSubtask} />
          </Stack>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* 期限 */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
            <CalendarToday sx={{ fontSize: 20, color: "text.secondary" }} />
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              期限
            </Typography>
          </Box>
          <TextField
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            size="small"
            sx={{
              pl: 4.5,
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
              },
            }}
          />
        </Box>

        {/* 優先度 */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
            <Flag sx={{ fontSize: 20, color: "text.secondary" }} />
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              優先度
            </Typography>
          </Box>
          <Box sx={{ pl: 4.5 }}>
            <ToggleButtonGroup
              value={priority}
              exclusive
              onChange={(e, newPriority) => {
                if (newPriority !== null) {
                  setPriority(newPriority)
                }
              }}
              sx={{
                gap: 1,
                "& .MuiToggleButtonGroup-grouped": {
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: "8px !important",
                  mx: 0,
                  "&:not(:first-of-type)": {
                    marginLeft: 1,
                    borderLeft: "1px solid",
                    borderColor: "divider",
                  },
                },
              }}
            >
              {(["low", "medium", "high"] as Priority[]).map((p) => (
                <ToggleButton
                  key={p}
                  value={p}
                  sx={{
                    px: 3,
                    py: 0.75,
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    bgcolor: priority === p ? PRIORITY_COLORS[p].background : "transparent",
                    color: priority === p ? PRIORITY_COLORS[p].text : "text.secondary",
                    "&.Mui-selected": {
                      bgcolor: PRIORITY_COLORS[p].background,
                      color: PRIORITY_COLORS[p].text,
                      "&:hover": {
                        bgcolor: PRIORITY_COLORS[p].background,
                      },
                    },
                  }}
                >
                  {PRIORITY_LABELS[p]}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>
        </Box>

        {/* 説明 */}
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
            <EditOutlined sx={{ fontSize: 20, color: "text.secondary" }} />
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              説明
            </Typography>
          </Box>
          <TextField
            multiline
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="説明を入力"
            size="small"
            sx={{
              pl: 4.5,
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
              },
            }}
          />
        </Box>

        {/* Save Button */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            onClick={handleSave}
            sx={{
              mt: 3,
              py: 1.5,
              px: 4,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              fontSize: "1rem",
            }}
          >
            保存
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  )
}
