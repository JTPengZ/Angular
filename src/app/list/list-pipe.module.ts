import { NgModule } from '@angular/core';
import { LimitPipe } from './pipes/limit.pipe';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  imports: [],
  declarations: [
    LimitPipe,
    SearchPipe
  ],
  exports: [
    LimitPipe,
    SearchPipe
  ]
})
export class ListPipesModule { }