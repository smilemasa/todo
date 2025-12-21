"use client"

import { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"
import { useRouter } from "next/navigation"
import { useSession, signIn, signOut } from "next-auth/react"

type User = {
  id: string
  name: string
  email?: string
  image?: string
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

  const loginGoogle = async () => {
    await signIn("google", { callbackUrl: "/" })
  }

  const loginGuest = () => {
    const newGuestUser: User = {
      id: "guest-" + Date.now(),
      name: "Guest User",
      isGuest: true,
    }
    setGuestUser(newGuestUser)
    router.push("/")
  }

  const logout = async () => {
    if (guestUser) {
      setGuestUser(null)
      router.push("/login")
    } else {
      await signOut({ callbackUrl: "/login" })
    }
  }

  const user: User | null = session?.user
    ? {
        id: (session.user as any).id || session.user.email || "",
        name: session.user.name || "User",
        email: session.user.email || undefined,
        image: session.user.image || undefined,
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
