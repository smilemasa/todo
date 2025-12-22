import { Box, Typography, Stack } from "@mui/material"
import { CheckCircleOutline } from "@mui/icons-material"
import { TaskItem } from "./TaskItem"
import { SortableTaskItem } from "./SortableTaskItem"
import type { TaskType } from "../types"
import { AnimatePresence, motion } from "framer-motion"
import {
  DndContext,
  closestCenter,
  TouchSensor,
  MouseSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable"

type TaskListProps = {
  tasks: TaskType[]
  onToggle: (id: string) => void
  onReorder?: (newTasks: TaskType[]) => void
  sortKey?: string
}

export const TaskList = ({ tasks, onToggle, onReorder, sortKey }: TaskListProps) => {
  // Configure touch sensor with delay for long press activation
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 5,
    },
  })

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  })

  const sensors = useSensors(mouseSensor, touchSensor)

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (!over || active.id === over.id) {
      return
    }

    const oldIndex = tasks.findIndex((task) => task.id === active.id)
    const newIndex = tasks.findIndex((task) => task.id === over.id)

    const newTasks = arrayMove(tasks, oldIndex, newIndex)
    onReorder?.(newTasks)
  }

  const isCustomSort = sortKey === "custom"

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

  // Enable drag and drop only for custom sort
  if (isCustomSort && onReorder) {
    return (
      <Box sx={{ px: 2, pt: 2, pb: "140px" }} role="list" aria-label="タスク一覧">
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={tasks.map((t) => t.id)} strategy={verticalListSortingStrategy}>
            <AnimatePresence mode="popLayout" initial={false}>
              {tasks.map((task) => (
                <motion.div
                  key={task.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.2 }}
                >
                  <SortableTaskItem task={task} onToggle={onToggle} />
                </motion.div>
              ))}
            </AnimatePresence>
          </SortableContext>
        </DndContext>
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
