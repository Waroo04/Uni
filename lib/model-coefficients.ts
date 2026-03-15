// These coefficients were calculated using linear regression on 400 admission samples
export const modelCoefficients = {
  // Intercept (bias term)
  intercept: -1.2878,

  // Feature weights (in order: GRE, TOEFL, University Rating, SOP, LOR, CGPA, Research)
  gre: 0.00197,
  toefl: 0.00293,
  universityRating: 0.0677,
  sop: 0.0798,
  lor: 0.0651,
  cgpa: 0.1193,
  research: 0.0243,
}

// Normalization parameters for feature scaling
export const normalizationParams = {
  gre: { mean: 316.47, std: 12.84 },
  toefl: { mean: 107.19, std: 6.91 },
  universityRating: { mean: 3.5, std: 1.41 },
  sop: { mean: 3.37, std: 0.99 },
  lor: { mean: 3.49, std: 0.98 },
  cgpa: { mean: 8.57, std: 0.61 },
  research: { mean: 0.56, std: 0.5 },
}
