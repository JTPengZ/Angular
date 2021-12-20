import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail/detail.component';
import { DetailChild1Component } from './detail/detail-child1/detail-child1.component';
import { DetailChild2Component } from './detail/detail-child2/detail-child2.component';
import { DetailChild3Component } from './detail/detail-child3/detail-child3.component';


@NgModule({
  declarations: [
    DetailComponent,
    DetailChild1Component,
    DetailChild2Component,
    DetailChild3Component
  ],
  imports: [
    CommonModule,
    DetailRoutingModule
  ]
})
export class DetailModule { }
