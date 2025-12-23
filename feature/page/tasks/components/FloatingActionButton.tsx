"use client"

import { Button, Box } from "@mui/material"
import { Add } from "@mui/icons-material"

type FloatingActionButtonProps = {
  onClick: () => void
}

export const FloatingActionButton = ({ onClick }: FloatingActionButtonProps) => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 60,
        left: 0,
        right: 0,
        p: 2,
        pb: 1,
        background: "linear-gradient(to top, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100%)",
        pointerEvents: "none",
        display: "flex",
        justifyContent: "center",
        zIndex: 5,
      }}
    >
      <Button
        variant="contained"
        color="primary"
        startIcon={<Add sx={{ fontSize: "28px !important", strokeWidth: 3 }} />}
        sx={{
          pointerEvents: "auto",
          width: "100%",
          maxWidth: { xs: "calc(100% - 32px)", sm: 384 }, // Max width matching card container approx
          height: 56,
          fontSize: "1.125rem", // text-lg
          fontWeight: 700,
          borderRadius: 3, // rounded-xl
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          textTransform: "none",
        }}
        onClick={onClick}
      >
        新しいタスク
      </Button>
    </Box>
  )
}
