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
  Chip,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
} from "@mui/material"
import {
  Close,
  Check,
  Add,
  CalendarToday,
  Flag,
  EditOutlined,
  DragIndicator,
} from "@mui/icons-material"
import { useState, useEffect } from "react"
import type { TaskType, SubTask, Priority } from "../types"
import { SubTaskList } from "./SubTaskList"
import { AddSubTaskButton } from "./AddSubTaskButton"

type EditTaskDialogProps = {
  open: boolean
  onClose: () => void
  task: TaskType
  onSave: (updatedTask: TaskType) => void
}

const PRIORITY_COLORS = {
  low: {
    background: "#dbeafe", // blue-100
    text: "#1e40af", // blue-800
  },
  medium: {
    background: "#fef3c7", // yellow-100
    text: "#92400e", // yellow-900
  },
  high: {
    background: "#fee2e2", // red-100
    text: "#991b1b", // red-800
  },
} as const

const PRIORITY_LABELS: Record<Priority, string> = {
  low: "低",
  medium: "中",
  high: "高",
}

export const EditTaskDialog = ({ open, onClose, task, onSave }: EditTaskDialogProps) => {
  const [title, setTitle] = useState(task.title)
  const [completed, setCompleted] = useState(task.completed)
  const [deadline, setDeadline] = useState(task.deadline || "")
  const [priority, setPriority] = useState<Priority>(task.priority || "medium")
  const [memo, setMemo] = useState(task.memo || "")
  const [subtasks, setSubtasks] = useState<SubTask[]>(task.subtasks || [])
  const [newSubtaskTitle, setNewSubtaskTitle] = useState("")
  const [showSubtaskInput, setShowSubtaskInput] = useState(false)
  const [titleError, setTitleError] = useState(false)

  // Reset form when task changes
  useEffect(() => {
    setTitle(task.title)
    setCompleted(task.completed)
    setDeadline(task.deadline || "")
    setPriority(task.priority || "medium")
    setMemo(task.memo || "")
    setSubtasks(task.subtasks || [])
    setNewSubtaskTitle("")
    setTitleError(false)
  }, [task])

  const handleToggleSubtask = (subtaskId: string) => {
    setSubtasks((prev) =>
      prev.map((st) => (st.id === subtaskId ? { ...st, completed: !st.completed } : st))
    )
  }

  const handleAddSubtask = () => {
    if (newSubtaskTitle.trim()) {
      const newSubtask: SubTask = {
        id: Date.now().toString(),
        title: newSubtaskTitle.trim(),
        completed: false,
      }
      setSubtasks((prev) => [...prev, newSubtask])
      setNewSubtaskTitle("")
      setShowSubtaskInput(false)
    }
  }

  const handleKeyDownSubtask = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAddSubtask()
    } else if (e.key === "Escape") {
      setNewSubtaskTitle("")
      setShowSubtaskInput(false)
    }
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
      memo,
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
      maxWidth="sm"
      fullWidth
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
          alignItems: "flex-start",
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
          sx={{ p: 0, mt: 0.5 }}
        />
        <Box sx={{ flexGrow: 1 }}>
          <TextField
            fullWidth
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
            InputProps={{
              disableUnderline: true,
              sx: {
                fontSize: "1.25rem",
                fontWeight: 700,
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
        <IconButton onClick={onClose} size="small" sx={{ color: "text.secondary", mt: -0.5 }}>
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ px: 3, pb: 3 }}>
        {/* サブタスク */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
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

            {showSubtaskInput ? (
              <TextField
                id="new-subtask-input"
                fullWidth
                autoFocus
                placeholder="サブタスク名を入力"
                value={newSubtaskTitle}
                onChange={(e) => setNewSubtaskTitle(e.target.value)}
                onKeyDown={handleKeyDownSubtask}
                onBlur={() => {
                  if (!newSubtaskTitle.trim()) {
                    setShowSubtaskInput(false)
                  }
                }}
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    bgcolor: "#fafafa",
                  },
                }}
              />
            ) : (
              <AddSubTaskButton
                onClick={() => {
                  setShowSubtaskInput(true)
                }}
              />
            )}
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
            fullWidth
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            size="small"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
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

        {/* メモ */}
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
            <EditOutlined sx={{ fontSize: 20, color: "text.secondary" }} />
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              メモ
            </Typography>
          </Box>
          <TextField
            fullWidth
            multiline
            rows={3}
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            placeholder="メモを入力"
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
        <Button
          fullWidth
          variant="contained"
          onClick={handleSave}
          sx={{
            mt: 3,
            py: 1.5,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 600,
            fontSize: "1rem",
          }}
        >
          保存
        </Button>
      </DialogContent>
    </Dialog>
  )
}
