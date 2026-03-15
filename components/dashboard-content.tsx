"use client"

import { useState } from "react"
import FormWizard from "./form-wizard"
import ResultsSection from "./results-section"
import { usePredictions } from "@/hooks/use-predictions"

interface FormData {
  gre: number
  toefl: number
  university_rating: number
  sop: number
  lor: number
  cgpa: number
  research: boolean
  country: string
}

export default function DashboardContent() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    gre: Number.NaN,
    toefl: Number.NaN,
    university_rating: Number.NaN,
    sop: Number.NaN,
    lor: Number.NaN,
    cgpa: Number.NaN,
    research: false,
    country: "USA",
  })
  const [result, setResult] = useState<{ prediction_percent: number } | null>(null)
  const [loading, setLoading] = useState(false)
  const { savePrediction } = usePredictions()

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          gre: formData.gre,
          toefl: formData.toefl,
          university_rating: formData.university_rating,
          sop: formData.sop,
          lor: formData.lor,
          cgpa: formData.cgpa,
          research: formData.research ? 1 : 0,
        }),
      })
      const data = await response.json()
      setResult(data)

      const chance = Math.round(data.prediction_percent * 100)
      savePrediction({
        gre: isNaN(formData.gre) ? 0 : formData.gre,
        toefl: isNaN(formData.toefl) ? 0 : formData.toefl,
        universityRating: isNaN(formData.university_rating) ? 0 : formData.university_rating,
        sop: isNaN(formData.sop) ? 0 : formData.sop,
        lor: isNaN(formData.lor) ? 0 : formData.lor,
        cgpa: isNaN(formData.cgpa) ? 0 : formData.cgpa,
        research: formData.research ? 1 : 0,
        country: formData.country,
        chance: chance,
      })
    } catch (error) {
      console.error("Prediction error:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setResult(null)
    setStep(1)
    setFormData({
      gre: Number.NaN,
      toefl: Number.NaN,
      university_rating: Number.NaN,
      sop: Number.NaN,
      lor: Number.NaN,
      cgpa: Number.NaN,
      research: false,
      country: "USA",
    })
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Check Your Admission Chances</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          Enter your academic profile and get your predicted admission probability.
        </p>
      </div>

      {!result ? (
        <FormWizard
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          loading={loading}
        />
      ) : (
        <ResultsSection result={result} formData={formData} onReset={handleReset} />
      )}
    </div>
  )
}
