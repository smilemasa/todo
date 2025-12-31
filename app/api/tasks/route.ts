import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/lib/auth"
import { getUserTasks, addUserTask, saveUserTasks } from "@/app/lib/gcsStorage"

// タスクの取得
export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const userId = session.user.email
    const tasks = await getUserTasks(userId)

    return NextResponse.json({ tasks })
  } catch (error) {
    console.error("Error fetching tasks:", error)
    return NextResponse.json({ error: "Failed to fetch tasks" }, { status: 500 })
  }
}

// 新規タスクの作成
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const userId = session.user.email
    const { task } = await request.json()

    await addUserTask(userId, task)

    return NextResponse.json({ success: true, task })
  } catch (error) {
    console.error("Error creating task:", error)
    return NextResponse.json({ error: "Failed to create task" }, { status: 500 })
  }
}

// タスクの一括更新（リオーダー用）
export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const userId = session.user.email
    const { tasks } = await request.json()

    await saveUserTasks(userId, tasks)

    return NextResponse.json({ success: true, tasks })
  } catch (error) {
    console.error("Error updating tasks:", error)
    return NextResponse.json({ error: "Failed to update tasks" }, { status: 500 })
  }
}
