"use client"

import { createContext, useContext, useState, useEffect } from "react"
import type { ReactNode } from "react"
import { useRouter } from "next/navigation"
import { useSession, signIn, signOut } from "next-auth/react"
import Cookies from "js-cookie"

type User = {
  name: string
  email: string
  isGuest: boolean
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  loginGoogle: () => Promise<void>
  loginGuest: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [guestUser, setGuestUser] = useState<User | null>(null)
  const router = useRouter()
  const { data: session, status } = useSession()

  useEffect(() => {
    const guestToken = Cookies.get("guest-token")
    if (guestToken && !guestUser) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setGuestUser({
        name: "Guest User",
        email: "guest@example.com",
        isGuest: true,
      })
    }
  }, [guestUser])

  const loginGoogle = async () => {
    await signIn("google", { callbackUrl: "/tasks" })
  }

  const loginGuest = () => {
    const guestId = "GUEST"
    const newGuestUser: User = {
      name: "Guest User",
      email: "guest@example.com",
      isGuest: true,
    }
    Cookies.set("guest-token", guestId, { expires: 7 }) // Expire in 7 days
    setGuestUser(newGuestUser)
    router.push("/tasks")
  }

  const logout = async () => {
    // ゲストトークンと状態は常にクリアする
    Cookies.remove("guest-token")
    setGuestUser(null)

    // セッションが存在する場合（Googleログイン中など）はsignOutを実行
    if (status === "authenticated" || session) {
      await signOut({ callbackUrl: "/login" })
    } else {
      // ゲストのみの場合は手動でリダイレクト
      router.push("/login")
    }
  }

  const user: User | null = session?.user
    ? {
        name: session.user.name || "User",
        email: session.user.email || "",

        isGuest: false,
      }
    : guestUser

  const isLoading = status === "loading"

  return (
    <AuthContext.Provider value={{ user, isLoading, loginGoogle, loginGuest, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
