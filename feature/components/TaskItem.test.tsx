import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { TaskItem } from "./TaskItem"
import { TaskType } from "../types"
import { TaskItemMenuProps } from "./TaskItemMenu"

const mockAddSubtask = vi.fn()
const mockDuplicateTask = vi.fn()
const mockDeleteTask = vi.fn()
const mockUpdateTask = vi.fn()
const mockToggleSubtask = vi.fn()
const mockDeleteSubtask = vi.fn()
const mockUpdateSubtask = vi.fn()

vi.mock("../context/TaskContext", () => ({
  useTaskContext: () => ({
    addSubtask: mockAddSubtask,
    duplicateTask: mockDuplicateTask,
    deleteTask: mockDeleteTask,
    updateTask: mockUpdateTask,
    toggleSubtask: mockToggleSubtask,
    deleteSubtask: mockDeleteSubtask,
    updateSubtask: mockUpdateSubtask,
  }),
}))

vi.mock("./SubTaskList", () => ({
  SubTaskList: () => <div data-testid="subtask-list">Mock SubTaskList</div>,
}))

vi.mock("./AddSubTask", () => ({
  AddSubTask: () => <div data-testid="add-subtask">Mock AddSubTask</div>,
}))

vi.mock("./EditTaskDialog", () => ({
  EditTaskDialog: () => <div data-testid="edit-task-dialog">Mock EditTaskDialog</div>,
}))

vi.mock("./TaskItemMenu", () => ({
  TaskItemMenu: ({ onEdit, onDuplicate, onDelete }: TaskItemMenuProps) => (
    <div data-testid="task-item-menu">
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDuplicate}>Duplicate</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  ),
}))

const mockTask: TaskType = {
  id: "1",
  title: "Test Task",
  completed: false,
  deadline: "2023-12-31",
  priority: "high",
  description: "Desc",
  subtasks: [],
  createdAt: "2023-01-01",
  order: 0,
}

describe("TaskItem", () => {
  it("Should render task details", () => {
    render(<TaskItem task={mockTask} onToggle={() => {}} />)
    expect(screen.getByText("Test Task")).toBeVisible()
  })

  it("Should call onToggle when main checkbox is clicked", () => {
    const handleToggle = vi.fn()
    render(<TaskItem task={mockTask} onToggle={handleToggle} />)

    const checkbox = screen.getByRole("checkbox")
    fireEvent.click(checkbox)
    expect(handleToggle).toHaveBeenCalledWith("1")
  })

  it("Should expand and show subtasks when clicked", () => {
    render(<TaskItem task={mockTask} onToggle={() => {}} />)

    expect(screen.queryByTestId("subtask-list")).not.toBeInTheDocument()

    fireEvent.click(screen.getByText("Test Task"))

    expect(screen.getByTestId("subtask-list")).toBeVisible()
    expect(screen.getByTestId("add-subtask")).toBeVisible()
  })

  it("Should call context menus actions", () => {
    render(<TaskItem task={mockTask} onToggle={() => {}} />)

    fireEvent.click(screen.getByText("Delete"))
    expect(mockDeleteTask).toHaveBeenCalledWith("1")

    fireEvent.click(screen.getByText("Duplicate"))
    expect(mockDuplicateTask).toHaveBeenCalledWith("1")

    fireEvent.click(screen.getByText("Edit"))

    expect(screen.getByTestId("edit-task-dialog")).toBeVisible()
  })
})
