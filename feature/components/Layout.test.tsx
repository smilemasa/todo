import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { Layout } from "./Layout"
import { usePathname } from "next/navigation"

vi.mock("next/navigation", () => ({
  usePathname: vi.fn(),
}))

vi.mock("./BottomNav", () => ({
  BottomNav: () => <div data-testid="bottom-nav">Mock BottomNav</div>,
}))

describe("Layout", () => {
  it("Should render children correctly", () => {
    vi.mocked(usePathname).mockReturnValue("/")
    render(
      <Layout>
        <div data-testid="child">Child Content</div>
      </Layout>
    )
    expect(screen.getByTestId("child")).toBeVisible()
  })

  it("Should render BottomNav when not on login page", () => {
    vi.mocked(usePathname).mockReturnValue("/tasks")
    render(
      <Layout>
        <div>Content</div>
      </Layout>
    )
    expect(screen.getByTestId("bottom-nav")).toBeVisible()
  })

  it("Should NOT render BottomNav when on login page", () => {
    vi.mocked(usePathname).mockReturnValue("/login")
    render(
      <Layout>
        <div>Content</div>
      </Layout>
    )
    expect(screen.queryByTestId("bottom-nav")).not.toBeInTheDocument()
  })
})
