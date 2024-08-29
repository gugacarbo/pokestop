import {
	LeaguesSettings,
	LevelCapSettings,
	OutputDataSettings,
	CandidateCreatorSettings,
} from '@/features/settings/settings-page';
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({
	params: {locale},
}: {
	params: {locale: string};
}) {
	const t = await getTranslations({locale});
	return {
		title: t('settings.metadata.title'),
		description: t('settings.metadata.description'),
	};
}

async function Page() {
	return (
		<div className="items-start gap-12 md:gap-8 grid grid-cols-1 lg:grid-cols-2 -mt-2 md:mt-4 w-full">
			<div className="flex flex-col gap-12 md:gap-8 w-full">
				<LeaguesSettings />
				<OutputDataSettings />
			</div>
			<div className="flex flex-col gap-12 md:gap-8 w-full">
				<LevelCapSettings />
				<CandidateCreatorSettings />
			</div>
		</div>
	);
}

export default Page;
