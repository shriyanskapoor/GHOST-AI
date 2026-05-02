"use client"

import { FolderOpen, Plus, Users, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose?: () => void
  onCreateProject?: () => void
  className?: string
}

export function ProjectSidebar({
  isOpen,
  onClose,
  onCreateProject,
  className,
}: ProjectSidebarProps) {
  return (
    <aside
      data-slot="project-sidebar"
      data-state={isOpen ? "open" : "closed"}
      aria-hidden={!isOpen}
      className={cn(
        "fixed top-0 left-0 z-40 flex h-dvh w-72 flex-col border-r border-border-default bg-bg-surface/95 shadow-xl backdrop-blur-md transition-transform duration-200 ease-out",
        isOpen ? "translate-x-0" : "-translate-x-full",
        className,
      )}
    >
      <div className="flex h-12 shrink-0 items-center justify-between border-b border-border-default px-3">
        <h2 className="text-sm font-medium text-text-primary">Projects</h2>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Close sidebar"
          onClick={onClose}
        >
          <X className="text-text-secondary" />
        </Button>
      </div>

      <Tabs defaultValue="my-projects" className="flex min-h-0 flex-1 flex-col gap-3 p-3">
        <TabsList className="w-full">
          <TabsTrigger value="my-projects">My Projects</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
        </TabsList>

        <TabsContent value="my-projects" className="min-h-0 flex-1">
          <EmptyState
            icon={<FolderOpen className="h-8 w-8" />}
            title="No projects yet"
            description="Create your first project to get started."
          />
        </TabsContent>

        <TabsContent value="shared" className="min-h-0 flex-1">
          <EmptyState
            icon={<Users className="h-8 w-8" />}
            title="No shared projects"
            description="Projects shared with you will appear here."
          />
        </TabsContent>
      </Tabs>

      <div className="shrink-0 border-t border-border-default p-3">
        <Button
          variant="default"
          size="default"
          className="w-full"
          onClick={onCreateProject}
        >
          <Plus />
          New Project
        </Button>
      </div>
    </aside>
  )
}

interface EmptyStateProps {
  icon: React.ReactNode
  title: string
  description: string
}

function EmptyState({ icon, title, description }: EmptyStateProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 px-4 py-10 text-center">
      <div className="text-text-faint">{icon}</div>
      <p className="text-sm font-medium text-text-secondary">{title}</p>
      <p className="text-xs text-text-muted">{description}</p>
    </div>
  )
}
