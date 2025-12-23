import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { EditTaskDialog } from "./EditTaskDialog"
import { TaskType } from "../types"
import userEvent from "@testing-library/user-event"

vi.mock("./SubTaskList", () => ({
  SubTaskList: () => <div data-testid="subtask-list">Mock SubTaskList</div>,
}))

vi.mock("./AddSubTask", () => ({
  AddSubTask: () => <div data-testid="add-subtask">Mock AddSubTask</div>,
}))

const mockTask: TaskType = {
  id: "1",
  title: "Test Task",
  completed: false,
  deadline: "2023-12-31",
  priority: "high",
  description: "Test Description",
  subtasks: [],
  createdAt: "2023-01-01",
  order: 0,
}

describe("EditTaskDialog", () => {
  it("Should render correctly when open", () => {
    render(<EditTaskDialog open={true} onClose={() => {}} task={mockTask} onSave={() => {}} />)

    expect(screen.getByDisplayValue("Test Task")).toBeVisible()
    expect(screen.getByDisplayValue("Test Description")).toBeVisible()
    expect(screen.getByTestId("subtask-list")).toBeVisible()
    expect(screen.getByTestId("add-subtask")).toBeVisible()
  })

  it("Should call onSave with updated data when save button is clicked", async () => {
    const handleSave = vi.fn()
    render(<EditTaskDialog open={true} onClose={() => {}} task={mockTask} onSave={handleSave} />)

    const titleInput = screen.getByDisplayValue("Test Task")
    await userEvent.clear(titleInput)
    await userEvent.type(titleInput, "Updated Task")

    fireEvent.click(screen.getByText("保存"))

    expect(handleSave).toHaveBeenCalledWith(
      expect.objectContaining({
        ...mockTask,
        title: "Updated Task",
      })
    )
  })

  it("Should call onClose when close button is clicked", () => {
    const handleClose = vi.fn()
    render(<EditTaskDialog open={true} onClose={handleClose} task={mockTask} onSave={() => {}} />)
  })

  it("Should not save if title is empty", async () => {
    const handleSave = vi.fn()
    render(<EditTaskDialog open={true} onClose={() => {}} task={mockTask} onSave={handleSave} />)

    const titleInput = screen.getByDisplayValue("Test Task")
    await userEvent.clear(titleInput)

    fireEvent.click(screen.getByText("保存"))

    expect(handleSave).not.toHaveBeenCalled()
    expect(screen.getByText("タスク名は必須です")).toBeVisible()
  })
})
