import { Component, OnInit } from '@angular/core';
import { single } from 'rxjs';
import { IContent } from '../models/icontent';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-content-search',
  templateUrl: './content-search.component.html',
  styleUrls: ['./content-search.component.scss']
})
export class ContentSearchComponent implements OnInit{


  singlePokemon?: IContent;
  searchDidNotWork: boolean;

  constructor(private pokemonService : PokemonService){
    this.searchDidNotWork = false;
  }
  
  
  ngOnInit(): void {
    this.getNewPokemon("3");
  }

  getNewPokemon(newIdNum: string): void{
    if(this.singlePokemon?.id == -1){
      this.searchDidNotWork = true
    }  else{
    this.pokemonService.getContentItem(Number(newIdNum)).subscribe((pokemon: IContent)=>{
          this.singlePokemon = pokemon;
    } 
      )}
  }
}
