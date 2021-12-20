import { Pipe, PipeTransform } from '@angular/core';
import { ListInterface } from '../list.model';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {

  transform(value: ListInterface[], actualp:number, limit:number) {
    return value.slice((actualp-1) * limit, actualp * limit);
  }

}
