"use client"

import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material"
import { TaskAlt, Archive, Settings } from "@mui/icons-material"
import { usePathname } from "next/navigation"
import Link from "next/link"

const NAV_ITEMS = [
  { label: "タスク", icon: <TaskAlt />, path: "/tasks" },
  { label: "アーカイブ", icon: <Archive />, path: "/archive" },
  { label: "設定", icon: <Settings />, path: "/settings" },
]

export const BottomNav = () => {
  const pathname = usePathname()

  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 10 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={pathname}
        sx={{
          height: 60,
          maxWidth: "448px", // LayoutのmaxWidthに合わせる
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
        {NAV_ITEMS.map((item) => (
          <BottomNavigationAction
            key={item.path}
            label={item.label}
            icon={item.icon}
            component={Link}
            href={item.path}
            value={item.path}
          />
        ))}
      </BottomNavigation>
    </Paper>
  )
}
