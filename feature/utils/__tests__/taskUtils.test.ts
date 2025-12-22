import { describe, it, expect } from "vitest"
import { sortTasks, SortConfig } from "../taskUtils"
import { TaskType } from "../../types"

// Helper to create mock tasks
const createMockTask = (
  id: string,
  priority: "low" | "medium" | "high",
  completed = false
): TaskType => ({
  id,
  title: `Task ${id}`,
  priority,
  completed,
})

describe("sortTasks", () => {
  const tasks: TaskType[] = [
    createMockTask("1", "low"), // Date: 1
    createMockTask("2", "high"), // Date: 2
    createMockTask("3", "medium"), // Date: 3
    createMockTask("4", "high", true), // Completed task
  ]

  it("should return only uncompleted tasks when the input contains completed tasks", () => {
    const result = sortTasks(tasks, { key: "date", direction: "asc" })
    expect(result).toHaveLength(3)
    expect(result.find((t) => t.id === "4")).toBeUndefined()
  })

  it("should sort tasks by priority in ascending order when key is priority and direction is asc", () => {
    const config: SortConfig = { key: "priority", direction: "asc" }
    const result = sortTasks(tasks, config)
    expect(result.map((t) => t.priority)).toEqual(["low", "medium", "high"])
  })

  it("should sort tasks by priority in descending order when key is priority and direction is desc", () => {
    const config: SortConfig = { key: "priority", direction: "desc" }
    const result = sortTasks(tasks, config)
    expect(result.map((t) => t.priority)).toEqual(["high", "medium", "low"])
  })

  it("should sort tasks by date in ascending order when key is date and direction is asc", () => {
    const config: SortConfig = { key: "date", direction: "asc" }
    const result = sortTasks(tasks, config)
    expect(result.map((t) => t.id)).toEqual(["1", "2", "3"])
  })

  it("should sort tasks by date in descending order when key is date and direction is desc", () => {
    const config: SortConfig = { key: "date", direction: "desc" }
    const result = sortTasks(tasks, config)
    expect(result.map((t) => t.id)).toEqual(["3", "2", "1"])
  })

  it("should sort tasks in reverse order when key is custom and direction is asc", () => {
    const config: SortConfig = { key: "custom", direction: "asc" }
    const result = sortTasks(tasks, config)
    expect(result.map((t) => t.id)).toEqual(["3", "2", "1"])
  })

  it("should sort tasks in original order when key is custom and direction is desc", () => {
    const config: SortConfig = { key: "custom", direction: "desc" }
    const result = sortTasks(tasks, config)
    expect(result.map((t) => t.id)).toEqual(["1", "2", "3"])
  })
})
