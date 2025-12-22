"use client"

import { Box } from "@mui/material"
import { useTaskContext } from "../context/TaskContext"

export const TaskCountBadge = () => {
  const { uncompletedCount } = useTaskContext()

  return (
    <Box
      component="span"
      sx={{
        bgcolor: "#eff6ff", // blue-50
        color: "#2563eb", // blue-600
        fontWeight: 600,
        fontSize: "0.875rem",
        borderRadius: "9999px",
        px: 1.5,
        py: 0.5,
        mr: 1,
      }}
    >
      {uncompletedCount}件
    </Box>
  )
}
