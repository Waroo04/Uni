"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import StepOne from "./form-steps/step-one"
import StepTwo from "./form-steps/step-two"
import StepThree from "./form-steps/step-three"

interface FormData {
  gre: number
  toefl: number
  university_rating: number
  sop: number
  lor: number
  cgpa: number
  research: boolean
}

export default function FormWizard({
  step,
  setStep,
  formData,
  setFormData,
  onSubmit,
  loading,
}: {
  step: number
  setStep: (step: number) => void
  formData: FormData
  setFormData: (data: FormData) => void
  onSubmit: () => void
  loading: boolean
}) {
  const progress = (step / 3) * 100

  const autoFill = () => {
    setFormData({
      gre: 325,
      toefl: 110,
      university_rating: 4,
      sop: 4,
      lor: 4,
      cgpa: 9.1,
      research: true,
    })
  }

  return (
    <Card className="glass dark:glass-dark p-8 border-2">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Step {step} of 3</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              {step === 1 ? "Academic Profile" : step === 2 ? "Application Quality" : "Review & Predict"}
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={autoFill} className="text-xs bg-transparent">
            Auto-fill Example
          </Button>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Form Steps */}
      <div className="min-h-96">
        {step === 1 && <StepOne formData={formData} setFormData={setFormData} />}
        {step === 2 && <StepTwo formData={formData} setFormData={setFormData} />}
        {step === 3 && <StepThree formData={formData} />}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between gap-4 mt-8">
        <Button variant="outline" onClick={() => setStep(Math.max(1, step - 1))} disabled={step === 1}>
          Back
        </Button>
        {step < 3 ? (
          <Button onClick={() => setStep(Math.min(3, step + 1))} className="bg-indigo-600 hover:bg-indigo-700">
            Next
          </Button>
        ) : (
          <Button onClick={onSubmit} disabled={loading} className="bg-indigo-600 hover:bg-indigo-700">
            {loading ? "Analyzing your profile..." : "Calculate My Admission Chances"}
          </Button>
        )}
      </div>
    </Card>
  )
}
