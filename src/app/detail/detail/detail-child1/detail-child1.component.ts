import { Component, Input, OnInit } from '@angular/core';
import { DetailSpriteInterface } from '../../detail.model';

@Component({
  selector: 'app-detail-child1',
  templateUrl: './detail-child1.component.html',
  styleUrls: ['./detail-child1.component.scss']
})
export class DetailChild1Component implements OnInit {
  @Input() name?:string;
  @Input() sprites?: DetailSpriteInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
