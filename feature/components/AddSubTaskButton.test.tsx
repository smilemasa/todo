import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { AddSubTaskButton } from "./AddSubTaskButton"

describe("AddSubTaskButton", () => {
  it("Should render correctly when initial load", () => {
    render(<AddSubTaskButton onClick={() => {}} />)
    expect(screen.getByText("サブタスクを追加")).toBeVisible()
  })

  it("Should call onClick handler when clicked", () => {
    const handleClick = vi.fn()
    render(<AddSubTaskButton onClick={handleClick} />)

    fireEvent.click(screen.getByText("サブタスクを追加"))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
