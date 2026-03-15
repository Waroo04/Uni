"use client"

import type React from "react"
import { GraduationCap, BarChart3, BookOpen, BookMarkedIcon as BookmarkedIcon, Github, Linkedin } from "lucide-react"
import type { Page } from "@/app/page"

export default function Sidebar({
  currentPage,
  setCurrentPage,
}: { currentPage: Page; setCurrentPage: (page: Page) => void }) {
  return (
    <aside className="w-64 bg-gradient-to-b from-indigo-600 to-purple-700 text-white p-8 flex flex-col min-h-screen">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-12">
        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur">
          <GraduationCap className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-bold">UniPredictor</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-4">
        <NavItem
          icon={<BarChart3 className="w-5 h-5" />}
          label="Home"
          active={currentPage === "home"}
          onClick={() => setCurrentPage("home")}
        />
        <NavItem
          icon={<BookOpen className="w-5 h-5" />}
          label="Scholarships"
          active={currentPage === "scholarships"}
          onClick={() => setCurrentPage("scholarships")}
        />
        <NavItem
          icon={<BookmarkedIcon className="w-5 h-5" />}
          label="Saved Profiles"
          active={currentPage === "saved-profiles"}
          onClick={() => setCurrentPage("saved-profiles")}
        />
      </nav>

      {/* Footer */}
      <div className="space-y-4 pt-8 border-t border-white/20">
        <p className="text-sm opacity-75">© 2025 UniPredictor</p>
        <p className="text-xs opacity-60">Designed by Swaroop</p>
        <div className="flex gap-3 pt-4">
          <a href="#" className="hover:bg-white/20 p-2 rounded-lg transition">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="hover:bg-white/20 p-2 rounded-lg transition">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </aside>
  )
}

function NavItem({
  icon,
  label,
  active = false,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  active?: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
        active ? "bg-white/20 backdrop-blur" : "hover:bg-white/10"
      }`}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  )
}
