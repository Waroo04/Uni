"use client"

import { useState } from "react"
import { Trash2, ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { usePredictions } from "@/hooks/use-predictions"
import { format } from "date-fns"

export default function SavedProfilesPage() {
  const { predictions, deletePrediction, isLoading } = usePredictions()
  const [expandedId, setExpandedId] = useState<string | null>(null)

  if (isLoading) {
    return (
      <div className="p-8 flex items-center justify-center min-h-screen">
        <div className="text-lg text-muted-foreground">Loading saved profiles...</div>
      </div>
    )
  }

  if (predictions.length === 0) {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-foreground">Saved Profiles</h1>
          <p className="text-muted-foreground">Your previous predictions will appear here</p>
        </div>

        <Card className="glass">
          <CardContent className="pt-12 pb-12">
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-4">No saved predictions yet</p>
              <p className="text-sm text-muted-foreground">
                Complete a prediction on the Home page to save your profile for future reference
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-foreground">Saved Profiles</h1>
        <p className="text-muted-foreground">{predictions.length} prediction(s) saved</p>
      </div>

      <div className="space-y-4">
        {predictions
          .sort((a, b) => b.timestamp - a.timestamp)
          .map((prediction) => (
            <Card key={prediction.id} className="glass overflow-hidden">
              <button
                onClick={() => setExpandedId(expandedId === prediction.id ? null : prediction.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition"
              >
                <div className="flex items-center gap-6 flex-1 text-left">
                  <div>
                    <div className="font-semibold text-lg">
                      {prediction.country} • {prediction.chance}% Chance
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{format(prediction.timestamp, "PPp")}</div>
                  </div>

                  {/* Quick stats */}
                  <div className="hidden sm:flex gap-6 ml-auto text-sm">
                    <div>
                      <div className="text-muted-foreground">GRE</div>
                      <div className="font-semibold">{prediction.gre}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">TOEFL</div>
                      <div className="font-semibold">{prediction.toefl}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">CGPA</div>
                      <div className="font-semibold">{prediction.cgpa.toFixed(2)}</div>
                    </div>
                  </div>
                </div>

                <div className="ml-4">
                  {expandedId === prediction.id ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              {/* Expanded Details */}
              {expandedId === prediction.id && (
                <CardContent className="border-t pt-6 pb-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">GRE Score</p>
                      <p className="text-lg font-semibold">{prediction.gre}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">TOEFL Score</p>
                      <p className="text-lg font-semibold">{prediction.toefl}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">CGPA</p>
                      <p className="text-lg font-semibold">{prediction.cgpa.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">University Rating</p>
                      <p className="text-lg font-semibold">{prediction.universityRating}/5</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">SOP Strength</p>
                      <p className="text-lg font-semibold">{prediction.sop}/5</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LOR Quality</p>
                      <p className="text-lg font-semibold">{prediction.lor}/5</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Research Experience</p>
                      <p className="text-lg font-semibold">{prediction.research}/5</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Target Country</p>
                      <p className="text-lg font-semibold">{prediction.country}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Admission Chance</p>
                      <p className="text-lg font-semibold text-primary">{prediction.chance}%</p>
                    </div>
                  </div>

                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => deletePrediction(prediction.id)}
                    className="gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete Profile
                  </Button>
                </CardContent>
              )}
            </Card>
          ))}
      </div>
    </div>
  )
}
