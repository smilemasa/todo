"use client"

import { useState } from "react"
import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText, Divider } from "@mui/material"
import {
  Sort,
  ArrowUpward,
  ArrowDownward,
  CalendarToday,
  PriorityHigh,
  FormatListBulleted,
} from "@mui/icons-material"
import { useTaskContext, type SortConfig } from "../../../context/TaskContext"

export const SortMenu = () => {
  const { sortConfig, setSortConfig } = useTaskContext()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSortChange = (key: SortConfig["key"]) => {
    if (sortConfig.key === key) {
      setSortConfig({
        key,
        direction: sortConfig.direction === "asc" ? "desc" : "asc",
      })
    } else {
      setSortConfig({
        key,
        direction: "desc",
      })
    }
    handleClose()
  }

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 1, color: "text.secondary" }}
        aria-controls={open ? "sort-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Sort />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="sort-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          onClick={() => handleSortChange("priority")}
          selected={sortConfig.key === "priority"}
        >
          <ListItemIcon>
            <PriorityHigh fontSize="small" />
          </ListItemIcon>
          <ListItemText>優先度順</ListItemText>
          {sortConfig.key === "priority" &&
            (sortConfig.direction === "desc" ? (
              <ArrowDownward fontSize="small" sx={{ ml: 1, opacity: 0.7 }} />
            ) : (
              <ArrowUpward fontSize="small" sx={{ ml: 1, opacity: 0.7 }} />
            ))}
        </MenuItem>
        <MenuItem onClick={() => handleSortChange("date")} selected={sortConfig.key === "date"}>
          <ListItemIcon>
            <CalendarToday fontSize="small" />
          </ListItemIcon>
          <ListItemText>作成日順</ListItemText>
          {sortConfig.key === "date" &&
            (sortConfig.direction === "desc" ? (
              <ArrowDownward fontSize="small" sx={{ ml: 1, opacity: 0.7 }} />
            ) : (
              <ArrowUpward fontSize="small" sx={{ ml: 1, opacity: 0.7 }} />
            ))}
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => handleSortChange("custom")} selected={sortConfig.key === "custom"}>
          <ListItemIcon>
            <FormatListBulleted fontSize="small" />
          </ListItemIcon>
          <ListItemText>カスタム順</ListItemText>
          {sortConfig.key === "custom" &&
            (sortConfig.direction === "desc" ? (
              <ArrowDownward fontSize="small" sx={{ ml: 1, opacity: 0.7 }} />
            ) : (
              <ArrowUpward fontSize="small" sx={{ ml: 1, opacity: 0.7 }} />
            ))}
        </MenuItem>
      </Menu>
    </>
  )
}
