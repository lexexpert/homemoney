import { Component, OnInit } from '@angular/core';

import {CategoryModel} from '../shared/models/category.model';
import {CategoriesService} from '../shared/services/categories.service';

@Component({
  selector: 'app-records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.scss']
})
export class RecordsPageComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
  }

  newCategoryAdded(category: CategoryModel) {

  }

}
