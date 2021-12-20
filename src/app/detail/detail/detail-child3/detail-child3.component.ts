import { Component, Input, OnInit } from '@angular/core';
import { DetailMovesInterface } from '../../detail.model';

@Component({
  selector: 'app-detail-child3',
  templateUrl: './detail-child3.component.html',
  styleUrls: ['./detail-child3.component.scss']
})
export class DetailChild3Component implements OnInit {
  @Input() moves:DetailMovesInterface[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
