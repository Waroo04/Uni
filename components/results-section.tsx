"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface University {
  name: string
  tier: "Top" | "Mid" | "Safe"
  flag: string
}

export default function ResultsSection({ result, formData, onReset }: any) {
  const percentage = Math.round(result.prediction_percent * 100)

  // Suggested universities based on prediction
  const universities: University[] = [
    { name: "Purdue University", tier: "Top", flag: "🇺🇸" },
    { name: "UT Austin", tier: "Mid", flag: "🇺🇸" },
    { name: "Georgia Tech", tier: "Safe", flag: "🇺🇸" },
  ]

  const getInsight = () => {
    if (percentage > 80)
      return `Excellent chances! With your CGPA of ${formData.cgpa} and GRE ${formData.gre}, you have a strong profile for top-tier universities in ${formData.country}.`
    if (percentage > 60)
      return `Good chances! Your profile is competitive for ${formData.country}. Focus on strengthening your SOP and LOR for better outcomes.`
    return `Moderate chances for ${formData.country}. Consider improving your test scores and gaining research experience for better results.`
  }

  return (
    <div className="space-y-8 animate-in fade-in">
      {/* Main Result Card */}
      <Card className="glass dark:glass-dark p-12 border-2 border-indigo-200 dark:border-indigo-500/30">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-40 h-40 mb-6">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                className="text-slate-200 dark:text-slate-700"
              />
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                strokeDasharray={`${2 * Math.PI * 90 * (percentage / 100)} ${2 * Math.PI * 90}`}
                className="text-indigo-600 dark:text-indigo-400 transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <p className="text-5xl font-bold text-indigo-600 dark:text-indigo-400">{percentage}%</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Admission Probability</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-4 mb-2">
            {percentage > 80 ? "Excellent Chances!" : percentage > 60 ? "Good Chances" : "Keep Trying"}
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl">{getInsight()}</p>
        </div>
      </Card>

      {/* Comparison Chart */}
      <Card className="glass dark:glass-dark p-6 border-2">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Your Profile vs Average Admits</h3>
        <div className="space-y-4">
          {[
            { label: "GRE Score", your: formData.gre, avg: 315, max: 340 },
            { label: "TOEFL Score", your: formData.toefl, avg: 105, max: 120 },
            { label: "CGPA", your: formData.cgpa, avg: 8.5, max: 10 },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold text-slate-900 dark:text-white">{item.label}</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  Your: {item.your} | Avg: {item.avg}
                </span>
              </div>
              <div className="flex gap-2">
                <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 dark:bg-indigo-400"
                    style={{ width: `${(item.your / item.max) * 100}%` }}
                  />
                </div>
                <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-slate-400 dark:bg-slate-600"
                    style={{ width: `${(item.avg / item.max) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Suggested Universities */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Suggested Universities</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {universities.map((uni) => (
            <Card
              key={uni.name}
              className="glass dark:glass-dark p-6 border-2 hover:border-indigo-400 dark:hover:border-indigo-500 transition cursor-pointer"
            >
              <div className="text-3xl mb-2">{uni.flag}</div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{uni.name}</h4>
              <p
                className={`text-sm font-semibold ${
                  uni.tier === "Top" ? "text-red-500" : uni.tier === "Mid" ? "text-yellow-500" : "text-green-500"
                }`}
              >
                {uni.tier} Tier
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                {uni.tier === "Top"
                  ? "Competitive admission"
                  : uni.tier === "Mid"
                    ? "Moderate admission"
                    : "Good chances"}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button onClick={onReset} variant="outline" className="flex-1 bg-transparent">
          Try Another Profile
        </Button>
        <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700">Download Report</Button>
      </div>
    </div>
  )
}
