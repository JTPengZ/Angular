import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list/list.component';
import { ListService } from '../services/global.service';
import { HttpClientModule } from '@angular/common/http';
import { ListChildComponent } from './list/list-child/list-child.component';
import { ListPipesModule } from './list-pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    ListChildComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    HttpClientModule,
    ListPipesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ListComponent
  ],
  providers: [
    ListService
  ]
})
export class ListModule { }
