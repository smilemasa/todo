import { Button } from "@mui/material"
import { Add } from "@mui/icons-material"

type AddSubTaskButtonProps = {
  onClick: () => void
}

export const AddSubTaskButton = ({ onClick }: AddSubTaskButtonProps) => {
  return (
    <Button
      fullWidth
      startIcon={<Add />}
      onClick={onClick}
      sx={{
        textTransform: "none",
        fontWeight: 500,
        fontSize: "0.9375rem",
        color: "#3b82f6",
        justifyContent: "flex-start",
        px: 2,
        py: 1.5,
        bgcolor: "transparent",
        "&:hover": {
          bgcolor: "#f3f4f6",
        },
      }}
    >
      サブタスクを追加
    </Button>
  )
}
