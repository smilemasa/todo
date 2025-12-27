import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { NewTaskDialog } from "./NewTaskDialog"
import userEvent from "@testing-library/user-event"

const mockAddTask = vi.fn()
vi.mock("../context/TaskContext", () => ({
  useTaskContext: () => ({
    addTask: mockAddTask,
  }),
}))

describe("NewTaskDialog", () => {
  it("Should render correctly when open", () => {
    render(<NewTaskDialog open={true} onClose={() => {}} />)
    expect(screen.getByText("新しいタスク")).toBeVisible()
    expect(screen.getByPlaceholderText("タスク名を入力")).toBeVisible()
    expect(screen.getByText("作成")).toBeVisible()
  })

  it("Should call addTask and onClose when submitted with valid data", async () => {
    const handleClose = vi.fn()
    mockAddTask.mockClear()

    render(<NewTaskDialog open={true} onClose={handleClose} />)

    const titleInput = screen.getByPlaceholderText("タスク名を入力")
    await userEvent.type(titleInput, "New Task 1")

    const createButton = screen.getByRole("button", { name: "作成" })
    fireEvent.click(createButton)

    expect(mockAddTask).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "New Task 1",
        priority: "medium",
      })
    )
    expect(handleClose).toHaveBeenCalled()
  })

  it("Should show error when title is empty", async () => {
    mockAddTask.mockClear()
    render(<NewTaskDialog open={true} onClose={() => {}} />)

    const createButton = screen.getByRole("button", { name: "作成" })
    fireEvent.click(createButton)

    expect(screen.getByText("タスク名は必須です")).toBeVisible()
    expect(mockAddTask).not.toHaveBeenCalled()
  })

  it("Should resets form when submitted", async () => {
    render(<NewTaskDialog open={true} onClose={() => {}} />)
    fireEvent.click(screen.getByRole("button", { name: "作成" }))
    expect(screen.getByText("タスク名は必須です")).toBeVisible()

    const titleInput = screen.getByPlaceholderText("タスク名を入力")
    await userEvent.type(titleInput, "A")

    expect(screen.queryByText("タスク名は必須です")).not.toBeInTheDocument()
  })
})
