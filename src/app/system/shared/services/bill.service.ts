import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BillModel} from '../models/bill.model';
import {BaseApi} from '../core/base-api';

@Injectable()
export class BillService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  getBill(): Observable<BillModel> {
    return this.get('bill/');
  }

  updateBill(bill: BillModel): Observable<BillModel> {
    return this.put('bill/', bill);
  }

  getCurrency(): Observable<any> {
    // return this.http.get(`http://data.fixer.io/api/latest?access_key=6ffdc8bdd1f7f5ce9e1a91221f5e6147`)
    // return this.http.get(`https://api.privatbank.ua/p24api/exchange_rates?json&date=05.03.2019`)
    return this.http.get(`https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=4`)
      .pipe((response: any) => response);
  }

  getCurrency2(): Observable<any> {
    return this.http.get(`https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=5`)
      .pipe((response: any) => response);
  }

}
