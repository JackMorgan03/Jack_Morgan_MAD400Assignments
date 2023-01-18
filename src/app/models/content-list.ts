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
        this._pokemons.push(pokemonToAdd)
    }

    getLength(){
        return this._pokemons.length
    }
}
