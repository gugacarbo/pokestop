import "../globals.css";
import { cookies } from "next/headers";
import { Inter } from "next/font/google";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";

import { cn } from "@/lib/utils";

import { defaultSettings } from "@/features/settings";

import { SettingsProvider } from "@/features/settings/use-settings";

import { ThemeProvider } from "@/components/theme-provider";

import { Header } from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer";
import { parseSettingsCookies } from "@/features/settings/parse-settings-cookies";
import { parseCookies } from "@/lib/parse-cookies";

export const runtime = "edge";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale });

  return {
    title: t("main.metadata.title"),
    description: t("main.metadata.description"),
    manifest: "/manifest.json",
  };
}

interface LayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

async function getInitialSettings() {
  const hok = await parseCookies("settings", defaultSettings);
  const cookieStore = cookies();
  const p = await parseSettingsCookies(cookieStore.get("settings")?.value);
  // console.log(JSON.stringify(p) === JSON.stringify(hok), );
  return p;
}

export default async function RootLayout({
  children,
  params: { locale },
}: LayoutProps) {
  const settings = await getInitialSettings();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn("min-h-screen antialiased", inter.className)}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SettingsProvider initialSettings={settings}>
              <div className="flex flex-col items-center gap-2 w-full min-h-screen">
                <Header />
                <div className="flex flex-col flex-1 mx-auto w-full max-w-screen-xl">
                  {children}
                </div>
                <Footer />
              </div>
            </SettingsProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
