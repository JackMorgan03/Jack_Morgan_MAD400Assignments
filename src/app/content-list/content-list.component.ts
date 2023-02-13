import { Component, OnInit } from '@angular/core';
import { IContent } from '../models/icontent';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit{
  content: IContent[] = [];

  constructor(private contentService: PokemonService){

  }

  ngOnInit(){
    this.contentService.getContent().subscribe(content=>this.content = content);
  }

}
