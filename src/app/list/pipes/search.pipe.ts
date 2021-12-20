import { Pipe, PipeTransform } from '@angular/core';
import { ListInterface } from '../list.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: ListInterface[], filter:string = "") {
    const lowerCase:string = filter.toLowerCase().trim();
    const f:ListInterface[] = value.filter((s:ListInterface) => {
      return s.name.toLowerCase().includes(lowerCase);
    })
    return f;
  }

}
