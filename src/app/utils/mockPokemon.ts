import { PokemonDto } from "../dto/PokemonDto";

export const pokemonMock: PokemonDto = {
    "abilities": [
        {
            "ability": {
                "name": "lightning-rod",
                "url": "https://pokeapi.co/api/v2/ability/31/"
            },
            "slot": 3,
            "_hidden": false
        },
        {
            "ability": {
                "name": "static",
                "url": "https://pokeapi.co/api/v2/ability/9/"
            },
            "slot": 1,
            "_hidden": false
        }
    ],
    "name": "pikachu",
    "id": 25,
    "sprites": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    }
};