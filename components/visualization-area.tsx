"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts"

// Sample data for visualizations
const forecastData = [
  { month: "Jan", value: 2400, projection: 2400 },
  { month: "Feb", value: 2800, projection: 2900 },
  { month: "Mar", value: 3200, projection: 3400 },
  { month: "Apr", value: 3100, projection: 3800 },
  { month: "May", value: 3800, projection: 4200 },
  { month: "Jun", value: 4200, projection: 4800 },
]

const investmentData = [
  { region: "North America", value: 4200 },
  { region: "Europe", value: 3800 },
  { region: "Asia Pacific", value: 2800 },
  { region: "Others", value: 1200 },
]

const patentData = [
  { year: "2020", count: 240 },
  { year: "2021", count: 450 },
  { year: "2022", count: 720 },
  { year: "2023", count: 1050 },
  { year: "2024", count: 1480 },
]

export function VisualizationArea() {
  return (
    <div className="space-y-6">
      {/* Forecasting Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Market Forecasting</CardTitle>
          <CardDescription>Technology adoption projections over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={forecastData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
              <YAxis stroke="var(--color-muted-foreground)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: `1px solid var(--color-border)`,
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="value"
                stroke="var(--color-primary)"
                fillOpacity={1}
                fill="url(#colorValue)"
                name="Current"
              />
              <Area
                type="monotone"
                dataKey="projection"
                stroke="var(--color-accent)"
                fillOpacity={0}
                strokeDasharray="5 5"
                name="Projection"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Investment Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Investment Distribution</CardTitle>
          <CardDescription>Capital allocation by geography</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={investmentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="region" stroke="var(--color-muted-foreground)" />
              <YAxis stroke="var(--color-muted-foreground)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: `1px solid var(--color-border)`,
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="value" fill="var(--color-accent)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Patent Activity Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Patent Activity Timeline</CardTitle>
          <CardDescription>Historical patent filing trends</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={patentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="year" stroke="var(--color-muted-foreground)" />
              <YAxis stroke="var(--color-muted-foreground)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: `1px solid var(--color-border)`,
                  borderRadius: "8px",
                }}
              />
              <Line
                type="monotone"
                dataKey="count"
                stroke="var(--color-chart-2)"
                strokeWidth={3}
                dot={{ fill: "var(--color-chart-2)", r: 5 }}
                name="Patents Filed"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
