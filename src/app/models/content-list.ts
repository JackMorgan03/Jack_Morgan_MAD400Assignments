import { IContent } from "./icontent";

export class ContentList {
    private _pokemons: IContent[];
    constructor(pokemon:IContent){
        this._pokemons = [];
    }
    get pokemons() : IContent[]{
        return this._pokemons;
    }

    addContent(pokemonToAdd: IContent){
        this._pokemons.push(pokemonToAdd);
    }

    getLength(){
        return this._pokemons.length;
    }

    toString(number: number){
        let indexItem = this._pokemons[number];
        let indexItemTags = indexItem.tags!;
        let output = "<h1>Title: ".concat(indexItem.name, "</h1><br /><p>Description: ", indexItem.description!, "</p><br /><p>Author: ", indexItem.author, "</p><br /><img src='", indexItem.imgSrc!, "'/><br /><p>Type: ", indexItem.type, "</p><br /><h2>Tags:</h2><br />");
        for(let i = 0; i < indexItemTags.length; i++){
            output.concat("<ul>", i, "</ul>")
        }
        
    }
}
