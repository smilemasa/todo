"use client"

import { Box, Button, Typography, Paper, Divider } from "@mui/material"
import GoogleIcon from "@mui/icons-material/Google"
import PersonIcon from "@mui/icons-material/Person"
import { useAuth } from "../context/AuthContext"

export const LoginPage = () => {
  const { loginGoogle, loginGuest, isLoading } = useAuth()

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        p: 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: 400,
          bgcolor: "transparent",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold" color="primary">
          Todo App
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          タスク管理をシンプルに
        </Typography>

        <Button
          variant="outlined"
          fullWidth
          startIcon={<GoogleIcon />}
          onClick={loginGoogle}
          disabled={isLoading}
          sx={{
            mb: 2,
            py: 1.5,
            textTransform: "none",
            fontSize: "1rem",
            borderColor: "divider",
            color: "text.primary",
            bgcolor: "background.paper",
            "&:hover": {
              bgcolor: "action.hover",
              borderColor: "text.primary",
            },
          }}
        >
          Googleでログイン
        </Button>

        <Divider sx={{ width: "100%", my: 2 }}>
          <Typography variant="caption" color="text.secondary">
            または
          </Typography>
        </Divider>

        <Button
          variant="text"
          fullWidth
          startIcon={<PersonIcon />}
          onClick={loginGuest}
          disabled={isLoading}
          sx={{
            py: 1.5,
            textTransform: "none",
            fontSize: "1rem",
            color: "text.secondary",
            "&:hover": {
              color: "text.primary",
              bgcolor: "action.hover",
            },
          }}
        >
          ゲストとして利用する
        </Button>
      </Paper>
    </Box>
  )
}
