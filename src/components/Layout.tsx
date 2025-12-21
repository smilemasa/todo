"use client"

import { Box, Container, Paper, CircularProgress } from "@mui/material"
import { BottomNav } from "./BottomNav"
import { Header } from "./Header"
import { usePathname, useRouter } from "next/navigation"
import { useAuth } from "../context/AuthContext"
import { useEffect } from "react"

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname()
  const router = useRouter()
  const { user, isLoading } = useAuth()
  const isLoginPage = pathname === "/login"

  useEffect(() => {
    if (!isLoading && !user && !isLoginPage) {
      router.push("/login")
    }
  }, [user, isLoading, isLoginPage, router])

  if (isLoading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "background.default",
        }}
      >
        <CircularProgress />
      </Box>
    )
  }

  // Don't render layout content while redirecting
  if (!user && !isLoginPage) {
    return null
  }

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Container maxWidth="xs" disableGutters>
        <Paper
          elevation={3}
          sx={{
            minHeight: "100vh",
            position: "relative",
            bgcolor: "background.default",
            pb: isLoginPage ? 0 : "70px", // Space for BottomNav only if not login
            display: "flex",
            flexDirection: "column",
          }}
        >
          {!isLoginPage && <Header />}
          <Box component="main" sx={{ flexGrow: 1, position: "relative", zIndex: 0 }}>
            {children}
          </Box>
          {!isLoginPage && <BottomNav />}
        </Paper>
      </Container>
    </Box>
  )
}
