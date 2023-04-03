import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContent } from '../models/icontent';
import { PokemonService } from '../services/pokemon.service';
@Component({
  selector: 'app-content-list-item-page',
  templateUrl: './content-list-item-page.component.html',
  styleUrls: ['./content-list-item-page.component.scss']
})
export class ContentListItemPageComponent implements OnInit{
id?: number;
singlePokemon?: IContent;
constructor(private route: ActivatedRoute, private pokemonService: PokemonService){
}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{

      this.id = Number(params.get('id'))

      this.pokemonService.getContentItem(Number(this.id)).subscribe((pokemon: IContent)=>{
        this.singlePokemon = pokemon;
    })
  })}



}
