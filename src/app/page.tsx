"use client";
import { Container, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { PokemonDto } from "./dto/PokemonDto";
import { PokemonDetails } from "./components/pokemonDetails";
import { Search } from "./components/search";
import { getPokemon } from "./components/services/pokeapi";
import { Bounce, toast } from "react-toastify";
import { statusParser } from "./utils/statusToMessage";

export default function Home() {
	const [pokemon, setPokemon] = useState<PokemonDto>();
	const [query, setQuery] = useState<string>("");
	async function getInfo() {
		const result = await getPokemon(query);
		if (result.status != null) {
			toast.error(statusParser[result.status], {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
				transition: Bounce,
			});
			setPokemon(undefined);
		} else {
			setPokemon(result);

		}
	}

	return (
		<Container width="100vw">
			<Flex flexDirection="column" alignItems="center" marginTop="50px">
				<Heading fontFamily="Pokemon Solid; sans-serif">Poké consume</Heading>
				<Container marginTop="20px">
					<Search
						query={query}
						setQuery={setQuery}
						submit={getInfo}
					/>
					{pokemon ? <PokemonDetails pokemon={pokemon} /> : <></>}
				</Container>
			</Flex>
		</Container>
	);
}
