import {
  Card,
  Checkbox,
  IconButton,
  Typography,
  Box,
  Stack,
  Chip,
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
  AccessTime,
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

type TaskItemProps = {
  task: TaskType
  onToggle: (id: string) => void
  hideAddSubtask?: boolean
}

export const TaskItem = ({ task, onToggle, hideAddSubtask }: TaskItemProps) => {
  const { addSubtask, toggleSubtask } = useTaskContext()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [expanded, setExpanded] = useState(false)
  const [isAddingSubtask, setIsAddingSubtask] = useState(false)
  const [newSubtaskTitle, setNewSubtaskTitle] = useState("")
  const open = Boolean(anchorEl)

  const subtasks = task.subtasks || []
  const completedSubtasks = subtasks.filter((st) => st.completed).length
  const totalSubtasks = subtasks.length
  const progress = totalSubtasks > 0 ? `${completedSubtasks}/${totalSubtasks}` : null

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = (event?: React.MouseEvent<HTMLElement>) => {
    if (event) event.stopPropagation()
    setAnchorEl(null)
  }

  return (
    <Card
      elevation={0}
      sx={{
        mb: 2,
        borderRadius: 4,
        border: "1px solid",
        borderColor: task.completed ? "transparent" : "divider",
        bgcolor: "background.paper",
        width: "100%",
      }}
    >
      <Box
        onClick={() => setExpanded(!expanded)}
        sx={{
          cursor: "pointer",
          transition: "background-color 0.2s",
          "&:hover": {
            bgcolor: "action.hover",
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            alignItems: "flex-start",
            gap: 2,
          }}
        >
          <Checkbox
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            icon={
              <Box
                sx={{
                  width: 24,
                  height: 24,
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
                  width: 24,
                  height: 24,
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
                        bgcolor: "#eff6ff",
                        color: "#2563eb",
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
                        bgcolor: "#eff6ff",
                        color: "#2563eb",
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
                    bgcolor: "#ede9fe",
                    color: "#7c3aed",
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

              {task.tags &&
                task.tags.map((tag, i) => (
                  <Chip
                    key={i}
                    icon={
                      tag.icon === "clock" ? (
                        <AccessTime sx={{ fontSize: "14px !important" }} />
                      ) : undefined
                    }
                    label={tag.text}
                    size="small"
                    sx={{
                      height: 24,
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      bgcolor: tag.variant === "warning" ? "#ffedd5" : "#f3f4f6", // orange-100 or gray-100
                      color: tag.variant === "warning" ? "#ea580c" : "#4b5563", // orange-600 or gray-600
                      "& .MuiChip-icon": {
                        color: "inherit",
                        ml: 0.5,
                        mr: -0.5,
                      },
                    }}
                  />
                ))}
            </Stack>
          </Box>

          <Box sx={{ display: "flex", gap: 0.5, mt: -0.5, mr: -1 }}>
            <IconButton
              size="small"
              sx={{ color: "text.secondary" }}
              onClick={(e) => {
                e.stopPropagation()
                setExpanded(!expanded)
              }}
              onMouseDown={(e) => e.stopPropagation()}
            >
              {expanded ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: "text.secondary" }}
              onClick={handleMenuOpen}
              onMouseDown={(e) => e.stopPropagation()}
            >
              <MoreVert />
            </IconButton>
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => handleMenuClose()}
            onClick={(e) => e.stopPropagation()}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            PaperProps={{
              elevation: 3,
              sx: {
                borderRadius: 3,
                minWidth: 180,
                minHeight: 180,
                mt: 1,
                "& .MuiList-root": {
                  // padding: 0,
                },
              },
            }}
          >
            <MenuItem onClick={() => handleMenuClose()} sx={{ py: 1.5 }}>
              <ListItemIcon sx={{ minWidth: 24, mr: 1.5 }}>
                <EditOutlined fontSize="small" sx={{ color: "text.secondary" }} />
              </ListItemIcon>
              <ListItemText
                primary="編集"
                primaryTypographyProps={{ variant: "body2", fontWeight: 500 }}
              />
            </MenuItem>
            <MenuItem onClick={() => handleMenuClose()} sx={{ py: 1.5 }}>
              <ListItemIcon sx={{ minWidth: 24, mr: 1.5 }}>
                <ContentCopy fontSize="small" sx={{ color: "text.secondary" }} />
              </ListItemIcon>
              <ListItemText
                primary="複製"
                primaryTypographyProps={{ variant: "body2", fontWeight: 500 }}
              />
            </MenuItem>
            <MenuItem onClick={() => handleMenuClose()} sx={{ py: 1.5 }}>
              <ListItemIcon sx={{ minWidth: 24, mr: 1.5 }}>
                <DeleteOutline fontSize="small" color="error" />
              </ListItemIcon>
              <ListItemText
                primary="削除"
                primaryTypographyProps={{ variant: "body2", fontWeight: 500, color: "error.main" }}
              />
            </MenuItem>
          </Menu>
        </Box>
      </Box>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box sx={{ px: 2, pb: 2 }}>
          <Stack spacing={1}>
            {subtasks.map((subtask) => (
              <Box
                key={subtask.id}
                onClick={() => toggleSubtask(task.id, subtask.id)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: 1,
                  bgcolor: "grey.50",
                  borderRadius: 2,
                  gap: 1.5,
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                  "&:hover": {
                    bgcolor: "grey.100",
                  },
                }}
              >
                <Checkbox
                  checked={subtask.completed}
                  onClick={(e) => e.stopPropagation()}
                  onChange={() => toggleSubtask(task.id, subtask.id)}
                  sx={{
                    p: 0,
                    color: "#6366f1",
                    "&.Mui-checked": {
                      color: "#6366f1",
                    },
                    "& .MuiSvgIcon-root": {
                      fontSize: 22,
                      bgcolor: "white",
                      borderRadius: 1,
                    },
                  }}
                  icon={
                    <Box
                      sx={{
                        width: 22,
                        height: 22,
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
                        width: 22,
                        height: 22,
                        borderRadius: 1,
                        bgcolor: "#6366f1",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Check sx={{ fontSize: 16, color: "white" }} />
                    </Box>
                  }
                />
                <Typography
                  sx={{
                    fontSize: "0.9375rem",
                    color: subtask.completed ? "text.secondary" : "text.primary",
                    textDecoration: subtask.completed ? "line-through" : "none",
                  }}
                >
                  {subtask.title}
                </Typography>
              </Box>
            ))}
          </Stack>

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
                      // Optional: keep focus to add more? User requested 'transform to text box', usually implies one-off or continuous.
                      // Let's keep it simple: close after add.
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
                  "&:hover": {
                    bgcolor: "transparent",
                    textDecoration: "underline",
                  },
                }}
                disableRipple
              >
                サブタスクを追加
              </Button>
            ))}
        </Box>
      </Collapse>
    </Card>
  )
}
