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

  dollar: number;
  gryvna: number;

  constructor() { }

  ngOnInit() {
  }

}
