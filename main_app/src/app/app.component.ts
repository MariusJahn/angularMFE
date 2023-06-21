import { loadRemoteEntry, loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'main_app';
  viewContainer: ViewContainerRef;
  pokemons = [];

  constructor(public viewContainerRef: ViewContainerRef) {
    this.viewContainer = viewContainerRef;
  }

  async load(): Promise<void> {
    console.log("clicked!");

    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4300/remoteEntry.js',
      exposedModule: './AppComponent'
    });

    console.log(m.AppComponent);

    const ref = this.viewContainer.createComponent(m.AppComponent);
    // const compInstance = ref.instance;
  }

  async loadPokemonAPI(): Promise<void> {
    console.log("clicked!");

    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4400/remoteEntry.js',
      exposedModule: './PokemonAPI'
    });

    console.log(m.PokemonAPI);

    let pokemonAPI = new m.PokemonAPI();

    let data = await pokemonAPI.getPokemons();

    this.pokemons = data.results.map((p: any) => p.name);


}
}
