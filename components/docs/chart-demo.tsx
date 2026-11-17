"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const data = [
  { day: "Mon", orders: 60 },
  { day: "Tue", orders: 90 },
  { day: "Wed", orders: 72 },
  { day: "Thu", orders: 120 },
  { day: "Fri", orders: 140 },
  { day: "Sat", orders: 104 },
  { day: "Sun", orders: 48 },
]

const config = { orders: { label: "Orders", color: "var(--chart-2)" } } satisfies ChartConfig

export function ChartDemo() {
  return (
    <ChartContainer config={config} className="h-48 w-full max-w-md">
      <BarChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="day" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="orders" fill="var(--color-orders)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
