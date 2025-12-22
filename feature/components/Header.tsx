"use client"

import { AppBar, Toolbar, Typography, Box } from "@mui/material"

export type HeaderProps = {
  title: string
  children?: React.ReactNode
}

export const Header = ({ title, children }: HeaderProps) => {
  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: "20px !important" }}>
        <Typography
          variant="h1"
          sx={{ fontSize: "1.5rem", fontWeight: 700, color: "text.primary" }}
        >
          {title}
        </Typography>
        {children && <Box sx={{ display: "flex", alignItems: "center" }}>{children}</Box>}
      </Toolbar>
    </AppBar>
  )
}
