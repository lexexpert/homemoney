import {Component, OnDestroy, OnInit} from '@angular/core';
import {BillService} from '../shared/services/bill.service';
import {combineLatest, Subscription} from 'rxjs';
import {BillModel} from '../shared/models/bill.model';

@Component({
  selector: 'app-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit, OnDestroy {
  sub1: Subscription;
  sub2: Subscription;
  sub3: Subscription;

  currency: any;
  currency2: any;
  bill: BillModel;

  isLoaded = false;

  constructor(
    private billService: BillService
  ) { }

  ngOnInit() {
    this.sub1 = combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency(),
      this.billService.getCurrency2()
    ).subscribe((data: [BillModel, any, any]) => {
      this.bill = data[0];
      this.currency = data[1];
      this.currency2 = data[2];
      this.isLoaded = true;
    });
  }

  onRefresh() {
    this.isLoaded = false;
    this.sub2 = this.billService.getCurrency()
      .subscribe((currency: any) => {
        this.currency = currency;
        this.isLoaded = true;
      });
    this.sub3 = this.billService.getCurrency2()
      .subscribe((currency2: any) => {
        this.currency2 = currency2;
        this.isLoaded = true;
      });
  }

  ngOnDestroy() {
    // this.sub1.unsubscribe();
    // this.sub2.unsubscribe();
  }

}
