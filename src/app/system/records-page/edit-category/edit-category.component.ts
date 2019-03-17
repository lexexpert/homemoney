import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CategoryModel} from '../../shared/models/category.model';
import {CategoriesService} from '../../shared/services/categories.service';
import {Message} from '../../../shared/models/message.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit, OnDestroy {

  sub1: Subscription;
  @Input() categories: CategoryModel[] = [];
  @Output() categoryEdit = new EventEmitter<CategoryModel>();

  currentCategoryId = 1;
  currentCategory: CategoryModel;
  message: Message;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.message = new Message('success', '');
    this.onCategoryChange();
  }

  onCategoryChange() {
    this.currentCategory = this.categories.find(c => +c.id === +this.currentCategoryId);
  }

  onSubmit(form: NgForm) {
    let {name, capacity} = form.value;
    if (capacity < 0) { capacity *= -1; }
    const category = new CategoryModel(name, capacity, +this.currentCategoryId);

    this.categoriesService.updateCategory(category)
      .subscribe((cat: CategoryModel) => {
        this.categoryEdit.emit(cat);
        this.message.text = 'Категория отредактирована';
        window.setTimeout(() => this.message.text = '', 5000);
      });
  }

  ngOnDestroy(): void {
    if (this.sub1) { this.sub1.unsubscribe(); }
  }

}
