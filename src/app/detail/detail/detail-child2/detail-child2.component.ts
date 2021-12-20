import { Component, Input, OnInit } from '@angular/core';
import { DetailAbilityInterface, DetailStatsInterface, DetailTypesInterface } from '../../detail.model';

@Component({
  selector: 'app-detail-child2',
  templateUrl: './detail-child2.component.html',
  styleUrls: ['./detail-child2.component.scss']
})
export class DetailChild2Component implements OnInit {
  @Input() abilities:DetailAbilityInterface[] = [];
  @Input() types:DetailTypesInterface[] = [];
  @Input() stats:DetailStatsInterface[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
