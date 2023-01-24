import { Component } from '@angular/core';
import { IContent } from './models/icontent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'J_Morgan_FavoritePokemon';
  //Empoleon - 
  //Gengar
  //Crobat
  //Amphros
  //Umbreon
  //Quagsire
  //Lugia
  //Flygon
  //Altaria
  //Metagross

  empoleon : IContent = {
    id: 1,
    name: "Empoleon",
    description: "It swims as fast as a jet boat. The edges of its wings are sharp and can slice apart drifting ice.",
    author: "Jack Morgan",
    type: "Water, Steel",
    tags: ["Water", "Steel", "#0395"]
  }
}
