"use client"

import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material"
import { TaskAlt, CalendarMonth, Archive, Settings } from "@mui/icons-material"
import { useRouter, usePathname } from "next/navigation"

export const BottomNav = () => {
  const router = useRouter()
  const pathname = usePathname()

  const getValue = () => {
    if (pathname === "/schedule") return 1
    if (pathname === "/archive") return 2
    if (pathname === "/settings") return 3
    return 0
  }

  const value = getValue()

  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 10 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => {
          switch (newValue) {
            case 0:
              router.push("/")
              break
            case 1:
              router.push("/schedule")
              break
            case 2:
              router.push("/archive")
              break
            case 3:
              router.push("/settings")
              break
          }
        }}
        sx={{
          height: 60,
          maxWidth: "448px", // Match the Layout maxWidth
          mx: "auto",
          "& .MuiBottomNavigationAction-root": {
            color: "text.secondary",
            whiteSpace: "nowrap",
            "&.Mui-selected": {
              color: "primary.main",
            },
            "& .MuiBottomNavigationAction-label": {
              fontSize: "0.75rem",
              "&.Mui-selected": {
                fontSize: "0.8rem",
              },
            },
          },
        }}
      >
        <BottomNavigationAction label="タスク" icon={<TaskAlt />} />
        <BottomNavigationAction label="予定" icon={<CalendarMonth />} />
        <BottomNavigationAction label="アーカイブ" icon={<Archive />} />
        <BottomNavigationAction label="設定" icon={<Settings />} />
      </BottomNavigation>
    </Paper>
  )
}
