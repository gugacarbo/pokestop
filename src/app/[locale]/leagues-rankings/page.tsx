import {getCandidateCookie} from '@/features/candidate/get-candidate-cookie';
import {LeaguesRankings} from '@/features/leagues-rankings';

async function LeaguesRankinks() {
	const candidate = await getCandidateCookie();
	return <LeaguesRankings candidate={candidate} />;
}

export default LeaguesRankinks;
