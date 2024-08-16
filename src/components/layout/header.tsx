import { LanguageToggle } from "@/components/language-toggler";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/navigation";
import {
  ChevronFirstIcon,
  CogIcon,
  SlidersHorizontal,
  Github,
  SearchIcon,
  UserPlusIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { BackButton } from "../back-button";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { env } from "@/lib/env";
import { ChangeLayoutButton } from "@/features/settings/components/change-layout-button";

export function Header() {
  const t = useTranslations();

  return (
    <header className="flex justify-center items-center shadow-md px-2 py-3 border-b border-border w-full">
      <div className="flex justify-between items-center w-11/12">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="border-input bg-background hover:bg-accent py-1 border h-auto hover:text-accent-foreground">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={50}
                  height={50}
                />
                <h1 className="font-bold text-xl">
                  {t("main.metadata.title")}
                </h1>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="flex flex-col gap-1 p-1">
                <NavItem
                  href="/filter-generator"
                  label={t("pages.search-string-generator.title")}
                  icon={<SearchIcon />}
                />

                <NavItem
                  href="/poke-stats"
                  label={t("pages.poke-stats.title")}
                  icon={<SlidersHorizontal />}
                />
                <NavItem
                  href="/individual-ranking"
                  label={t("pages.individual-ranking.title")}
                  icon={<UserPlusIcon />}
                />
                <NavItem
                  href="/type-chart"
                  label={t("pages.type-chart.title")}
                  icon={<UserPlusIcon />}
                />
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuIndicator />
          </NavigationMenuList>
          <NavigationMenuViewport />
        </NavigationMenu>

        <BackButton />
        <div className="flex items-center gap-4">
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
      </div>
    </header>
  );
}

function NavItem({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        navigationMenuTriggerStyle(),
        "w-auto truncate justify-start flex items-center gap-2"
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
