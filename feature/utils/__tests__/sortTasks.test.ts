import { describe, it, expect } from "vitest"
import { sortTasks, SortConfig } from "../sortTasks"
import { TaskType } from "../../types"

// Helper to create mock tasks
const createTask = (overrides: Partial<TaskType> = {}): TaskType => ({
  id: "1",
  title: "Task",
  priority: "medium",
  completed: false,
  createdAt: "2024-01-01T00:00:00.000Z",
  order: 0,
  ...overrides,
})

// Helper to test sort order
const expectSortOrder = (
  tasks: TaskType[],
  config: SortConfig,
  expectedIds: string[]
) => {
  const result = sortTasks(tasks, config)
  expect(result.map((t) => t.id)).toEqual(expectedIds)
}

describe("sortTasks", () => {
  describe("filtering", () => {
    it("should exclude completed tasks", () => {
      const tasks = [
        createTask({ id: "1", completed: false }),
        createTask({ id: "2", completed: true }),
        createTask({ id: "3", completed: false }),
      ]
      
      const result = sortTasks(tasks, { key: "date", direction: "asc" })
      
      expect(result).toHaveLength(2)
      expect(result.find((t) => t.id === "2")).toBeUndefined()
    })
  })

  describe("priority sorting", () => {
    const tasks = [
      createTask({ id: "1", priority: "low" }),
      createTask({ id: "2", priority: "high" }),
      createTask({ id: "3", priority: "medium" }),
    ]

    it("should sort by priority ascending (low → high)", () => {
      expectSortOrder(tasks, { key: "priority", direction: "asc" }, ["1", "3", "2"])
    })

    it("should sort by priority descending (high → low)", () => {
      expectSortOrder(tasks, { key: "priority", direction: "desc" }, ["2", "3", "1"])
    })
  })

  describe("date sorting", () => {
    const tasks = [
      createTask({ id: "1", createdAt: "2024-01-03T00:00:00.000Z" }),
      createTask({ id: "2", createdAt: "2024-01-01T00:00:00.000Z" }),
      createTask({ id: "3", createdAt: "2024-01-02T00:00:00.000Z" }),
    ]

    it("should sort by creation date ascending (oldest first)", () => {
      expectSortOrder(tasks, { key: "date", direction: "asc" }, ["2", "3", "1"])
    })

    it("should sort by creation date descending (newest first)", () => {
      expectSortOrder(tasks, { key: "date", direction: "desc" }, ["1", "3", "2"])
    })
  })

  describe("custom order sorting", () => {
    const tasks = [
      createTask({ id: "1", order: 3 }),
      createTask({ id: "2", order: 1 }),
      createTask({ id: "3", order: 2 }),
    ]

    it("should sort by custom order ascending", () => {
      expectSortOrder(tasks, { key: "custom", direction: "asc" }, ["2", "3", "1"])
    })

    it("should sort by custom order descending", () => {
      expectSortOrder(tasks, { key: "custom", direction: "desc" }, ["1", "3", "2"])
    })
  })

  describe("deadline sorting", () => {
    const tasks = [
      createTask({ id: "1" }), // No deadline
      createTask({ id: "2", deadline: "2025-01-15T00:00:00.000Z" }),
      createTask({ id: "3", deadline: "2025-01-10T00:00:00.000Z" }),
      createTask({ id: "4", deadline: "2025-01-20T00:00:00.000Z" }),
      createTask({ id: "5" }), // No deadline
    ]

    it("should sort by deadline ascending (earliest first)", () => {
      expectSortOrder(
        tasks,
        { key: "deadline", direction: "asc" },
        ["3", "2", "4", "1", "5"]
      )
    })

    it("should sort by deadline descending (latest first)", () => {
      expectSortOrder(
        tasks,
        { key: "deadline", direction: "desc" },
        ["1", "5", "4", "2", "3"]
      )
    })

    it("should place tasks without deadline at the end when ascending", () => {
      const result = sortTasks(tasks, { key: "deadline", direction: "asc" })
      const lastTwoTasks = result.slice(-2)
      
      expect(lastTwoTasks.every((t) => !t.deadline)).toBe(true)
    })

    it("should place tasks without deadline at the beginning when descending", () => {
      const result = sortTasks(tasks, { key: "deadline", direction: "desc" })
      const firstTwoTasks = result.slice(0, 2)
      
      expect(firstTwoTasks.every((t) => !t.deadline)).toBe(true)
    })

    it("should maintain correct count of tasks with and without deadlines", () => {
      const result = sortTasks(tasks, { key: "deadline", direction: "asc" })
      const withDeadline = result.filter((t) => t.deadline)
      const withoutDeadline = result.filter((t) => !t.deadline)
      
      expect(withDeadline.length).toBe(3)
      expect(withoutDeadline.length).toBe(2)
    })
  })
})
