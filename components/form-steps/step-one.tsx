"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { InfoIcon } from "lucide-react"

export default function StepOne({ formData, setFormData }: any) {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Label htmlFor="gre" className="text-base font-semibold">
            GRE Score
          </Label>
          <div className="group relative">
            <InfoIcon className="w-4 h-4 text-slate-400 cursor-help" />
            <div className="absolute bottom-full left-0 mb-2 w-48 p-2 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition">
              Graduate Record Exam score (260-340)
            </div>
          </div>
        </div>
        <Input
          id="gre"
          type="number"
          min="260"
          max="340"
          value={isNaN(formData.gre) ? "" : formData.gre}
          onChange={(e) =>
            setFormData({ ...formData, gre: e.target.value === "" ? Number.NaN : Number.parseFloat(e.target.value) })
          }
          placeholder="Enter your GRE score"
          className="glass dark:glass-dark border-white/30 dark:border-slate-700/30"
        />
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <Label htmlFor="toefl" className="text-base font-semibold">
            TOEFL Score
          </Label>
          <div className="group relative">
            <InfoIcon className="w-4 h-4 text-slate-400 cursor-help" />
            <div className="absolute bottom-full left-0 mb-2 w-48 p-2 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition">
              Test of English as a Foreign Language (0-120)
            </div>
          </div>
        </div>
        <Input
          id="toefl"
          type="number"
          min="0"
          max="120"
          value={isNaN(formData.toefl) ? "" : formData.toefl}
          onChange={(e) =>
            setFormData({ ...formData, toefl: e.target.value === "" ? Number.NaN : Number.parseFloat(e.target.value) })
          }
          placeholder="Enter your TOEFL score"
          className="glass dark:glass-dark border-white/30 dark:border-slate-700/30"
        />
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <Label htmlFor="rating" className="text-base font-semibold">
            University Rating
          </Label>
          <div className="group relative">
            <InfoIcon className="w-4 h-4 text-slate-400 cursor-help" />
            <div className="absolute bottom-full left-0 mb-2 w-48 p-2 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition">
              How prestigious is the university? (1-5)
            </div>
          </div>
        </div>
        <Input
          id="rating"
          type="number"
          min="1"
          max="5"
          step="0.1"
          value={isNaN(formData.university_rating) ? "" : formData.university_rating}
          onChange={(e) =>
            setFormData({
              ...formData,
              university_rating: e.target.value === "" ? Number.NaN : Number.parseFloat(e.target.value),
            })
          }
          placeholder="Rate 1-5"
          className="glass dark:glass-dark border-white/30 dark:border-slate-700/30"
        />
      </div>
    </div>
  )
}
