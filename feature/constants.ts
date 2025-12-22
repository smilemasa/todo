import { Priority } from "./types"

export const PRIORITY_COLORS = {
  low: {
    background: "#dbeafe", // blue-100
    text: "#1e40af", // blue-800
  },
  medium: {
    background: "#fef3c7", // yellow-100
    text: "#92400e", // yellow-900
  },
  high: {
    background: "#fee2e2", // red-100
    text: "#991b1b", // red-800
  },
} as const

export const PRIORITY_LABELS: Record<Priority, string> = {
  low: "低",
  medium: "中",
  high: "高",
}
