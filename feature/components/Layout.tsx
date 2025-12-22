"use client"

import { Box, Container, Paper } from "@mui/material"
import { BottomNav } from "./BottomNav"
import { Header } from "./Header"
import { usePathname } from "next/navigation"

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname()
  const isLoginPage = pathname === "/login"

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
