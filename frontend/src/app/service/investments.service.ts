import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InvestmentsSummaryResponse} from "./investments.interface";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class InvestmentsService {

  constructor(private httpClient : HttpClient) {
  }

  private doGetInvestments() : Observable<any> {
    return this.httpClient.get('http://localhost:1080/api/users/1/investments/summary');
  }

  public getInvestments() : Observable<InvestmentsSummaryResponse> {
    return this.doGetInvestments();
  }
}
