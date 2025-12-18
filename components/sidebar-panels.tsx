"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, FileText, Grid3x3 } from "lucide-react"

interface PanelItem {
  id: string
  name: string
  description?: string
}

const relatedCompanies: PanelItem[] = [
  { id: "1", name: "TechCorp Industries", description: "Strategic partner" },
  { id: "2", name: "Innovation Labs Inc", description: "R&D leader" },
  { id: "3", name: "Advanced Systems Co", description: "Market leader" },
  { id: "4", name: "Future Tech Ventures", description: "Early stage" },
]

const publications: PanelItem[] = [
  { id: "1", name: "Journal of Tech Review" },
  { id: "2", name: "Innovation Quarterly" },
  { id: "3", name: "Defense Tech Report" },
  { id: "4", name: "Strategic Analysis Brief" },
]

const patentClusters: PanelItem[] = [
  { id: "1", name: "Core Technology Patents" },
  { id: "2", name: "Application Method Patents" },
  { id: "3", name: "Integration Patents" },
  { id: "4", name: "Emerging Use Cases" },
]

export function SidebarPanels() {
  return (
    <div className="space-y-4">
      {/* Related Companies */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-primary" />
            <CardTitle className="text-base">Related Companies</CardTitle>
          </div>
          <CardDescription className="text-xs">Key players in the ecosystem</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {relatedCompanies.map((company) => (
              <div
                key={company.id}
                className="p-2 rounded-md bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer border border-border/30"
              >
                <p className="text-sm font-medium text-foreground">{company.name}</p>
                {company.description && <p className="text-xs text-muted-foreground mt-0.5">{company.description}</p>}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Publications */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-accent" />
            <CardTitle className="text-base">Publications</CardTitle>
          </div>
          <CardDescription className="text-xs">Research & analysis sources</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {publications.map((pub) => (
              <div
                key={pub.id}
                className="p-2 rounded-md bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer border border-border/30"
              >
                <p className="text-sm text-foreground">{pub.name}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Patent Clusters */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Grid3x3 className="w-4 h-4 text-chart-2" />
            <CardTitle className="text-base">Patent Clusters</CardTitle>
          </div>
          <CardDescription className="text-xs">Innovation segments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {patentClusters.map((cluster) => (
              <div
                key={cluster.id}
                className="p-2 rounded-md bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer border border-border/30"
              >
                <p className="text-sm text-foreground">{cluster.name}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
