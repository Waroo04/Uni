"use client"

import { useState, useMemo } from "react"
import { Search, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts"
import { scholarshipByCountry } from "@/lib/scholarship-data"

export default function ScholarshipsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Filter countries based on search
  const filteredData = useMemo(() => {
    return scholarshipByCountry.filter((item) => item.country.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery])

  // Trend data for selected country
  const selectedCountry = filteredData.length > 0 ? filteredData[0] : scholarshipByCountry[0]

  const trendData = [
    {
      year: 2020,
      scholarships: Math.floor(selectedCountry.scholarships * 0.7),
      avgAmount: selectedCountry.avgAmount * 0.85,
    },
    {
      year: 2021,
      scholarships: Math.floor(selectedCountry.scholarships * 0.8),
      avgAmount: selectedCountry.avgAmount * 0.9,
    },
    {
      year: 2022,
      scholarships: Math.floor(selectedCountry.scholarships * 0.9),
      avgAmount: selectedCountry.avgAmount * 0.95,
    },
    { year: 2023, scholarships: selectedCountry.scholarships, avgAmount: selectedCountry.avgAmount },
  ]

  const SAFETY_COLOR = "#22c55e"
  const MATCH_COLOR = "#f97316"
  const REACH_COLOR = "#ef4444"
  const PURPLE_COLOR = "#a855f7"

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-foreground">Scholarships & Opportunities</h1>
        <p className="text-muted-foreground">
          Explore scholarship availability and admission competitiveness by country
        </p>
      </div>

      {/* Search Bar */}
      <Card className="mb-8 glass">
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search countries (e.g., USA, UK, Canada)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Country Stats */}
        <Card className="glass">
          <CardHeader>
            <CardTitle className="text-lg">Available Scholarships</CardTitle>
            <CardDescription>Number of opportunities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-primary">{selectedCountry.scholarships}</div>
            <p className="text-sm text-muted-foreground mt-2">in {selectedCountry.country}</p>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle className="text-lg">Average Award</CardTitle>
            <CardDescription>Per scholarship</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold" style={{ color: MATCH_COLOR }}>
              ${selectedCountry.avgAmount.toLocaleString()}
            </div>
            <p className="text-sm text-muted-foreground mt-2">USD annually</p>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle className="text-lg">Competitiveness</CardTitle>
            <CardDescription>Admission difficulty</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold" style={{ color: REACH_COLOR }}>
              {selectedCountry.competitiveness}%
            </div>
            <p className="text-sm text-muted-foreground mt-2">Competitive level</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Scholarships by Country */}
        <Card className="glass">
          <CardHeader>
            <CardTitle className="text-foreground">Scholarships Available by Country</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={filteredData.length > 0 ? filteredData : scholarshipByCountry}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="country" stroke="currentColor" />
                <YAxis stroke="currentColor" />
                <Tooltip
                  contentStyle={{ backgroundColor: "rgba(0,0,0,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}
                  labelStyle={{ color: "#fff" }}
                />
                <Bar dataKey="scholarships" fill={SAFETY_COLOR} radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Trend over time */}
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <TrendingUp className="w-5 h-5" />
              Scholarship Trends - {selectedCountry.country}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="year" stroke="currentColor" />
                <YAxis stroke="currentColor" />
                <Tooltip
                  contentStyle={{ backgroundColor: "rgba(0,0,0,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}
                  labelStyle={{ color: "#fff" }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="scholarships"
                  stroke={PURPLE_COLOR}
                  strokeWidth={2}
                  name="Available Scholarships"
                  dot={{ fill: PURPLE_COLOR, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Country Rankings with Tier Classification */}
      <Card className="glass">
        <CardHeader>
          <CardTitle className="text-foreground">Country Rankings by Competitiveness</CardTitle>
          <CardDescription>Higher percentage = more competitive admission</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[...scholarshipByCountry]
              .sort((a, b) => b.competitiveness - a.competitiveness)
              .map((country) => {
                let tierColor = SAFETY_COLOR
                let tierLabel = "SAFETY"
                if (country.competitiveness >= 80) {
                  tierColor = REACH_COLOR
                  tierLabel = "REACH"
                } else if (country.competitiveness >= 70) {
                  tierColor = MATCH_COLOR
                  tierLabel = "MATCH"
                }

                return (
                  <div
                    key={country.country}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-semibold text-foreground">{country.country}</span>
                        <span
                          className="text-xs font-bold px-2 py-1 rounded-full text-white"
                          style={{ backgroundColor: tierColor }}
                        >
                          {tierLabel}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-32 bg-white/10 rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all"
                          style={{ width: `${country.competitiveness}%`, backgroundColor: tierColor }}
                        />
                      </div>
                      <span className="text-sm font-semibold min-w-12 text-right" style={{ color: tierColor }}>
                        {country.competitiveness}%
                      </span>
                    </div>
                  </div>
                )
              })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
