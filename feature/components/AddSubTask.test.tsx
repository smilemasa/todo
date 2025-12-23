import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { AddSubTask } from "./AddSubTask"
import userEvent from "@testing-library/user-event"

vi.mock("./AddSubTaskButton", () => ({
  AddSubTaskButton: ({ onClick }: { onClick: () => void }) => (
    <button data-testid="add-subtask-button" onClick={onClick}>
      Mock Add Button
    </button>
  ),
}))

describe("AddSubTask", () => {
  it("Should render AddSubTaskButton initially when rendered", () => {
    render(<AddSubTask onAdd={() => {}} />)
    expect(screen.getByTestId("add-subtask-button")).toBeVisible()
    expect(screen.queryByPlaceholderText("新しいサブタスクを入力")).not.toBeInTheDocument()
  })

  it("Should switch to text field when button is clicked", () => {
    render(<AddSubTask onAdd={() => {}} />)
    fireEvent.click(screen.getByTestId("add-subtask-button"))
    expect(screen.getByPlaceholderText("新しいサブタスクを入力")).toBeVisible()
    expect(screen.queryByTestId("add-subtask-button")).not.toBeInTheDocument()
  })

  it("Should call onAdd when Enter is pressed with text", async () => {
    const handleAdd = vi.fn()
    render(<AddSubTask onAdd={handleAdd} />)

    fireEvent.click(screen.getByTestId("add-subtask-button"))

    const input = screen.getByPlaceholderText("新しいサブタスクを入力")
    await userEvent.type(input, "New Subtask{enter}")

    expect(handleAdd).toHaveBeenCalledWith("New Subtask")

    expect(screen.getByTestId("add-subtask-button")).toBeVisible()
  })

  it("Should not call onAdd when Enter is pressed with empty text", async () => {
    const handleAdd = vi.fn()
    render(<AddSubTask onAdd={handleAdd} />)

    fireEvent.click(screen.getByTestId("add-subtask-button"))
    const input = screen.getByPlaceholderText("新しいサブタスクを入力")
    await userEvent.type(input, "{enter}")

    expect(handleAdd).not.toHaveBeenCalled()
  })

  it("Should reset to button when Escape is pressed", async () => {
    render(<AddSubTask onAdd={() => {}} />)
    fireEvent.click(screen.getByTestId("add-subtask-button"))
    const input = screen.getByPlaceholderText("新しいサブタスクを入力")

    await userEvent.type(input, "Some text{escape}")

    expect(screen.getByTestId("add-subtask-button")).toBeVisible()
    expect(screen.queryByPlaceholderText("新しいサブタスクを入力")).not.toBeInTheDocument()
  })
})
