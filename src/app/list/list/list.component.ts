import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { ListInterface, ListResponseInterface } from '../list.model';
import { ListService } from '../../services/global.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  dataResponse?: ListResponseInterface;
  plist: ListInterface[] = [];
  obs: Observable<object>[] = [];
  limit: number;
  filt: string = "";
  page:number;
  actualp: number;
  countMaxPkmn: number;

  constructor(private lservice: ListService) { 
    this.limit = 25;
    this.page = 1;
    this.actualp = 1;
    this.countMaxPkmn = 0;
  }

  ngOnInit(): void {
    this.lservice.getUrl().subscribe((data: ListResponseInterface | any) => {
      this.countMaxPkmn = data.count;
    })

    for(let i = 0; i < this.page * this.limit; i++){
      this.obs.push(this.lservice.getListUrl(i + 1));
    }

    forkJoin(this.obs).subscribe((data: ListInterface[] | any) => {
      //esta bien?? ((element: { id: any; name : any; sprites:any; }))
      this.plist = data.map((element: { id: any; name : any; sprites:any; }) => ({id: element.id, name: element.name, sprites: element.sprites}));
    });
    
  }

  goPrevious(): void {
    this.actualp--;
  }

  goNext(): void {
    if(this.page == this.actualp){
      this.page++;
      this.actualp++;
      if(this.page > (this.countMaxPkmn / this.limit)){
        for(let i = (this.page - 1) * this.limit; i < this.countMaxPkmn; i++){
          this.obs.push(this.lservice.getListUrl(i + 1));
        }
      }else{
        for(let i = (this.page - 1) * this.limit; i < this.page * this.limit; i++){
          this.obs.push(this.lservice.getListUrl(i + 1));
        }
      }

      forkJoin(this.obs).subscribe((data: ListInterface[] | any) => {
        this.plist = data;
      });
    }
    else{
      this.actualp++;
    }
  }

}