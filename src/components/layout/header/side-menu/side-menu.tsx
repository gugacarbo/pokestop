import {LanguageToggle} from '@/components/language-toggler';
import {ThemeToggle} from '@/components/theme-toggle';
import {Button} from '@/components/ui/button';
import {Link} from '@/lib/navigation';
import {CogIcon, Github} from 'lucide-react';
import {env} from '@/lib/env';
import {ChangeLayoutButton} from './change-layout-button';
import {cn} from '@/lib/utils';

export function SideMenu({className}: {className?: string}) {
	return (
		<div className={cn('flex items-center gap-4', className)}>
			<Link href="/settings">
				<Button variant="outline" size="icon">
					<CogIcon className="size-5" />
				</Button>
			</Link>
			<LanguageToggle />
			<ChangeLayoutButton />
			<ThemeToggle />
			<a href={env.APP_REPO} target="_blank">
				<Button variant="outline" size="icon">
					<Github className="size-5" />
				</Button>
			</a>
		</div>
	);
}
