import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/services/global.service';
import { DetailInterface } from '../detail.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  //Alguna forma de solucionar?? (id?: string | null)
  id?: string | null;
  data?: DetailInterface;

  constructor(private route: ActivatedRoute, private service: ListService, private _location: Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.id = param.get("id");
    })

    //Alguna forma de solucionar?? (+this.id! y (data: DetailInterface | any))
    this.service.getListUrl(+this.id!).subscribe((data: DetailInterface | any) => {
      this.data = data;
    });
  }

  goBack(){
    this._location.back();
  }

}
