import { Component, OnInit } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { CompleteListResponse, ListInterface } from '../list.model';
import { ListService } from '../../services/global.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  completeListData?: CompleteListResponse;
  plist: ListInterface[] = [];
  obs: Observable<ListInterface>[] = [];
  //Limit number item display
  filt: string = "";
  //Pages Loaded
  page:number;
  //UserPages Loaded
  actualp: number;
  countMaxPkmn: number;
  limit: number = 25;

  constructor(private lservice: ListService) { 
    this.page = 1;
    this.actualp = 1;
    this.countMaxPkmn = 0;
  }

  ngOnInit(): void {
    this.lservice.getUrls().subscribe((data: CompleteListResponse) => {
      this.completeListData = data;
      this.countMaxPkmn = data.count;
      for(let i of data.results){
        this.obs.push(this.lservice.getElement(i.url));
      }

      forkJoin(this.obs).subscribe((data: ListInterface[]) => {
        this.plist = data;
      });
    })     
  }

  goPrevious(): void {
    this.actualp--;
  }

  goNext(): void {
    if(this.page == this.actualp){
      this.page++;
      this.actualp++;
      if(this.completeListData){
        this.lservice.getNextUrls(this.completeListData.next).subscribe((data: CompleteListResponse) => {
          this.completeListData = data;
          for(let i of data.results){
            this.obs.push(this.lservice.getElement(i.url));
          }
          forkJoin(this.obs).subscribe((data: ListInterface[]) => {
            this.plist = data;
          });
        })
      }
    }
    else{
      this.actualp++;
    }
  }

}