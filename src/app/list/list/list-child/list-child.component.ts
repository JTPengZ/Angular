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
  //alguna forma de solucionar?? (@Input() limit!: number y @Input() actualp!: number)
  @Input() limit!: number;
  @Input() actualp!: number;

  constructor() {
  }
  
  ngOnInit(): void {
  }

}
