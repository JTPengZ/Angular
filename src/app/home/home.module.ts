import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeChild1Component } from './home/home-child1/home-child1.component';
import { HomeChild2Component } from './home/home-child2/home-child2.component';
import { HomeChild3Component } from './home/home-child3/home-child3.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeChild1Component,
    HomeChild2Component,
    HomeChild3Component
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ], 
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
