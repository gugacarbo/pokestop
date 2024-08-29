import {DataOutputSelector} from '@/features/settings/components/data-output-selector';
import {
	CandidateBuilderStickyHeader,
	CandidateBuilderIVs,
	IvFloorSelector,
	CandidateBuilderSpecies,
	CandidateBuilderFamilySwap,
	CandidateBuilderMinimumLevel,
	CandidateBuilderRankingMetric,
} from '.';
import {LevelCapSelector} from './components/level-cap-selector';

function CandidateBuilder() {
	return (
		<>
			<CandidateBuilderStickyHeader />
			<section className="flex flex-wrap justify-start items-start gap-x-4 gap-y-2 mb-2 px-4 sm:px-0 w-full">
				<CandidateBuilderSpecies />
				<CandidateBuilderIVs />
				<IvFloorSelector />
				<LevelCapSelector />
				<DataOutputSelector />
				<CandidateBuilderRankingMetric />
				<CandidateBuilderMinimumLevel />
				<CandidateBuilderFamilySwap />
			</section>
		</>
	);
}

export {CandidateBuilder};
