import {PvpHelper} from '@/features/pvp-helper';
import {PvpHelperHeader} from './header';
import {getCandidateCookie} from '@/features/candidate/get-candidate-cookie';

async function Page() {
	const candidate = await getCandidateCookie();

	return (
		<>
			<PvpHelperHeader />
			<PvpHelper candidate={candidate} />
		</>
	);
}

export default Page;
