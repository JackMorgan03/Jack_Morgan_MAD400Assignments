import { Component, OnInit } from '@angular/core';
import { IContent } from '../models/icontent';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-content-search',
  templateUrl: './content-search.component.html',
  styleUrls: ['./content-search.component.scss']
})
export class ContentSearchComponent implements OnInit{


  singlePokemon?: IContent;

  constructor(private pokemonService : PokemonService){}
  
  
  ngOnInit(): void {
    this.getNewPokemon("3");
  }

  getNewPokemon(newIdNum: string): void{
      this.pokemonService.getContentItem(Number(newIdNum)).subscribe((pokemon: IContent)=>{
          this.singlePokemon = pokemon;
        }
      )}
}
