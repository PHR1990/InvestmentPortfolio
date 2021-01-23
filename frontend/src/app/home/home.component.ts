import {Component, OnInit} from '@angular/core';
import {InvestmentsService} from "../service/investments.service";
import {InvestmentSummary, RiskType, Type} from "../service/investments.interface";
import {ThemePalette} from "@angular/material/core";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private investmentsService: InvestmentsService) { }

  displayedColumns: string[] = ['name', 'invested', 'income', 'type', 'liquidity', 'risk', 'averageInterestRate'];
  grandTotal: number = 0;
  investedTotalAmount: number =0;

  investmentsSummary: InvestmentSummary[] = [];

  ngOnInit(): void {
    this.investmentsService.getInvestments().subscribe(resp => {
      this.investmentsSummary = resp.investmentsSummary;

      this.investmentsSummary.forEach(investmentSummary => {
        if (investmentSummary.type !== Type.SavingsAccount) {
          this.investedTotalAmount+=investmentSummary.invested + investmentSummary.totalIncome;
        }
        this.grandTotal+=investmentSummary.invested + investmentSummary.totalIncome;

      })
    });
  }

  getChipColor(risk: RiskType) : ThemePalette {

    if (risk === RiskType.High) {
      console.log(risk);
      return 'warn'
    } else if (risk === RiskType.Medium) {
      console.log(risk);
      return 'accent'
    } else if (risk === RiskType.Low) {
      console.log(risk);
      return 'primary'
    }
    return 'primary';

  }

}


