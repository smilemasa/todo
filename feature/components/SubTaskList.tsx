import { Box, Typography, Checkbox, IconButton, Stack } from "@mui/material"
import { Check, Delete } from "@mui/icons-material"
import type { SubTask } from "../types"

const TAG_COLORS = {
  subtaskBg: "#6366f1", // indigo-500
} as const

type SubTaskListProps = {
  subtasks: SubTask[]
  onToggle: (subtaskId: string) => void
  onDelete?: (subtaskId: string) => void
  showDeleteButton?: boolean
}

export const SubTaskList = ({
  subtasks,
  onToggle,
  onDelete,
  showDeleteButton = false,
}: SubTaskListProps) => {
  if (subtasks.length === 0) {
    return null
  }

  return (
    <Stack spacing={1.5}>
      {subtasks.map((subtask) => (
        <Box
          key={subtask.id}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            bgcolor: "transparent",
            borderRadius: 2,
            p: 1,
          }}
        >
          <Checkbox
            checked={subtask.completed}
            onChange={(e) => {
              e.stopPropagation()
              onToggle(subtask.id)
            }}
            inputProps={{
              "aria-label": `サブタスク「${subtask.title}」を${subtask.completed ? "未完了" : "完了"}にする`,
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
            sx={{ p: 0 }}
          />
          <Typography
            sx={{
              flexGrow: 1,
              fontSize: "0.9375rem",
              textDecoration: subtask.completed ? "line-through" : "none",
              color: subtask.completed ? "text.secondary" : "text.primary",
            }}
          >
            {subtask.title}
          </Typography>
          {showDeleteButton && onDelete && (
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
