import {Move} from '@/@types/move';

export function calculateMoveCounts(fastMove: Move, chargedMove: Move) {
	var counts = [];

	counts.push(Math.ceil((chargedMove.energy * 1) / fastMove.energyGain));
	counts.push(
		Math.ceil((chargedMove.energy * 2) / fastMove.energyGain) - counts[0],
	);
	counts.push(
		Math.ceil((chargedMove.energy * 3) / fastMove.energyGain) -
			counts[0] -
			counts[1],
	);
	counts.push(
		Math.ceil((chargedMove.energy * 4) / fastMove.energyGain) -
			counts[0] -
			counts[1] -
			counts[2],
	);

	return counts;
}
