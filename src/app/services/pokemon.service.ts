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
}
