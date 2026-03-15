import { SCHOLARSHIP_DATA_BY_COUNTRY } from "./model-constants"

export function getScholarshipsByCountry(country: string) {
  return SCHOLARSHIP_DATA_BY_COUNTRY[country as keyof typeof SCHOLARSHIP_DATA_BY_COUNTRY] || null
}

export function getAllCountries() {
  return Object.keys(SCHOLARSHIP_DATA_BY_COUNTRY).sort()
}

export function getCountriesByTier(tier: "SAFETY" | "MATCH" | "REACH") {
  return Object.entries(SCHOLARSHIP_DATA_BY_COUNTRY)
    .filter(([, data]) => data.tier === tier)
    .map(([country]) => country)
    .sort()
}

export function getRankedCountries() {
  return Object.entries(SCHOLARSHIP_DATA_BY_COUNTRY)
    .map(([country, data]) => ({
      country,
      ...data,
    }))
    .sort((a, b) => b.competitiveness - a.competitiveness)
}
