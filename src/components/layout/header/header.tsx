import {BackButton} from '../../back-button';
import {HeaderMenu} from './header-menu';
import {SideMenu} from './side-menu/side-menu';

export function Header() {
	return (
		<header className="flex justify-center items-center shadow-md px-2 py-3 border-b border-border w-full">
			<div className="place-items-center grid grid-cols-[1fr_1fr_1fr] w-11/12">
				<HeaderMenu className="mr-auto" />
				<BackButton />
				<SideMenu className="ml-auto" />
			</div>
		</header>
	);
}
