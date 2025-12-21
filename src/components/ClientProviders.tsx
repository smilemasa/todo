"use client"

import { ThemeProvider, CssBaseline } from "@mui/material"
import { theme } from "../theme"
import { TaskProvider } from "../context/TaskContext"

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TaskProvider>{children}</TaskProvider>
    </ThemeProvider>
  )
}
