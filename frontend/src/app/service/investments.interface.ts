export interface InvestmentSummary {

  "name" : string,
  "invested" : number,
  "totalIncome" : number,
  "type" : Type,
  "liquidity" : LiquidityType,
  "risk" : RiskType,
  "averagePercentage" : number | string

}

export enum RiskType {
  Minimum = "Minimum",
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

export enum LiquidityType {
  Instant = "Instant",
  Fast = "Fast",
  Variable = "Variable",
}

export enum Type {
  SavingsAccount = "Savings Account",
  Stocks = "Stocks",
  Loans = "Loans"
}

export interface InvestmentsSummaryResponse {
  investmentsSummary : [InvestmentSummary];
}
