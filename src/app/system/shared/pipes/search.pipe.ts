import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'AppSearch'
})
export class SearchPipe implements PipeTransform {
  transform(items: any, value: string, parameter: string): any {
    if (items.length === 0 || !value) {
      return items;
    }
    return items.filter((i) => {
      const t = Object.assign({}, i);
      if (!isNaN(t[parameter])) {
        t[parameter] += '';
      }
      if (parameter === 'type') {
        t[parameter] = t[parameter] === 'income' ? 'доход' : 'расход';
      }
      if (parameter === 'category') {
        t[parameter] = t['catName'];
      }
      return t[parameter].toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
  }
}
