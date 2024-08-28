import {useTranslations} from 'next-intl';

function PvpHelperHeader() {
	const t = useTranslations('pages');
	return (
		<>
			<h1 className="px-4 sm:px-0 pt-2 w-full font-semibold text-2xl">
				{t('pvp-helper.title')}
				<span className="text-muted-foreground text-xs"> Beta</span>
			</h1>
		</>
	);
}

export {PvpHelperHeader};
