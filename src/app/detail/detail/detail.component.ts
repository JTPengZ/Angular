import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, map, Observable } from 'rxjs';
import { ListService } from 'src/app/services/global.service';
import { DetailInterface, AbilitiesListResponse } from '../detail.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  //Alguna forma de solucionar?? (id?: string | null)
  id?: string | null;
  data?: DetailInterface;
  abilitiesData: AbilitiesListResponse[] = [];
  obs: Observable<AbilitiesListResponse>[] = [];

  constructor(private route: ActivatedRoute, private service: ListService, private _location: Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.id = param.get("id");
    })

    //Alguna forma de solucionar?? +this.id!
    this.service.getElementi(+this.id!).subscribe((data: DetailInterface) => {
      this.data = data;
      for(let ability of data.abilities)
        this.obs.push(this.service.getElementAbilities(ability.ability.url));
      
      forkJoin(this.obs).pipe(

      )
      .subscribe((data: AbilitiesListResponse[]) => {
        //No es la manera optima. Un map en el pipe, ¿pero como?
        if(this.data?.abilities)
          for(let i = 0; i < this.data.abilities.length; i++){
            for(let j = 0; j < data[i].names.length; j++){
              if(this.data.abilities[i].ability.name.toLowerCase() === data[i].names[j].name.toLowerCase())
                this.data.abilities[i].detail = data[i];
            }
          }
      });
    });
  }

  goBack(){
    this._location.back();
  }

}
