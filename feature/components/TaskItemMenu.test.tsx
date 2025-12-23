import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { TaskItemMenu } from "./TaskItemMenu"

describe("TaskItemMenu", () => {
  it("Should render menu button", () => {
    render(<TaskItemMenu onEdit={() => {}} onDuplicate={() => {}} onDelete={() => {}} />)
    expect(screen.getByLabelText("メニューを開く")).toBeVisible()
  })

  it("Should open menu and show items when clicked", () => {
    render(<TaskItemMenu onEdit={() => {}} onDuplicate={() => {}} onDelete={() => {}} />)

    fireEvent.click(screen.getByLabelText("メニューを開く"))

    expect(screen.getByText("編集")).toBeVisible()
    expect(screen.getByText("複製")).toBeVisible()
    expect(screen.getByText("削除")).toBeVisible()
  })

  it("Should call callbacks when items are clicked", () => {
    const handleEdit = vi.fn()
    const handleDuplicate = vi.fn()
    const handleDelete = vi.fn()

    render(
      <TaskItemMenu onEdit={handleEdit} onDuplicate={handleDuplicate} onDelete={handleDelete} />
    )

    fireEvent.click(screen.getByLabelText("メニューを開く"))

    fireEvent.click(screen.getByText("編集"))
    expect(handleEdit).toHaveBeenCalled()

    fireEvent.click(screen.getByLabelText("メニューを開く"))
    fireEvent.click(screen.getByText("複製"))
    expect(handleDuplicate).toHaveBeenCalled()

    fireEvent.click(screen.getByLabelText("メニューを開く"))
    fireEvent.click(screen.getByText("削除"))
    expect(handleDelete).toHaveBeenCalled()
  })
})
