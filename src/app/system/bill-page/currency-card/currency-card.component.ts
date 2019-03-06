import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent {

  @Input() currency: any;
  @Input() currency2: any;

  currencies: string[] = ['USD', 'CAD'];
  currendDate: Date = new Date();

}
