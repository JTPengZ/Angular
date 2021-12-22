import { Component, Input, OnInit } from '@angular/core';
import { DetailAbilityInterface, DetailStatsInterface, DetailTypesInterface } from '../../detail.model';

@Component({
  selector: 'app-detail-child2',
  templateUrl: './detail-child2.component.html',
  styleUrls: ['./detail-child2.component.scss']
})
export class DetailChild2Component implements OnInit {
  @Input() abilities:DetailAbilityInterface[] = [];
  abilityDesc?:string;
  @Input() types:DetailTypesInterface[] = [];
  @Input() stats:DetailStatsInterface[] = [];
  
  constructor() { }

  ngOnInit(): void {
    //Funcion que no es la más óptima y no funcional
    /*this.abilities.forEach(
      ab => {
        //Llega undefined (ab.detail)
        ab.detail.effect_entries.forEach(
          a => {
            if(a.language.name.toLowerCase() === "en")
              this.abilityDesc = a.short_effect;
          }
        )});*/
  }

}
