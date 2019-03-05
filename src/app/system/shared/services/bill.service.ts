import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BillModel} from '../models/bill.model';
import {BaseApi} from '../core/base-api';

@Injectable()
export class BillService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  getBill(): Observable<BillModel> {
    return this.get('bill');
  }

  getCurrency(base: string = 'USD'): Observable<any> {
    return this.http.get(`http://data.fixer.io/api/latest?access_key=6ffdc8bdd1f7f5ce9e1a91221f5e6147`)
      .pipe((response: any) => response);
  }

}
