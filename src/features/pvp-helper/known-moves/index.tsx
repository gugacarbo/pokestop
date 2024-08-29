import {Pokemon} from '@/@types/pokemon';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {PokeMove} from './move';
import {useState} from 'react';

function KnownMoves({pokemon}: {pokemon: Pokemon}) {
	const [selectedFast, setselectedFast] = useState(
		pokemon.moves?.fastMoves?.[0],
	);
	return (
		<Card className="col-span-1 md:col-span-3 p-2 rounded-md w-full">
			<CardHeader className="pb-1 md:pb-0">
				<CardTitle>Known Moves</CardTitle>
			</CardHeader>
			<CardContent className="gap-4 grid grid-cols-2">
				<div className="flex flex-col gap-1 w-full">
					<span className="m-0.5 font-medium font-title">Fast Moves</span>
					<div className="flex flex-col gap-2 w-full">
						{pokemon.moves?.fastMoves?.map(
							move =>
								typeof move !== 'string' && (
									<PokeMove
										key={move?.id}
										move={move}
										pokemon={pokemon}
										moveType="fast"
										selectedFastMove={selectedFast}
										onClick={() => setselectedFast(move)}
									/>
								),
						)}
					</div>
				</div>
				<div className="flex flex-col gap-2 w-full">
					<span className="m-0.5 font-medium font-title">Charged Moves</span>
					<div className="flex flex-col gap-2 w-full">
						{pokemon.moves?.chargedMoves?.map(
							move =>
								typeof move !== 'string' && (
									<PokeMove
										selectedFastMove={selectedFast}
										key={move?.id}
										move={move}
										pokemon={pokemon}
										moveType="charged"
									/>
								),
						)}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

export {KnownMoves};
