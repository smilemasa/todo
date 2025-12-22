import {
  Card,
  Checkbox,
  IconButton,
  Typography,
  Box,
  Stack,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Button,
  Collapse,
  TextField,
} from "@mui/material"
import {
  Check,
  MoreVert,
  EditOutlined,
  ContentCopy,
  DeleteOutline,
  ExpandMore,
  ExpandLess,
  Add,
} from "@mui/icons-material"
import { useState } from "react"
import type { TaskType } from "../types"
import { useTaskContext } from "../context/TaskContext"
import { EditTaskDialog } from "./EditTaskDialog"
import { SubTaskList } from "./SubTaskList"

// デザインシステムの定数
const CARD_SPACING = {
  marginBottom: 2,
  borderRadius: 4,
  padding: 2,
} as const

const CHECKBOX_SIZE = {
  width: 24,
  height: 24,
} as const

const ICON_SIZE = {
  small: 14,
  medium: 18,
  large: 22,
} as const

const TAG_COLORS = {
  warning: {
    background: "#ffedd5", // orange-100
    text: "#ea580c", // orange-600
  },
  default: {
    background: "#f3f4f6", // gray-100
    text: "#4b5563", // gray-600
  },
  date: {
    background: "#eff6ff", // blue-50
    text: "#2563eb", // blue-600
  },
  progress: {
    background: "#ede9fe", // purple-100
    text: "#7c3aed", // purple-600
  },
  subtaskBg: "#6366f1", // indigo-500
} as const

type TaskItemProps = {
  task: TaskType
  onToggle: (id: string) => void
  hideAddSubtask?: boolean
}

