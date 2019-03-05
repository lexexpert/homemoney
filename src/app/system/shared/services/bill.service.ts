import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BillModel} from '../models/bill.model';
import {map} from 'rxjs/operators';

@Injectable()
export class BillService {
  constructor(private http: HttpClient) {}

  getBill(): Observable<BillModel> {
    return this.http.get('http://localhost:3000/bill')
      .pipe((response: any) => response);
  }

  getCurrency(base: string = 'USD'): Observable<any> {
    return this.http.get(`http://data.fixer.io/api/latest?access_key=6ffdc8bdd1f7f5ce9e1a91221f5e6147`)
      .pipe((response: any) => response);
  }

}
