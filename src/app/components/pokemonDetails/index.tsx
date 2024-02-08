'use client'
import {
	Heading,
	UnorderedList,
	ListItem,
	Container,
	Box,
	Image,
	Flex,
} from "@chakra-ui/react";
import { PokemonDto } from "../../dto/PokemonDto";

interface Props {
	pokemon: PokemonDto;
}
export function PokemonDetails({ pokemon }: Props) {
	return (
		<>
			{pokemon?.abilities? (
				<Box marginTop="20px" width="100%">
					<Heading size="xl">Habilidades do pokemon</Heading>
					<UnorderedList marginTop="20px">
						{pokemon.abilities.map((abilitie) => (
							<ListItem key={abilitie.ability.name}>
								{abilitie.ability.name}
							</ListItem>
						))}
					</UnorderedList>
					<Container marginTop="30px">
						<Heading size="lg" textAlign="center">
							Você encontrou um {pokemon.name}
						</Heading>
						<Flex justifyContent="center">
							<Image
								src={pokemon.sprites.front_default}
								alt="Pokemon image"
							/>
						</Flex>
					</Container>
				</Box>
			) : (
				<></>
			)}
		</>
	);
}
