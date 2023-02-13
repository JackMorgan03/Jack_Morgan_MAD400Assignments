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


  getContentItem(id: number): Observable<IContent>{
    let myPokemon: IContent = {
      id: -1,
      name: "",
      author: "",
      type: ""
    };
    POKEMON.find(pokemon =>{
      if(pokemon.id = id){
        myPokemon = pokemon;
        return pokemon
        }else{
        return null;
      }
    })
    return of(myPokemon);
  }

  createItem(pokemon: IContent): Observable<IContent[]>{
    POKEMON.push(pokemon);
    return of(POKEMON);
  }

  updateItem(pokemon: IContent): Observable<IContent[]>{
    let indexOfPokemonToUpdate = POKEMON.findIndex(poke => {
      return poke.id = pokemon.id;
    })  
    POKEMON[indexOfPokemonToUpdate] = pokemon;
    return of(POKEMON);
  }

  deleteItem(id:number): Observable<IContent>{
    let deletePokemon: IContent = {
      id: -1,
      name: "",
      author: "",
      type: ""
    };
    for(let i = 0; i < POKEMON.length; i++){
      if(POKEMON[i].id == id){
        deletePokemon == POKEMON[i]
        delete POKEMON[i];
      }
    }
    return of(deletePokemon)
  }
}
