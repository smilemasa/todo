"use client"

import { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"

type SettingsContextType = {
  autoCompleteParentTask: boolean
  setAutoCompleteParentTask: (value: boolean) => void
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

const SETTINGS_STORAGE_KEY = "todo-app-settings"

const getInitialSettings = () => {
  if (typeof window === "undefined") return true
  const savedSettings = localStorage.getItem(SETTINGS_STORAGE_KEY)
  if (savedSettings) {
    try {
      const settings = JSON.parse(savedSettings)
      if (typeof settings.autoCompleteParentTask === "boolean") {
        return settings.autoCompleteParentTask
      }
    } catch (error) {
      console.error("Error loading settings:", error)
    }
  }
  return true
}

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [autoCompleteParentTask, setAutoCompleteParentTaskState] = useState(getInitialSettings)

  // 設定変更時にlocalStorageに保存
  const setAutoCompleteParentTask = (value: boolean) => {
    setAutoCompleteParentTaskState(value)
    const settings = { autoCompleteParentTask: value }
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings))
  }

  return (
    <SettingsContext.Provider value={{ autoCompleteParentTask, setAutoCompleteParentTask }}>
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => {
  const context = useContext(SettingsContext)
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider")
  }
  return context
}
