import { Component } from '@angular/core';
import { PokemonAPI } from './api/pokemonAPI';

@Component({
  selector: 'app-arbeitszeiten',
  templateUrl: './arbeitszeiten.component.html',
})
export class ArbeitszeitenComponent {

  pokemonAPI = new PokemonAPI();
  pokemons: string[] = []

  async loadPokemons(): Promise<void> {
    let data = await this.pokemonAPI.getPokemons();
    console.log(data);

    this.pokemons = data.results.map((p: any) => p.name);
  }

}
