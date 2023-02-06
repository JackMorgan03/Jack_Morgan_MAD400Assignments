import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { POKEMON } from '../data/mock-content';
import { IContent } from '../models/icontent';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getContent(): Observable<IContent[]>{
    return of(POKEMON)
  }


  // getContentItem(index: number): Observable<IContent>{
  //   POKEMON.forEach(pokemon => {
  //     if(pokemon.id == index){
  //       return of(pokemon)
  //     }
  //   });
  // }

  createItem(pokemon: IContent): Observable<IContent[]>{
    POKEMON.push(pokemon);
    return of(POKEMON);
  }

  updateItem(pokemon: IContent): Observable<IContent[]>{
      POKEMON.forEach(poke=>{
        if (pokemon.id = poke.id){
          pokemon = poke
        }
      })
      return of(POKEMON);
  }

  deleteItem(id:number){
    POKEMON.forEach(removePokemon => {
      if(removePokemon.id = id){
        POKEMON.splice(removePokemon.id, 1)
        return removePokemon;
      }
      return console.log("Not this one");
    });
  }
}
