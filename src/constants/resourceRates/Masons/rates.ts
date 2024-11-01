import { MasonContract, MasonDaily, MasonMonthly, MasonPerCum, MasonPerSqft, MasonWeekly } from "./types";

export const dailyMasonRates: MasonDaily = {
  type: "Daily",
  ratePerDay: 100
}

export const weeklyMasonRates: MasonWeekly = {
  type: "Weekly",
  ratePerWeek: 100
}

export const monthlyMasonRates: MasonMonthly = {
  type: "Monthly",
  ratePerMonth: 100
}

export const contractMasonRates: MasonContract = {
  type: "Contract",
  contractRate: 100
}

export const perSqftMasonRates: MasonPerSqft = {
  type: "Per Sqft",
  ratePerSqft: 100
}

export const perCumMasonRates: MasonPerCum = {
  type: "Per Cum",
  ratePerCum: 100
}