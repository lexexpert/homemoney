import {Component, Input, OnInit} from '@angular/core';
import {CategoryModel} from '../../shared/models/category.model';
import {EventModel} from '../../shared/models/event.model';

@Component({
  selector: 'app-history-events',
  templateUrl: './history-events.component.html',
  styleUrls: ['./history-events.component.scss']
})
export class HistoryEventsComponent implements OnInit {

  @Input() categories: CategoryModel[] = [];
  @Input() events: EventModel[] = [];

  searchValue = '';
  searchPlaceholder = 'Сумма';
  searchParameter = 'amount';

  constructor() { }

  ngOnInit() {
    this.events.forEach((e) => {
      e.catName = this.categories.find(c => c.id === e.category).name;
    });
  }

  changeParameter(parameter: string) {
    const namesMap = {
      amount: 'Сумма',
      date: 'Дата',
      category: 'Категория',
      type: 'Тип'
    };
    this.searchPlaceholder = namesMap[parameter];
    this.searchParameter = parameter;
  }

}
