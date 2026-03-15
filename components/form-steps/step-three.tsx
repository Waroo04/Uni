"use client"

import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function StepThree({ formData, setFormData }: any) {
  const sopValue = isNaN(formData.sop) ? 0 : formData.sop
  const lorValue = isNaN(formData.lor) ? 0 : formData.lor
  const appQuality = ((sopValue + lorValue) / 2).toFixed(1)

  const countries = [
    "USA",
    "UK",
    "Canada",
    "Australia",
    "Germany",
    "Singapore",
    "Netherlands",
    "Switzerland",
    "France",
    "Japan",
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 glass dark:glass-dark">
          <p className="text-sm text-slate-600 dark:text-slate-400">GRE Score</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">
            {isNaN(formData.gre) ? "—" : formData.gre}
          </p>
        </Card>
        <Card className="p-4 glass dark:glass-dark">
          <p className="text-sm text-slate-600 dark:text-slate-400">TOEFL Score</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">
            {isNaN(formData.toefl) ? "—" : formData.toefl}
          </p>
        </Card>
        <Card className="p-4 glass dark:glass-dark">
          <p className="text-sm text-slate-600 dark:text-slate-400">CGPA</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">
            {isNaN(formData.cgpa) ? "—" : formData.cgpa}
          </p>
        </Card>
        <Card className="p-4 glass dark:glass-dark">
          <p className="text-sm text-slate-600 dark:text-slate-400">SOP Strength</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white">
            {isNaN(formData.sop) ? "—" : `${formData.sop}/5`}
          </p>
        </Card>
      </div>

      <div>
        <Label htmlFor="country" className="text-base font-semibold mb-2 block">
          Target Country
        </Label>
        <Select value={formData.country} onValueChange={(value) => setFormData({ ...formData, country: value })}>
          <SelectTrigger className="glass dark:glass-dark border-white/30 dark:border-slate-700/30 h-10">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country} value={country}>
                {country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Card className="p-6 glass dark:glass-dark border-2 border-indigo-200 dark:border-indigo-500/30">
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">Application Quality Score</p>
        <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{appQuality}/5</p>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Your application is {Number.parseFloat(appQuality) > 3.5 ? "Strong" : "Good"} for top universities
        </p>
      </Card>
    </div>
  )
}
