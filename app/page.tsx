"use client"

import { useState, useEffect } from "react"
import Sidebar from "@/components/sidebar"
import HomePage from "@/components/home-page"
import ScholarshipsPage from "@/components/scholarships-page"
import SavedProfilesPage from "@/components/saved-profiles-page"
import { ThemeToggle } from "@/components/theme-toggle"

export type Page = "home" | "scholarships" | "saved-profiles"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [currentPage, setCurrentPage] = useState<Page>("home")

  useEffect(() => {
    // Load saved predictions from localStorage on mount
    const saved = localStorage.getItem("saved_predictions")
    if (!saved) {
      localStorage.setItem("saved_predictions", JSON.stringify([]))
    }
  }, [])

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 flex">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="sticky top-0 right-0 p-6 flex justify-end z-40">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>

          {currentPage === "home" && <HomePage />}
          {currentPage === "scholarships" && <ScholarshipsPage />}
          {currentPage === "saved-profiles" && <SavedProfilesPage />}
        </main>
      </div>
    </div>
  )
}
