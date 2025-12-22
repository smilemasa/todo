import { useState } from "react"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Typography,
  Box,
  InputAdornment,
} from "@mui/material"
import { DateRange, KeyboardArrowDown } from "@mui/icons-material"
import type { TaskType } from "../types"
import { useTaskContext } from "../context/TaskContext"

type NewTaskDialogProps = {
  open: boolean
  onClose: () => void
}

export const NewTaskDialog = ({ open, onClose }: NewTaskDialogProps) => {
  const { addTask } = useTaskContext()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState("中") // Default to Medium
  const [date, setDate] = useState("")
  const [titleError, setTitleError] = useState(false)

  const handleCreate = () => {
    // Validation
    if (!title.trim()) {
      setTitleError(true)
      return
    }
    setTitleError(false)

    const newTask: Omit<TaskType, "id" | "completed" | "createdAt" | "order"> = {
      title,
      description: description || undefined,
      // Handle priority as a tag for now, as per existing data structure
      priority: priority === "高" ? "high" : priority === "中" ? "medium" : "low",
      // Format date to YYYY/MM/DD
      deadline: date ? date.replace(/-/g, "/") : undefined,
    }

    addTask(newTask)
    resetForm()
    onClose()
  }

  const resetForm = () => {
    setTitle("")
    setDescription("")
    setPriority("中")
    setDate("")
    setTitleError(false)
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            borderRadius: 4,
            p: 1,
            width: "100%",
            maxWidth: 480,
          },
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: 800, fontSize: "24px" }}>新しいタスク</DialogTitle>

      <DialogContent>
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
            タスク名{" "}
            <Box component="span" sx={{ color: "error.main" }}>
              *
            </Box>
          </Typography>
          <TextField
            fullWidth
            placeholder="タスク名を入力"
            variant="outlined"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
              if (titleError && e.target.value.trim()) {
                setTitleError(false)
              }
            }}
            error={titleError}
            helperText={titleError ? "タスク名は必須です" : ""}
            slotProps={{
              input: {
                sx: { borderRadius: 2, bgcolor: "#fff" },
              },
            }}
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
            説明（任意）
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="詳細を入力"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            slotProps={{
              input: {
                sx: { borderRadius: 2, bgcolor: "#fff" },
              },
            }}
          />
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
              優先度
            </Typography>
            <FormControl>
              <Select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                displayEmpty
                IconComponent={KeyboardArrowDown}
                sx={{ borderRadius: 2, bgcolor: "#fff" }}
              >
                <MenuItem value="高">高</MenuItem>
                <MenuItem value="中">中</MenuItem>
                <MenuItem value="低">低</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
              期限
            </Typography>
            <TextField
              fullWidth
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              slotProps={{
                input: {
                  sx: { borderRadius: 2, bgcolor: "#fff" },
                  endAdornment: (
                    <InputAdornment position="end">
                      <DateRange sx={{ color: "text.secondary" }} />
                    </InputAdornment>
                  ),
                },
              }}
              // This is a bit of a hack to show placeholder logic if needed,
              // but MUI date input usually handles itself.
              // The browser's native date picker will be used.
              // We'll hide the default calendar indicator to use our icon if possible,
              // but for standard HTML date input, customizing the icon is tricky reliably cross-browser without a library like MUI DatePicker.
              // For this task, we will stick to standard TextField with type="date".
              sx={{
                "& input::-webkit-calendar-picker-indicator": {
                  opacity: 0,
                  display: "block",
                  position: "absolute",
                  right: 0,
                  width: "100%",
                  height: "100%",
                  cursor: "pointer",
                },
                position: "relative",
              }}
            />
            {/* Note: The above CSS hack for date picker indicator might be flaky. 
                 If the user strictly wants the icon as shown, we might need a specific DatePicker component 
                 or just rely on the native one. 
                 I'll use a simple placeholder approach for the "No date selected" state if I can.
                 actually, standard type='date' is fine for MVP. 
                 The provided image shows a placeholder "日付を選択" and a calendar icon.
                 Achieving exactly that with standard <input type="date"> is hard because it usually shows "mm/dd/yyyy" or similar.
                 Let's try to mimic it using the standard one but maybe let the placeholder be visible if empty?
                 Actually, type="text" switching to "date" on focus is a common trick, but can be jarring.
                 I'll stick to a simple text field that works as date picker or just type='date'.
              */}
          </Box>
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 3 }}>
        <Button
          onClick={onClose}
          variant="outlined"
          size="large"
          sx={{
            borderRadius: 2,
            color: "text.primary",
            borderColor: "divider",
            px: 4,
            fontWeight: 700,
          }}
        >
          キャンセル
        </Button>
        <Button
          onClick={handleCreate}
          variant="contained"
          size="large"
          disableElevation
          sx={{
            borderRadius: 2,
            px: 4,
            fontWeight: 700,
          }}
        >
          作成
        </Button>
      </DialogActions>
    </Dialog>
  )
}
