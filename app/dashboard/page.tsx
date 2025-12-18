"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { KeyInsightsCards } from "@/components/key-insights-cards"
import { VisualizationArea } from "@/components/visualization-area"
import { SidebarPanels } from "@/components/sidebar-panels"

function DashboardContent() {
  const searchParams = useSearchParams()
  const techName = searchParams.get("tech") || "Technology"

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors">
              <ChevronLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back</span>
            </Link>
            <div className="flex-1 border-l border-border pl-4">
              <h1 className="text-2xl font-bold text-foreground">TechIntel</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Technology Header */}
        <DashboardHeader techName={decodeURIComponent(techName)} />

        {/* Key Insights Cards */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">Key Insights</h2>
          <KeyInsightsCards />
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Visualizations */}
          <div className="lg:col-span-2">
            <VisualizationArea />
          </div>

          {/* Sidebar Panels */}
          <div className="lg:col-span-1">
            <SidebarPanels />
          </div>
        </div>
      </div>
    </main>
  )
}

export default function DashboardPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground">Loading dashboard...</p>
          </div>
        </div>
      }
    >
      <DashboardContent />
    </Suspense>
  )
}
