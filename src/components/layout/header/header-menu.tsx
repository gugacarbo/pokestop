import {
	ChevronFirstIcon,
	CogIcon,
	SlidersHorizontal,
	Github,
	SearchIcon,
	UserPlusIcon,
	Users2Icon,
} from 'lucide-react';
import Image from 'next/image';
import {navigationMenuTriggerStyle} from '@/components/ui/navigation-menu';
import {useTranslations} from 'next-intl';

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import {cn} from '@/lib/utils';
import {Link} from '@/lib/navigation';
import {Route} from '@/app/[locale]/routes';

function HeaderMenu({className}: {className?: string}) {
	const t = useTranslations();

	return (
		<NavigationMenu className={className}>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="border-input bg-background hover:bg-accent py-1 border h-auto hover:text-accent-foreground">
						<Image src="/images/logo.png" alt="Logo" width={50} height={50} />
						<h1 className="font-bold text-xl">{t('main.metadata.title')}</h1>
					</NavigationMenuTrigger>
					<NavigationMenuContent className="flex flex-col gap-1 p-1">
						<NavItem
							href={Route.Home}
							label={t('pages.home.title')}
							icon={<ChevronFirstIcon />}
						/>

						<NavItem
							href={Route.FilterGenerator}
							label={t('pages.filter-generator.title')}
							icon={<SearchIcon />}
						/>

						<NavItem
							href={Route.PvpHelper}
							label={t('pages.pvp-helper.title')}
							icon={<SlidersHorizontal />}
						/>
						<NavItem
							href={Route.IndividualRanking}
							label={t('pages.individual-ranking.title')}
							icon={<UserPlusIcon />}
						/>
						<NavItem
							href={Route.LeaguesRankings}
							label={t('pages.leagues-rankings.title')}
							icon={<Users2Icon />}
						/>
						<NavItem
							href={Route.TypeChart}
							label={t('pages.type-chart.title')}
							icon={<UserPlusIcon />}
						/>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuIndicator />
			</NavigationMenuList>
			<NavigationMenuViewport />
		</NavigationMenu>
	);
}

export {HeaderMenu};

function NavItem({
	href,
	label,
	icon,
}: {
	href: Route;
	label: string;
	icon: React.ReactNode;
}) {
	return (
		<Link
			href={href}
			className={cn(
				navigationMenuTriggerStyle(),
				'w-auto truncate justify-start flex items-center gap-2',
			)}
		>
			{icon}
			<span>{label}</span>
		</Link>
	);
}
