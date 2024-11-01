import { MasionType } from "../../resourceTypes";

export interface MasonBase {
  type: MasionType;
}

export interface MasonDaily extends MasonBase {
  type: "Daily";
  ratePerDay: number;
}

export interface MasonWeekly extends MasonBase {
  type: "Weekly";
  ratePerWeek: number;
}

export interface MasonMonthly extends MasonBase {
  type: "Monthly";
  ratePerMonth: number;
}

export interface MasonContract extends MasonBase {
  type: "Contract";
  contractRate: number;
}

export interface MasonPerSqft extends MasonBase {
  type: "Per Sqft";
  ratePerSqft: number;
}

export interface MasonPerCum extends MasonBase {
  type: "Per Cum";
  ratePerCum: number;
}

export type Mason = MasonDaily | MasonWeekly | MasonMonthly | MasonContract | MasonPerSqft | MasonPerCum;
export default Mason