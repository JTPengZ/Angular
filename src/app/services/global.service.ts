import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyListPokemonInterface } from '../my-list/my-list.model';
import { map, Observable } from 'rxjs';
import { ListInterface, CompleteListResponse } from '../list/list.model';
import { DetailInterface } from '../detail/detail.model';

const baseUrl = 'https://pokeapi.co/api/v2/';

const pkmnUrl = baseUrl + 'pokemon/';

const limitpkmnUrl = pkmnUrl + '?limit=25'

const baseLocalUrl = 'http://localhost:3000/';

const pkmnLocalUrl = baseLocalUrl + 'pokemons/';


@Injectable({
  providedIn: 'root'
})

export class ListService {

  constructor(private http:HttpClient) { }
  getUrls():Observable<CompleteListResponse> {
    return this.http.get<CompleteListResponse>(limitpkmnUrl).pipe(map(
        (result: CompleteListResponse) => ({
            count: result.count,
            prev: result.prev, 
            next:result.next, 
            results:result.results 
          }))) as Observable<CompleteListResponse>;
  }

  getNextUrls(url: string):Observable<CompleteListResponse> {
    return this.http.get<CompleteListResponse>(url).pipe(map(
        (result: CompleteListResponse) => ({
            count: result.count,
            prev: result.prev, 
            next:result.next, 
            results:result.results 
          }))) as Observable<CompleteListResponse>;
  }

  getElement(link:string): Observable<ListInterface> {
    return this.http.get<ListInterface>(link).pipe(map((result: ListInterface) => ({
      id: result.id,
      name: result.name,
      sprites: result.sprites
    }))) as Observable<ListInterface>;
  }

  getElementi(n:number): Observable<DetailInterface> {
    return this.http.get<DetailInterface>(pkmnUrl + n).pipe(map((result: DetailInterface) => ({
      name: result.name,
      sprites: result.sprites,
      abilities: result.abilities,
      moves: result.moves,
      stats: result.stats,
      types: result.types
    }))) as Observable<DetailInterface>;
  }

  submitPokemon(pokemon:MyListPokemonInterface): Observable<MyListPokemonInterface>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(pokemon);
    return this.http.post<MyListPokemonInterface>(pkmnLocalUrl, body, {'headers':headers});
  }

  getMyList(): Observable<MyListPokemonInterface[]>{
    return this.http.get<MyListPokemonInterface[]>(pkmnLocalUrl);
  }

  updatePokemon(pokemon: MyListPokemonInterface, id: number) {
    const headers = { 'content-type': 'application/json' }  
    const body= JSON.stringify(pokemon);
    return this.http.put<MyListPokemonInterface>(pkmnLocalUrl + id, body, {'headers':headers});
  }

  deletePokemon(id:number) {
    return this.http.delete(pkmnLocalUrl + id);
  }
}
