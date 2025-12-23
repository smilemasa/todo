import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { Header } from "./Header"

describe("Header", () => {
  it("Should render title correctly", () => {
    render(<Header title="Test Title" />)
    expect(screen.getByRole("heading", { name: "Test Title" })).toBeVisible()
  })

  it("Should render children when provided", () => {
    render(
      <Header title="Title with Children">
        <button>Child Button</button>
      </Header>
    )
    expect(screen.getByRole("button", { name: "Child Button" })).toBeVisible()
  })
})
