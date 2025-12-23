import { render, screen } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import { BottomNav } from "./BottomNav"

vi.mock("next/navigation", () => ({
  usePathname: vi.fn(),
}))

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

import { usePathname } from "next/navigation"

describe("BottomNav", () => {
  it("Should render all navigation items when rendered", () => {
    vi.mocked(usePathname).mockReturnValue("/tasks")
    render(<BottomNav />)
    expect(screen.getByText("タスク")).toBeVisible()
    expect(screen.getByText("アーカイブ")).toBeVisible()
    expect(screen.getByText("設定")).toBeVisible()
  })

  it("Should highlight the active item when pathname matches", () => {
    vi.mocked(usePathname).mockReturnValue("/settings")
    render(<BottomNav />)

    const settingsButton = screen.getByRole("link", { name: "設定" })

    expect(settingsButton).toHaveClass("Mui-selected")

    const tasksButton = screen.getByRole("link", { name: "タスク" })
    expect(tasksButton.parentElement).not.toHaveClass("Mui-selected")
  })
})
