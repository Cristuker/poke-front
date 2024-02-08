import { AbilitieDto } from './AbilitieDto';
import { SpritDto } from './SpriteDto'

export interface PokemonDto {
    abilities: Array<AbilitieDto>;
    name: string;
    id: number;
    sprites: SpritDto;
    error?: string;
    path?: string;
    status?: number;
    timestamp?: string
}