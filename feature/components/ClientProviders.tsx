"use client"

import { ThemeProvider, CssBaseline } from "@mui/material"
import { SessionProvider } from "next-auth/react"
import { theme } from "../theme"
import { TaskProvider } from "../context/TaskContext"
import { AuthProvider } from "../context/AuthContext"

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
          <TaskProvider>{children}</TaskProvider>
        </AuthProvider>
      </ThemeProvider>
    </SessionProvider>
  )
}
