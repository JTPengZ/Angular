import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyListPokemonInterface } from '../my-list/my-list.model';

const baseUrl = 'https://pokeapi.co/api/v2/';

//La petición character
const pkmnUrl = baseUrl + 'pokemon/';

const baseUrlFake = 'http://localhost:3000/';


@Injectable({
  providedIn: 'root'
})

export class ListService {

  constructor(private http:HttpClient) { }
  getUrl() {
    return this.http.get(pkmnUrl);
  }

  getListUrl(n:number) {
    return this.http.get(pkmnUrl + n);
  }

  submitPokemon(pokemon:MyListPokemonInterface){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(pokemon);
    return this.http.post(baseUrlFake + 'pokemons', body, {'headers':headers});
  }
}
