import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CategoryModel} from '../../shared/models/category.model';

@Component({
  selector: 'app-history-filter',
  templateUrl: './history-filter.component.html',
  styleUrls: ['./history-filter.component.scss']
})
export class HistoryFilterComponent {

  @Output() onFilterClose = new EventEmitter<any>();
  @Output() onFilerApply = new EventEmitter<any>();

  @Input() categories: CategoryModel[] = [];

  selectedPeriod = 'd';
  selectedTypes = [];
  selectedCategories = [];

  timePeriods = [
    {type: 'd', label: 'День'},
    {type: 'w', label: 'Неделя'},
    {type: 'M', label: 'Месяц'}
  ];

  types = [
    {type: 'income', label: 'Доход'},
    {type: 'outcome', label: 'Расход'}
  ];

  closeFilter() {
    this.selectedTypes = [];
    this.selectedCategories = [];
    this.selectedPeriod = 'd';
    this.onFilterClose.emit();
  }

  handleChangeType({checked, value}) {
    if (checked) {
      this.selectedTypes.indexOf(value) === -1 ? this.selectedTypes.push(value) : null;
    } else {
      this.selectedTypes = this.selectedTypes.filter(i => i !== value);
    }
  }

  handleChangeCategory({checked, value}) {
    if (checked) {
      this.selectedCategories.push(+value);
    } else {
      this.selectedCategories = this.selectedCategories.filter(i => i !== +value);
    }
  }

  applyFilter() {
    this.onFilerApply.emit({
      types: this.selectedTypes,
      categories: this.selectedCategories,
      period: this.selectedPeriod
    });
  }

}
