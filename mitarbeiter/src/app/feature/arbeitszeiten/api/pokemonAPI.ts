export class PokemonAPI {

  // get Pokemons from API
  async getPokemons() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const data = await response.json()
    return data
  }

}
