import { describe, it, expect } from "vitest"
import { sortTasks, SortConfig } from "../sortTasks"
import { TaskType } from "../../types"

// Helper to create mock tasks
const createMockTask = (
  id: string,
  priority: "low" | "medium" | "high",
  completed = false,
  createdAt = "2024-01-01T00:00:00.000Z",
  order = 0
): TaskType => ({
  id,
  title: `Task ${id}`,
  priority,
  completed,
  createdAt,
  order,
})

describe("sortTasks", () => {
  const tasks: TaskType[] = [
    createMockTask("1", "low", false, "2024-01-01T00:00:00.000Z", 3),
    createMockTask("2", "high", false, "2024-01-02T00:00:00.000Z", 1),
    createMockTask("3", "medium", false, "2024-01-03T00:00:00.000Z", 2),
    createMockTask("4", "high", true, "2024-01-04T00:00:00.000Z", 4),
  ]

  it("should return only uncompleted tasks when the input contains completed tasks", () => {
    const result = sortTasks(tasks, { key: "date", direction: "asc" })
    expect(result).toHaveLength(3)
    expect(result.find((t) => t.id === "4")).toBeUndefined()
  })

  it("should sort tasks by priority in ascending order when key is priority and direction is asc", () => {
    const config: SortConfig = { key: "priority", direction: "asc" }
    const result = sortTasks(tasks, config)
    // low (1), medium (3), high (2)
    expect(result.map((t) => t.id)).toEqual(["1", "3", "2"])
  })

  it("should sort tasks by priority in descending order when key is priority and direction is desc", () => {
    const config: SortConfig = { key: "priority", direction: "desc" }
    const result = sortTasks(tasks, config)
    // high (2), medium (3), low (1)
    expect(result.map((t) => t.id)).toEqual(["2", "3", "1"])
  })

  it("should sort tasks by date in ascending order (oldest first) when key is date and direction is asc", () => {
    const config: SortConfig = { key: "date", direction: "asc" }
    const result = sortTasks(tasks, config)
    // Jan 1 (1), Jan 2 (2), Jan 3 (3)
    expect(result.map((t) => t.id)).toEqual(["1", "2", "3"])
  })

  it("should sort tasks by date in descending order (newest first) when key is date and direction is desc", () => {
    const config: SortConfig = { key: "date", direction: "desc" }
    const result = sortTasks(tasks, config)
    // Jan 3 (3), Jan 2 (2), Jan 1 (1)
    expect(result.map((t) => t.id)).toEqual(["3", "2", "1"])
  })

  it("should sort tasks by custom order field in ascending order when key is custom and direction is asc", () => {
    const config: SortConfig = { key: "custom", direction: "asc" }
    const result = sortTasks(tasks, config)
    // Order: 1 (2), 2 (3), 3 (1)
    expect(result.map((t) => t.id)).toEqual(["2", "3", "1"])
  })

  it("should sort tasks by custom order field in descending order when key is custom and direction is desc", () => {
    const config: SortConfig = { key: "custom", direction: "desc" }
    const result = sortTasks(tasks, config)
    // Order: 3 (1), 2 (3), 1 (2)
    expect(result.map((t) => t.id)).toEqual(["1", "3", "2"])
  })
})
