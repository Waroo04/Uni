"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { InfoIcon } from "lucide-react"

export default function StepTwo({ formData, setFormData }: any) {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Label htmlFor="sop" className="text-base font-semibold">
            SOP Strength
          </Label>
          <div className="group relative">
            <InfoIcon className="w-4 h-4 text-slate-400 cursor-help" />
            <div className="absolute bottom-full left-0 mb-2 w-48 p-2 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition">
              Statement of Purpose strength rating (0-5)
            </div>
          </div>
        </div>
        <Input
          id="sop"
          type="number"
          min="0"
          max="5"
          step="0.1"
          value={isNaN(formData.sop) ? "" : formData.sop}
          onChange={(e) =>
            setFormData({ ...formData, sop: e.target.value === "" ? Number.NaN : Number.parseFloat(e.target.value) })
          }
          placeholder="Rate 0-5"
          className="glass dark:glass-dark border-white/30 dark:border-slate-700/30"
        />
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <Label htmlFor="lor" className="text-base font-semibold">
            LOR Strength
          </Label>
          <div className="group relative">
            <InfoIcon className="w-4 h-4 text-slate-400 cursor-help" />
            <div className="absolute bottom-full left-0 mb-2 w-48 p-2 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition">
              Letter of Recommendation strength (0-5)
            </div>
          </div>
        </div>
        <Input
          id="lor"
          type="number"
          min="0"
          max="5"
          step="0.1"
          value={isNaN(formData.lor) ? "" : formData.lor}
          onChange={(e) =>
            setFormData({ ...formData, lor: e.target.value === "" ? Number.NaN : Number.parseFloat(e.target.value) })
          }
          placeholder="Rate 0-5"
          className="glass dark:glass-dark border-white/30 dark:border-slate-700/30"
        />
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <Label htmlFor="cgpa" className="text-base font-semibold">
            CGPA
          </Label>
          <div className="group relative">
            <InfoIcon className="w-4 h-4 text-slate-400 cursor-help" />
            <div className="absolute bottom-full left-0 mb-2 w-48 p-2 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition">
              Cumulative GPA (0-10)
            </div>
          </div>
        </div>
        <Input
          id="cgpa"
          type="number"
          min="0"
          max="10"
          step="0.1"
          value={isNaN(formData.cgpa) ? "" : formData.cgpa}
          onChange={(e) =>
            setFormData({ ...formData, cgpa: e.target.value === "" ? Number.NaN : Number.parseFloat(e.target.value) })
          }
          placeholder="Enter your CGPA"
          className="glass dark:glass-dark border-white/30 dark:border-slate-700/30"
        />
      </div>

      <div className="flex items-center gap-4 p-4 bg-slate-100 dark:bg-slate-800/50 rounded-lg">
        <div>
          <div className="flex items-center gap-2">
            <Label className="text-base font-semibold">Research Experience</Label>
            <div className="group relative">
              <InfoIcon className="w-4 h-4 text-slate-400 cursor-help" />
              <div className="absolute bottom-full left-0 mb-2 w-48 p-2 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition">
                Do you have research publications?
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">Do you have research publications?</p>
        </div>
        <Switch
          checked={formData.research}
          onCheckedChange={(checked) => setFormData({ ...formData, research: checked })}
        />
      </div>
    </div>
  )
}
