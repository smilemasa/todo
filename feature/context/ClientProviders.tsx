"use client"

import { ThemeProvider, CssBaseline } from "@mui/material"
import { SessionProvider } from "next-auth/react"
import { theme } from "../theme"
import { TaskProvider } from "./TaskContext"
import { AuthProvider } from "./AuthContext"
import { SettingsProvider } from "./SettingsContext"

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
          <SettingsProvider>
            <TaskProvider>{children}</TaskProvider>
          </SettingsProvider>
        </AuthProvider>
      </ThemeProvider>
    </SessionProvider>
  )
}
