"use client"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { TaskItem } from "../../../components/TaskItem"
import type { TaskType } from "../../../types"
import { Box } from "@mui/material"

type SortableTaskItemProps = {
  task: TaskType
  onToggle: (id: string) => void
}

export const SortableTaskItem = ({ task, onToggle }: SortableTaskItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: task.id,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  return (
    <Box ref={setNodeRef} style={style} sx={{ mb: 2 }}>
      <TaskItem
        task={task}
        onToggle={onToggle}
        dragHandleProps={{
          attributes,
          listeners,
        }}
      />
    </Box>
  )
}
