import { Component } from '@angular/core';
import { IContent } from '../models/icontent';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  listOfPokemon: IContent[];

  constructor(){
    this.listOfPokemon = [];
    this.listOfPokemon.push({
      id: 1,
      name: 'Empoleon',
      description: 'It swims as fast as a jet boat. The edges of its wings are sharp and can slice apart drifting ice.',
      author: 'Jack Morgan',
      type: 'Water, Steel',
      tags: ["Water", "Steel", "#0395"]
    },

    {
      id: 2,
      name: 'Gengar',
      description: "To steal the life of its targets, it slips into the prey's shadow and silently waits for an opportunity.",
      author: 'Jack Morgan',
      type: 'Ghost, Poison',
      tags: ["Ghost", "Poison", "#0094"]
    },

    {
      id: 3,
      name: 'Crobat',
      description: "Both of its legs have turned into wings. Without a sound, Crobat flies swiftly toward its prey and sinks its fangs into the ape of it's target.",
      author: 'Jack Morgan',
      type: 'Poison, Flying',
      tags: ["Poison", "Flying", "#0169"]
    }, 
    
    {
      id: 4,
      name: 'Ampharos',
      description: "The bright light on its tail can be seen far away. It has been treasured since ancient times as a beacon.",
      author: 'Jack Morgan',
      type: 'Electric',
      tags: ["Electric", "#0169"]
    }    
    )
  }

}
