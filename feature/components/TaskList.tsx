import { Box, Typography, Stack } from "@mui/material"
import { CheckCircleOutline } from "@mui/icons-material"
import { TaskItem } from "./TaskItem"
import type { TaskType } from "../types"

type TaskListProps = {
  tasks: TaskType[]
  onToggle: (id: string) => void
}

export const TaskList = ({ tasks, onToggle }: TaskListProps) => {
  if (tasks.length === 0) {
    return (
      <Box
        sx={{
          px: 2,
          pt: 8,
          pb: "140px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack spacing={2} alignItems="center" sx={{ maxWidth: 280 }}>
          <CheckCircleOutline
            sx={{ fontSize: 64, color: "grey.300" }}
          />
          <Typography
            variant="h6"
            sx={{ color: "text.secondary", textAlign: "center" }}
          >
            タスクがありません
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.disabled", textAlign: "center" }}
          >
            右下の + ボタンから新しいタスクを追加しましょう
          </Typography>
        </Stack>
      </Box>
    )
  }

  return (
    <Box sx={{ px: 2, pt: 2, pb: "140px" }} role="list" aria-label="タスク一覧">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} />
      ))}
    </Box>
  )
}
