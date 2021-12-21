import { Component, Input, OnInit } from '@angular/core';
import { ListInterface } from '../../list.model';

@Component({
  selector: 'app-list-child',
  templateUrl: './list-child.component.html',
  styleUrls: ['./list-child.component.scss']
})
export class ListChildComponent implements OnInit {
  @Input() plist?: ListInterface[];
  @Input() filt?:string;
  limit: number = 25;
  @Input() actualp: number = 1;

  constructor() {
  }
  
  ngOnInit(): void {
  }

}
