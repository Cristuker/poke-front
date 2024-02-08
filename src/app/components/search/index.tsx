'use client'
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface Props {
	setQuery: Dispatch<SetStateAction<string>>;
    query: string;
    submit: () => Promise<void>
}

export function Search({ setQuery, query, submit }: Props) {
	return (
		<Flex flexDirection="column" width="100%">
			<Text marginBottom="10px">Digite o nome de um pokemon</Text>
			<Input value={query} placeholder="Buscar pokemon" onChange={(e: any) => setQuery(e.target.value)} />
            <Button colorScheme="yellow" marginTop="20px" onClick={() => submit()}>Buscar</Button>
		</Flex>
	);
}
