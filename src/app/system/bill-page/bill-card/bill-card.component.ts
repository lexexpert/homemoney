import {Component, Input, OnInit} from '@angular/core';
import {BillModel} from '../../shared/models/bill.model';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  @Input() bill: BillModel;
  @Input() currency: any;
  @Input() currency2: any;

  dollar: number;
  gryvna: number;

  constructor() { }

  ngOnInit() {
    // const { rates } = this.currency;
    const cad: number = this.currency[0]['sale'];
    const usd: number = this.currency2[0]['sale'];
    this.dollar = (cad * this.bill.value) / usd;
    this.gryvna = cad * this.bill.value;
    // this.dollar = rates['USD'] * this.bill.value;
    // this.gryvna = rates['UAH'] * this.bill.value;

  }

}
