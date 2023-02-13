import { Component, OnInit } from '@angular/core';
import { IContent } from './models/icontent';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ContentListItemComponent } from './content-list-item/content-list-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'J_Morgan_FavoritePokemon';
  singlePokemon?: IContent;
  secondPokemon?: IContent;

  constructor(private PokemonService: PokemonService){
      
  }

  ngOnInit(): void{
    this.PokemonService.getContentItem(1).subscribe((pokemon: IContent)=>{
      this.singlePokemon = pokemon;

      this.PokemonService.getContentItem(1).subscribe((pokemon: IContent)=>{
        this.secondPokemon = pokemon;
  })
  }
  //Empoleon - 
  //Gengar
  //Crobat
  //Ampharos
  //Umbreon
  //Quagsire
  //Lugia
  //Flygon
  //Altaria
  //Metagross
  // myContentList = new ContentList();
  
  // empoleon = <IContent> {
  //   id: 1,
  //   name: "Empoleon",
  //   description: "It swims as fast as a jet boat. The edges of its wings are sharp and can slice apart drifting ice.",
  //   author: "Jack Morgan",
  //   type: "Water, Steel",
  //   tags: ["Water", "Steel", "#0395"]
  // }
  // gengar = <IContent> {
  //   id: 1,
  //   name: "Gengar",
  //   description: "To steal the life of its targets, it slips into the prey's shadow and silently waits for an opportunity.",
  //   author: "Jack Morgan",
  //   type: "Ghost, Poison",
  //   tags: ["Ghost", "Poison", "#0094"]
  // }
  // crobat = <IContent> {
  //   id: 1,
  //   name: "Crobat",
  //   description: "Both of its legs have turned into wings. Without a sound, Crobat flies swiftly toward its prey and sinks its fangs into the ape of it's target.",
  //   author: "Jack Morgan",
  //   type: "Poison, Flying",
  //   tags: ["Poison", "Flying", "#0169"]
  // }
  // ampharos = <IContent> {
  //   id: 1,
  //   name: "Ampharos",
  //   description: "The bright light on its tail can be seen far away. It has been treasured since ancient times as a beacon.",
  //   author: "Jack Morgan",
  //   type: "Electric",
  //   tags: ["Electric", "#0181"]
  // }

}
