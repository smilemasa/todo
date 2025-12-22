import { Box, Typography, Stack } from "@mui/material"
import { CheckCircleOutline } from "@mui/icons-material"
import { TaskItem } from "./TaskItem"
import type { TaskType } from "../types"
import { AnimatePresence, motion } from "framer-motion"

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
          <CheckCircleOutline sx={{ fontSize: 64, color: "grey.300" }} />
          <Typography variant="h6" sx={{ color: "text.secondary", textAlign: "center" }}>
            タスクがありません
          </Typography>
          <Typography variant="body2" sx={{ color: "text.disabled", textAlign: "center" }}>
            「+ 新しいタスク」ボタンから新しいタスクを追加しましょう
          </Typography>
        </Stack>
      </Box>
    )
  }

  return (
    <Box sx={{ px: 2, pt: 2, pb: "140px" }} role="list" aria-label="タスク一覧">
      <AnimatePresence mode="popLayout" initial={false}>
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            transition={{ duration: 0.2 }}
            style={{ marginBottom: "16px" }}
          >
            <TaskItem task={task} onToggle={onToggle} />
          </motion.div>
        ))}
      </AnimatePresence>
    </Box>
  )
}
