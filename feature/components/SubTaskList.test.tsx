import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { SubTaskList } from "./SubTaskList"
import { SubTask } from "../types"
import userEvent from "@testing-library/user-event"

const mockSubtasks: SubTask[] = [
  { id: "1", title: "Subtask 1", completed: false },
  { id: "2", title: "Subtask 2", completed: true },
]

describe("SubTaskList", () => {
  it("Should render subtasks correctly", () => {
    render(
      <SubTaskList
        subtasks={mockSubtasks}
        onUpdate={() => {}}
        onDelete={() => {}}
        onToggle={() => {}}
      />
    )
    expect(screen.getByText("Subtask 1")).toBeVisible()
    expect(screen.getByText("Subtask 2")).toBeVisible()

    const subtask2 = screen.getByText("Subtask 2")
    expect(subtask2).toHaveStyle({ textDecoration: "line-through" })
  })

  it("Should call onToggle when checkbox is clicked", () => {
    const handleToggle = vi.fn()
    render(
      <SubTaskList
        subtasks={mockSubtasks}
        onUpdate={() => {}}
        onDelete={() => {}}
        onToggle={handleToggle}
      />
    )

    const checkboxes = screen.getAllByRole("checkbox")
    fireEvent.click(checkboxes[0])
    expect(handleToggle).toHaveBeenCalledWith("1")
  })

  it("Should call onDelete when delete button is clicked and showDeleteButton is true", () => {
    const handleDelete = vi.fn()
    render(
      <SubTaskList
        subtasks={mockSubtasks}
        showDeleteButton={true}
        onUpdate={() => {}}
        onDelete={handleDelete}
        onToggle={() => {}}
      />
    )

    const deleteButtons = screen.getAllByLabelText(/サブタスク「.*」を削除/)
    fireEvent.click(deleteButtons[0])
    expect(handleDelete).toHaveBeenCalledWith("1")
  })

  it("Should switch to edit mode when title is clicked and update on blur", async () => {
    const handleUpdate = vi.fn()
    render(
      <SubTaskList
        subtasks={mockSubtasks}
        onUpdate={handleUpdate}
        onDelete={() => {}}
        onToggle={() => {}}
      />
    )

    const title = screen.getByText("Subtask 1")
    fireEvent.click(title)

    const input = screen.getByDisplayValue("Subtask 1")
    await userEvent.type(input, " Updated")
    fireEvent.blur(input)

    expect(handleUpdate).toHaveBeenCalledWith("1", "Subtask 1 Updated")
  })
})
