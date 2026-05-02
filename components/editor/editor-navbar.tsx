"use client"

import { PanelLeftClose, PanelLeftOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface EditorNavbarProps {
  isSidebarOpen: boolean
  onToggleSidebar: () => void
  className?: string
}

export function EditorNavbar({
  isSidebarOpen,
  onToggleSidebar,
  className,
}: EditorNavbarProps) {
  const ToggleIcon = isSidebarOpen ? PanelLeftClose : PanelLeftOpen

  return (
    <header
      data-slot="editor-navbar"
      className={cn(
        "flex h-12 w-full shrink-0 items-center justify-between border-b border-border-default bg-bg-surface px-3",
        className,
      )}
    >
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          aria-pressed={isSidebarOpen}
          onClick={onToggleSidebar}
        >
          <ToggleIcon className="text-text-secondary" />
        </Button>
      </div>

      <div className="flex flex-1 items-center justify-center" />

      <div className="flex items-center gap-1" />
    </header>
  )
}
