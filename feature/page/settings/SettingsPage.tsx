"use client"

import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Switch,
} from "@mui/material"
import { Header } from "../../components/Header"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import LogoutIcon from "@mui/icons-material/Logout"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"

import { useAuth } from "../../context/AuthContext"
import { useSettings } from "../../context/SettingsContext"

export const SettingsPage = () => {
  const { logout } = useAuth()
  const { autoCompleteParentTask, setAutoCompleteParentTask } = useSettings()

  const menuItems = [
    {
      text: "ヘルプ",
      icon: <HelpOutlineIcon />,
      color: "inherit",
      // TODO: 未実装
      disabled: true,
    },
    {
      text: "アプリについて",
      icon: <InfoOutlinedIcon />,
      color: "inherit",
      // TODO: 未実装
      disabled: true,
    },
    {
      text: "ログアウト",
      icon: <LogoutIcon sx={{ color: "#ef4444" }} />,
      color: "#ef4444",
      divider: true,
      onClick: logout,
    },
  ]

  return (
    <>
      <Header title="設定" />
      <Box sx={{ p: "24px" }}>
        {/* General Settings */}
        <Typography
          variant="body2"
          sx={{
            mb: 1,
            color: "text.secondary",
            fontSize: "14px",
          }}
        >
          タスク設定
        </Typography>

        {/* Task Settings */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid",
            borderColor: "divider",
            mb: 3,
          }}
        >
          <List disablePadding>
            <ListItem disablePadding>
              <ListItemButton
                sx={{ py: 2 }}
                onClick={() => setAutoCompleteParentTask(!autoCompleteParentTask)}
              >
                <ListItemIcon sx={{ minWidth: 40, color: "text.primary" }}>
                  <CheckCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText
                  primary="サブタスク完了時に親タスクを自動完了"
                  secondary="すべてのサブタスクを完了したら親タスクも完了にします"
                  slotProps={{
                    primary: {
                      sx: {
                        fontWeight: 500,
                        color: "text.primary",
                      },
                    },
                    secondary: {
                      sx: {
                        fontSize: "12px",
                        mt: 0.5,
                      },
                    },
                  }}
                />
                <Switch
                  edge="end"
                  checked={autoCompleteParentTask}
                  onChange={(e) => setAutoCompleteParentTask(e.target.checked)}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Paper>

        {/* Section Label */}
        <Typography
          variant="body2"
          sx={{
            mb: 1,
            color: "text.secondary",
            fontSize: "14px",
          }}
        >
          その他
        </Typography>

        {/* Menu List */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <List disablePadding>
            {menuItems.map((item, index) => (
              <ListItem key={item.text} disablePadding divider={index !== menuItems.length - 1}>
                <ListItemButton sx={{ py: 2 }} onClick={item.onClick} disabled={item.disabled}>
                  <ListItemIcon sx={{ minWidth: 40, color: "text.primary" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    slotProps={{
                      primary: {
                        sx: {
                          fontWeight: 500,
                          color: item.color === "inherit" ? "text.primary" : item.color,
                        },
                      },
                    }}
                  />
                  <ChevronRightIcon sx={{ color: "#9ca3af" }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </>
  )
}
