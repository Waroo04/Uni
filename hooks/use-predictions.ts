"use client"

import { useState, useEffect, useCallback } from "react"

export interface SavedPrediction {
  id: string
  timestamp: number
  gre: number
  toefl: number
  universityRating: number
  sop: number
  lor: number
  cgpa: number
  research: number
  country: string
  chance: number
}

export function usePredictions() {
  const [predictions, setPredictions] = useState<SavedPrediction[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Load from localStorage on mount
  useEffect(() => {
    setIsLoading(true)
    try {
      const saved = localStorage.getItem("saved_predictions")
      if (saved) {
        setPredictions(JSON.parse(saved))
      }
    } catch (error) {
      console.error("Error loading predictions:", error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Save prediction
  const savePrediction = useCallback(
    (prediction: Omit<SavedPrediction, "id" | "timestamp">) => {
      const newPrediction: SavedPrediction = {
        ...prediction,
        id: Date.now().toString(),
        timestamp: Date.now(),
      }
      const updated = [...predictions, newPrediction]
      setPredictions(updated)
      localStorage.setItem("saved_predictions", JSON.stringify(updated))
      return newPrediction
    },
    [predictions],
  )

  // Delete prediction
  const deletePrediction = useCallback(
    (id: string) => {
      const updated = predictions.filter((p) => p.id !== id)
      setPredictions(updated)
      localStorage.setItem("saved_predictions", JSON.stringify(updated))
    },
    [predictions],
  )

  return { predictions, savePrediction, deletePrediction, isLoading }
}
