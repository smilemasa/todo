"use client"

import { createContext, useContext, useState, useEffect } from "react"
import type { ReactNode } from "react"
import { useRouter } from "next/navigation"

type User = {
  id: string
  name: string
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

const STORAGE_KEY = "todo_auth_user"

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const initAuth = () => {
      // Check for persisted user
      const storedUser = localStorage.getItem(STORAGE_KEY)
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser))
        } catch (e) {
          console.error("Failed to parse user from storage", e)
          localStorage.removeItem(STORAGE_KEY)
        }
      }
      setIsLoading(false)
    }

    const timer = setTimeout(initAuth, 0)
    return () => clearTimeout(timer)
  }, [])

  const loginGoogle = async () => {
    setIsLoading(true)
    // Mock Google Login delay
    await new Promise((resolve) => setTimeout(resolve, 800))

    const mockUser: User = {
      id: "google-user-123",
      name: "Google User",
      isGuest: false,
    }

    setUser(mockUser)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockUser))
    setIsLoading(false)
    router.push("/")
  }

  const loginGuest = () => {
    const guestUser: User = {
      id: "guest-" + Date.now(),
      name: "Guest User",
      isGuest: true,
    }
    setUser(guestUser)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(guestUser))
    router.push("/")
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem(STORAGE_KEY)
    router.push("/login")
  }

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
