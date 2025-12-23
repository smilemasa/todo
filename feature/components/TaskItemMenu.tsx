"use client"

import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material"
import { MoreVert, EditOutlined, ContentCopy, DeleteOutline } from "@mui/icons-material"
import { useState } from "react"

type TaskItemMenuProps = {
  onEdit: () => void
  onDuplicate: () => void
  onDelete: () => void
}

export const TaskItemMenu = ({ onEdit, onDuplicate, onDelete }: TaskItemMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton
        size="small"
        sx={{ color: "text.secondary" }}
        onClick={handleMenuOpen}
        aria-label="メニューを開く"
        aria-controls={open ? "task-menu" : undefined}
        aria-haspopup="true"
      >
        <MoreVert />
      </IconButton>

      <Menu
        id="task-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        onClick={(e) => e.stopPropagation()}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          paper: {
            elevation: 3,
            sx: {
              borderRadius: 3,
              minWidth: 180,
              mt: 1,
              padding: 0,
              "& .MuiList-root": {
                padding: 0,
              },
            },
          },
        }}
      >
        <MenuItem
          onClick={() => {
            handleMenuClose()
            onEdit()
          }}
          sx={{ py: 1.5 }}
        >
          <ListItemIcon sx={{ minWidth: 24, mr: 1.5 }}>
            <EditOutlined fontSize="small" sx={{ color: "text.secondary" }} />
          </ListItemIcon>
          <ListItemText
            primary="編集"
            slotProps={{ primary: { variant: "body2", fontWeight: 500 } }}
          />
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleMenuClose()
            onDuplicate()
          }}
          sx={{ py: 1.5 }}
        >
          <ListItemIcon sx={{ minWidth: 24, mr: 1.5 }}>
            <ContentCopy fontSize="small" sx={{ color: "text.secondary" }} />
          </ListItemIcon>
          <ListItemText
            primary="複製"
            slotProps={{ primary: { variant: "body2", fontWeight: 500 } }}
          />
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleMenuClose()
            onDelete()
          }}
          sx={{ py: 1.5 }}
        >
          <ListItemIcon sx={{ minWidth: 24, mr: 1.5 }}>
            <DeleteOutline fontSize="small" color="error" />
          </ListItemIcon>
          <ListItemText
            primary="削除"
            slotProps={{
              primary: { variant: "body2", fontWeight: 500, color: "error.main" },
            }}
          />
        </MenuItem>
      </Menu>
    </>
  )
}
