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
  subscription: Subscription;

  constructor(
    private billService: BillService
  ) { }

  ngOnInit() {
    this.subscription = combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency()
    ).subscribe((data: [BillModel, any]) => {
      console.log(data);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
