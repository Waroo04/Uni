// These coefficients are used to calculate admission probability
export const MODEL_COEFFICIENTS = {
  intercept: -3.05,
  gre_coefficient: 0.00203,
  toefl_coefficient: 0.00206,
  university_rating_coefficient: 0.206,
  sop_coefficient: 0.166,
  lor_coefficient: 0.143,
  cgpa_coefficient: 0.251,
  research_coefficient: 0.123,
}

// Normalization parameters (mean and std from training data)
export const NORMALIZATION_PARAMS = {
  gre_mean: 316.5,
  gre_std: 13.2,
  toefl_mean: 107.2,
  toefl_std: 6.4,
  university_rating_mean: 3.1,
  university_rating_std: 1.1,
  sop_mean: 3.4,
  sop_std: 0.98,
  lor_mean: 3.2,
  lor_std: 0.92,
  cgpa_mean: 8.44,
  cgpa_std: 0.47,
}

// Scholarship data by country
export const SCHOLARSHIP_DATA_BY_COUNTRY = {
  USA: {
    scholarships: 4250,
    average_award: 28500,
    competitiveness: 8.2,
    tier: "REACH",
  },
  UK: {
    scholarships: 1890,
    average_award: 22000,
    competitiveness: 7.8,
    tier: "REACH",
  },
  Canada: {
    scholarships: 2340,
    average_award: 18000,
    competitiveness: 6.5,
    tier: "MATCH",
  },
  Australia: {
    scholarships: 2100,
    average_award: 19500,
    competitiveness: 6.8,
    tier: "MATCH",
  },
  Germany: {
    scholarships: 3200,
    average_award: 8500,
    competitiveness: 5.2,
    tier: "SAFETY",
  },
  Netherlands: {
    scholarships: 1450,
    average_award: 12000,
    competitiveness: 6.1,
    tier: "MATCH",
  },
  Singapore: {
    scholarships: 890,
    average_award: 32000,
    competitiveness: 8.9,
    tier: "REACH",
  },
  Japan: {
    scholarships: 1560,
    average_award: 9000,
    competitiveness: 5.5,
    tier: "SAFETY",
  },
  "New Zealand": {
    scholarships: 650,
    average_award: 15000,
    competitiveness: 6.2,
    tier: "MATCH",
  },
  Sweden: {
    scholarships: 980,
    average_award: 11000,
    competitiveness: 5.8,
    tier: "SAFETY",
  },
}
