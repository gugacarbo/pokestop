import {Candidate} from '../candidate/use-candidate';

function LeaguesRankings({candidate}: {candidate?: Candidate | null}) {
	return <div>
		{candidate?.species?.name}
		</div>;
}

export {LeaguesRankings};
