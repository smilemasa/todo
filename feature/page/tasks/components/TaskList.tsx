import { Box, Typography, Stack } from "@mui/material"
import { CheckCircleOutline } from "@mui/icons-material"
import { TaskItem } from "../../../components/TaskItem"
import { SortableTaskItem } from "./SortableTaskItem"
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
import { useTaskContext } from "../../../context/TaskContext"
import { sortTasks } from "../../../utils/sortTasks"

export const TaskList = () => {
  const { tasks, toggleTask, sortConfig, reorderTasks } = useTaskContext()

  const displayTasks = sortTasks(tasks, sortConfig)

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

    const oldIndex = displayTasks.findIndex((task) => task.id === active.id)
    const newIndex = displayTasks.findIndex((task) => task.id === over.id)

    const newTasks = arrayMove(displayTasks, oldIndex, newIndex)

    // 完了済みタスクと未完了タスクを分離
    const completedTasks = tasks.filter((task) => task.completed)
    
    // 降順の場合は、表示順序と実際のorder値が逆になるため、配列を反転
    const orderedTasks = sortConfig.direction === "desc" ? [...newTasks].reverse() : newTasks
    
    // 新しい順序で未完了タスクを配置し、その後に完了済みタスクを追加
    const reorderedTasks = [...orderedTasks, ...completedTasks]
    
    reorderTasks(reorderedTasks)
  }

  const isCustomSort = sortConfig.key === "custom"

  if (displayTasks.length === 0) {
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
  if (isCustomSort) {
    return (
      <Box sx={{ px: 2, pt: 2, pb: "140px" }} role="list" aria-label="タスク一覧">
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={displayTasks.map((t) => t.id)} strategy={verticalListSortingStrategy}>
            <AnimatePresence mode="popLayout" initial={false}>
              {displayTasks.map((task) => (
                <motion.div
                  key={task.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.2 }}
                >
                  <SortableTaskItem task={task} onToggle={toggleTask} />
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
        {displayTasks.map((task) => (
          <motion.div
            key={task.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            transition={{ duration: 0.2 }}
            style={{ marginBottom: "16px" }}
          >
            <TaskItem task={task} onToggle={toggleTask} />
          </motion.div>
        ))}
      </AnimatePresence>
    </Box>
  )
}
