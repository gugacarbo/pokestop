import {PvpHelper} from '@/features/pvp-helper';
import {getCandidateCookie} from '@/features/candidate/get-candidate-cookie';

async function Page() {
	const candidate = await getCandidateCookie();

	return <PvpHelper candidate={candidate} />;
}

export default Page;