export const TaskItem = ({ task, onToggle, hideAddSubtask }: TaskItemProps) => {
  const { addSubtask, toggleSubtask, deleteTask, duplicateTask, updateTask } = useTaskContext()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [expanded, setExpanded] = useState(false)
  const [isAddingSubtask, setIsAddingSubtask] = useState(false)
  const [newSubtaskTitle, setNewSubtaskTitle] = useState("")
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const open = Boolean(anchorEl)

  const subtasks = task.subtasks || []
  const completedSubtasks = subtasks.filter((st) => st.completed).length
  const totalSubtasks = subtasks.length
  const progress = totalSubtasks > 0 ? `${completedSubtasks}/${totalSubtasks}` : null

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation()
    onToggle(task.id)
  }

  const handleCheckboxClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  const handleExpandToggle = (event: React.MouseEvent) => {
    event.stopPropagation()
    setExpanded(!expanded)
  }

  return (
    <Card
      elevation={0}
      sx={{
        mb: CARD_SPACING.marginBottom,
        borderRadius: CARD_SPACING.borderRadius,
        border: "1px solid",
        borderColor: task.completed ? "transparent" : "divider",
        bgcolor: "background.paper",
        width: "100%",
      }}
      role="listitem"
    >
      <Box
        onClick={() => setExpanded(!expanded)}
        sx={{
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            p: CARD_SPACING.padding,
            display: "flex",
            alignItems: "flex-start",
            gap: 2,
          }}
        >
          <Checkbox
            checked={task.completed}
            onChange={handleToggle}
            onClick={handleCheckboxClick}
            icon={
              <Box
                sx={{
                  width: CHECKBOX_SIZE.width,
                  height: CHECKBOX_SIZE.height,
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
                  width: CHECKBOX_SIZE.width,
                  height: CHECKBOX_SIZE.height,
                  borderRadius: 2,
                  bgcolor: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Check sx={{ fontSize: ICON_SIZE.medium, color: "white" }} />
              </Box>
            }
            sx={{ p: 0.5, mt: 0 }}
          />

          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "1rem",
                fontWeight: 700,
                lineHeight: 1.4,
                mb: 0.5,
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "text.secondary" : "text.primary",
              }}
            >
              {task.title}
            </Typography>

            {task.description && (
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {task.description}
              </Typography>
            )}

            <Stack direction="row" flexWrap="wrap" gap={1} alignItems="center">
              {task.deadline && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "text.secondary",
                    fontSize: "0.875rem",
                  }}
                >
                  <span>{task.deadline}</span>
                  {task.deadlineCurrent && (
                    <Box
                      component="span"
                      sx={{
                        bgcolor: TAG_COLORS.date.background,
                        color: TAG_COLORS.date.text,
                        px: 1,
                        borderRadius: 99,
                        fontSize: "0.75rem",
                        fontWeight: 700,
                      }}
                    >
                      {task.deadlineCurrent}
                    </Box>
                  )}
                </Box>
              )}

              {task.date && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "text.secondary",
                    fontSize: "0.875rem",
                  }}
                >
                  <span>{task.date}</span>
                  {task.dateCurrent && (
                    <Box
                      component="span"
                      sx={{
                        bgcolor: TAG_COLORS.date.background,
                        color: TAG_COLORS.date.text,
                        px: 1,
                        borderRadius: 99,
                        fontSize: "0.75rem",
                        fontWeight: 700,
                      }}
                    >
                      {task.dateCurrent}
                    </Box>
                  )}
                </Box>
              )}

              {progress && (
                <Box
                  component="span"
                  sx={{
                    bgcolor: TAG_COLORS.progress.background,
                    color: TAG_COLORS.progress.text,
                    px: 1.5,
                    py: 0.25,
                    borderRadius: 99,
                    fontSize: "0.75rem",
                    fontWeight: 700,
                  }}
                >
                  {progress}
                </Box>
              )}
            </Stack>
          </Box>

          <Box sx={{ display: "flex", gap: 0.5, mt: -0.5, mr: -1 }}>
            <IconButton
              size="small"
              sx={{ color: "text.secondary" }}
              onClick={handleExpandToggle}
              aria-label={expanded ? "詳細を閉じる" : "詳細を開く"}
              aria-expanded={expanded}
            >
              {expanded ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: "text.secondary" }}
              onClick={handleMenuOpen}
              aria-label="メニューを開く"
              aria-controls={open ? "task-menu" : undefined}
              aria-haspopup="true"
            >
              <MoreVert />
            </IconButton>
          </Box>

          <Menu
            id="task-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            onClick={(e) => e.stopPropagation()}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            slotProps={{
              paper: {
                elevation: 3,
                sx: {
                  borderRadius: 3,
                  minWidth: 180,
                  mt: 1,
                  padding: 0,
                  "& .MuiList-root": {
                    padding: 0,
                  },
                },
              },
            }}
          >
            <MenuItem
              onClick={() => {
                handleMenuClose()
                setIsEditDialogOpen(true)
              }}
              sx={{ py: 1.5 }}
            >
              <ListItemIcon sx={{ minWidth: 24, mr: 1.5 }}>
                <EditOutlined fontSize="small" sx={{ color: "text.secondary" }} />
              </ListItemIcon>
              <ListItemText
                primary="編集"
                slotProps={{ primary: { variant: "body2", fontWeight: 500 } }}
              />
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuClose()
                duplicateTask(task.id)
              }}
              sx={{ py: 1.5 }}
            >
              <ListItemIcon sx={{ minWidth: 24, mr: 1.5 }}>
                <ContentCopy fontSize="small" sx={{ color: "text.secondary" }} />
              </ListItemIcon>
              <ListItemText
                primary="複製"
                slotProps={{ primary: { variant: "body2", fontWeight: 500 } }}
              />
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuClose()
                deleteTask(task.id)
              }}
              sx={{ py: 1.5 }}
            >
              <ListItemIcon sx={{ minWidth: 24, mr: 1.5 }}>
                <DeleteOutline fontSize="small" color="error" />
              </ListItemIcon>
              <ListItemText
                primary="削除"
                slotProps={{
                  primary: { variant: "body2", fontWeight: 500, color: "error.main" },
                }}
              />
            </MenuItem>
          </Menu>
        </Box>
      </Box>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box sx={{ px: 2, pb: 2, pt: 2, borderTop: "1px solid", borderColor: "divider" }}>
          <SubTaskList
            subtasks={subtasks}
            onToggle={(subtaskId) => toggleSubtask(task.id, subtaskId)}
          />

          {!hideAddSubtask &&
            (isAddingSubtask ? (
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                placeholder="新しいサブタスクを入力"
                value={newSubtaskTitle}
                onChange={(e) => setNewSubtaskTitle(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    if (newSubtaskTitle.trim()) {
                      addSubtask(task.id, newSubtaskTitle)
                      setNewSubtaskTitle("")
                      setIsAddingSubtask(false)
                    }
                  } else if (e.key === "Escape") {
                    setIsAddingSubtask(false)
                    setNewSubtaskTitle("")
                  }
                }}
                onBlur={() => {
                  if (!newSubtaskTitle.trim()) {
                    setIsAddingSubtask(false)
                  }
                }}
                autoFocus
                sx={{
                  mt: 2,
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "white",
                  },
                }}
              />
            ) : (
              <Button
                startIcon={<Add />}
                onClick={() => setIsAddingSubtask(true)}
                sx={{
                  mt: 2,
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: "0.9375rem",
                  color: "#3b82f6",
                  p: 0,
                }}
                disableRipple
              >
                サブタスクを追加
              </Button>
            ))}
        </Box>
      </Collapse>

      {/* 編集ダイアログ */}
      {isEditDialogOpen && (
        <EditTaskDialog
          open={isEditDialogOpen}
          onClose={() => setIsEditDialogOpen(false)}
          task={task}
          onSave={(updatedTask) => updateTask(task.id, updatedTask)}
        />
      )}
    </Card>
  )
}
