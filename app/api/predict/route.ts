import { NextRequest, NextResponse } from "next/server"
import { modelCoefficients, normalizationParams } from "@/lib/model-coefficients"

// <CHANGE> Using trained Ridge Regression model instead of simple calculation
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { gre, toefl, university_rating, sop, lor, cgpa, research } = body

    // Normalize features using training data statistics
    const normalizedGre = (gre - normalizationParams.gre.mean) / normalizationParams.gre.std
    const normalizedToefl = (toefl - normalizationParams.toefl.mean) / normalizationParams.toefl.std
    const normalizedUniversityRating =
      (university_rating - normalizationParams.universityRating.mean) / normalizationParams.universityRating.std
    const normalizedSop = (sop - normalizationParams.sop.mean) / normalizationParams.sop.std
    const normalizedLor = (lor - normalizationParams.lor.mean) / normalizationParams.lor.std
    const normalizedCgpa = (cgpa - normalizationParams.cgpa.mean) / normalizationParams.cgpa.std
    const normalizedResearch = (research - normalizationParams.research.mean) / normalizationParams.research.std

    // Apply Ridge Regression model: y = intercept + (coeff * feature) for each feature
    let prediction =
      modelCoefficients.intercept +
      modelCoefficients.gre * normalizedGre +
      modelCoefficients.toefl * normalizedToefl +
      modelCoefficients.universityRating * normalizedUniversityRating +
      modelCoefficients.sop * normalizedSop +
      modelCoefficients.lor * normalizedLor +
      modelCoefficients.cgpa * normalizedCgpa +
      modelCoefficients.research * normalizedResearch

    // Clamp prediction to valid probability range (0.01 to 0.99)
    prediction = Math.max(0.01, Math.min(0.99, prediction))

    return NextResponse.json({ prediction_percent: prediction })
  } catch (error) {
    console.error("Prediction error:", error)
    return NextResponse.json({ error: "Prediction failed" }, { status: 500 })
  }
}
