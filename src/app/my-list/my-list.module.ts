import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyListRoutingModule } from './my-list-routing.module';
import { MyListComponent } from './my-list/my-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyListComponent
  ],
  imports: [
    CommonModule,
    MyListRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MyListModule { }
