import { Storage } from "@google-cloud/storage"
import type { TaskType } from "../feature/types"

// GCS クライアントの初期化
const storage = new Storage({
  projectId: process.env.GCS_PROJECT_ID,
  credentials: JSON.parse(process.env.GCS_SERVICE_ACCOUNT_KEY || "{}"),
})

const bucketName = process.env.GCS_BUCKET_NAME
if (!bucketName) {
  console.warn("GCS_BUCKET_NAME is not set. Cloud Storage functionality will not be available.")
}
const bucket = bucketName ? storage.bucket(bucketName) : null

/**
 * ユーザーのタスクをGCSに保存
 */
export async function saveUserTasks(userId: string, tasks: TaskType[]): Promise<void> {
  if (!bucket) {
    throw new Error("Cloud Storage is not configured. Please set GCS_BUCKET_NAME environment variable.")
  }
  const fileName = `tasks/${userId}.json`
  const file = bucket.file(fileName)

  const content = JSON.stringify(tasks, null, 2)

  await file.save(content, {
    contentType: "application/json",
    metadata: {
      cacheControl: "no-cache",
    },
  })
}

/**
 * ユーザーのタスクをGCSから取得
 */
export async function getUserTasks(userId: string): Promise<TaskType[]> {
  if (!bucket) {
    console.warn("Cloud Storage is not configured. Returning empty task list.")
    return []
  }
  const fileName = `tasks/${userId}.json`
  const file = bucket.file(fileName)

  try {
    const [exists] = await file.exists()
    if (!exists) {
      return []
    }

    const [content] = await file.download()
    const tasks = JSON.parse(content.toString()) as TaskType[]
    return tasks
  } catch (error) {
    console.error("Error loading tasks from GCS:", error)
    return []
  }
}

/**
 * ユーザーのタスクファイルを削除
 */
export async function deleteUserTasks(userId: string): Promise<void> {
  if (!bucket) {
    throw new Error("Cloud Storage is not configured. Please set GCS_BUCKET_NAME environment variable.")
  }
  const fileName = `tasks/${userId}.json`
  const file = bucket.file(fileName)

  try {
    const [exists] = await file.exists()
    if (exists) {
      await file.delete()
    }
  } catch (error) {
    console.error("Error deleting tasks from GCS:", error)
    throw error
  }
}

/**
 * 新しいタスクを追加
 */
export async function addUserTask(userId: string, task: TaskType): Promise<void> {
  const tasks = await getUserTasks(userId)
  tasks.unshift(task)
  await saveUserTasks(userId, tasks)
}

/**
 * タスクを更新
 */
export async function updateUserTask(userId: string, taskId: string, updatedTask: TaskType): Promise<void> {
  const tasks = await getUserTasks(userId)
  const index = tasks.findIndex((t) => t.id === taskId)
  if (index !== -1) {
    tasks[index] = updatedTask
    await saveUserTasks(userId, tasks)
  } else {
    throw new Error("Task not found")
  }
}

/**
 * タスクを削除
 */
export async function deleteUserTask(userId: string, taskId: string): Promise<void> {
  const tasks = await getUserTasks(userId)
  const filteredTasks = tasks.filter((t) => t.id !== taskId)
  await saveUserTasks(userId, filteredTasks)
}
