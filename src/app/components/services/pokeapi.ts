import { PokemonDto } from "../../dto/PokemonDto";

export async function getPokemon(query: string): Promise<PokemonDto> {
    const result = await fetch(`http://localhost:8080/api/pokemon/search?name=${query}`);
    const pokemon: PokemonDto = await result.json();
    return pokemon;
}