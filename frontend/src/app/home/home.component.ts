import { Component, OnInit } from '@angular/core';
import {InvestmentsService} from "../service/investments.service";
import {InvestmentSummary} from "../service/investments.interface";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private investmentsService: InvestmentsService) { }

  displayedColumns: string[] = ['name', 'invested', 'income'];


  investmentsSummary:any =  {} as InvestmentSummary[];

  ngOnInit(): void {
    this.investmentsService.getInvestments().subscribe(resp => {
      this.investmentsSummary = resp.investmentsSummary;
    });
  }

}


