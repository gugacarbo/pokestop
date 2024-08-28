'use client';

import {Button} from '@/components/ui/button';
import {
	useSettings,
	SettingsActionTypes,
} from '@/features/settings/use-settings';
import {GridIcon, ListIcon} from 'lucide-react';
import {
	Tooltip,
	TooltipProvider,
	TooltipTrigger,
	TooltipContent,
} from '@/components/ui/tooltip';
import {Route} from '@/app/[locale]/routes';
import {usePathname} from '@/lib/navigation';

function ChangeLayoutButton() {
	const pathname = usePathname() as Route;

	const {settings, dispatch} = useSettings();

	const shoudShow = [Route.IndividualRanking, Route.Settings].includes(
		pathname,
	);

	if (!shoudShow) {
		return null;
	}
	return (
		<TooltipProvider disableHoverableContent={true}>
			<Tooltip>
				<TooltipTrigger asChild={true}>
					<Button
						onClick={() =>
							dispatch({
								type: SettingsActionTypes.Layout,
								payload: settings.layout === 'grid' ? 'list' : 'grid',
							})
						}
						variant="outline"
						size="icon"
					>
						{settings.layout === 'grid' ? (
							<>
								<GridIcon className="w-5 h-5 text-gray-500 dark:text-gray-300" />
								<span className="sr-only">Switch to Single-Column Display</span>
							</>
						) : (
							<>
								<ListIcon className="w-5 h-5 text-gray-500 dark:text-gray-300" />
								<span className="sr-only">Switch to Grid Display</span>
							</>
						)}
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>
						{settings.layout === 'grid' ? (
							<span>Switch to Single-Column Display</span>
						) : (
							<span>Switch to Grid Display</span>
						)}
					</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}

export {ChangeLayoutButton};
