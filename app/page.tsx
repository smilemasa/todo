"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "../feature/context/AuthContext"

export default function Page() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading) {
      if (user) {
        router.push("/tasks")
      } else {
        router.push("/login")
      }
    }
  }, [user, isLoading, router])

  return null
}
