export interface InvestmentSummary {

  "name" : string,
  "invested" : number,
  "totalIncome" : number

}

export interface InvestmentsSummaryResponse {
  investmentsSummary : [InvestmentSummary];
}
