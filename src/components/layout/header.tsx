import { LanguageToggle } from "@/components/language-toggler";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/navigation";
import {
  ChevronFirstIcon,
  CogIcon,
  FileQuestion,
  Github,
  SearchIcon,
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

export function Header() {
  const t = useTranslations("main");

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
                <h1 className="font-bold text-xl">{t("metadata.title")}</h1>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="flex flex-col gap-1 p-1">
                <Link
                  href="/filter-generator"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "w-auto truncate justify-start"
                  )}
                >
                  <SearchIcon className="size-5" />{" "}
                  <span>Search String Generator</span>
                </Link>
                <Link
                  href="/iv-guess"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "w-auto truncate justify-start"
                  )}
                >
                  <FileQuestion className="size-5" />
                  <span>IV Guess</span>
                </Link>
                <Link
                  href="/ranking"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "w-auto truncate justify-start"
                  )}
                >
                  <ChevronFirstIcon className="size-5" />
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuIndicator />
          </NavigationMenuList>
        </NavigationMenu>

        <BackButton />
        <div className="flex items-center gap-4">
          <Link href="/settings">
            <Button variant="outline" size="icon">
              <CogIcon className="size-5" />
            </Button>
          </Link>

          <LanguageToggle />
          <ThemeToggle />
          
          <a href={env.APP_REPO}>
            <Button variant="outline" size="icon">
              <Github className="size-5" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
