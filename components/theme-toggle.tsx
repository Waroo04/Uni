"use client"

import { Moon, Sun } from "lucide-react"

export function ThemeToggle({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (value: boolean) => void }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur border border-white/20 dark:border-slate-700/30 hover:bg-white dark:hover:bg-slate-700 transition"
    >
      {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-slate-700" />}
    </button>
  )
}
