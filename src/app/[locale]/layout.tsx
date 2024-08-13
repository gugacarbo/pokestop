import "../globals.css";
import { cookies } from "next/headers";
import { Inter } from "next/font/google";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";

import { cn } from "@/lib/utils";

import type { Settings } from "@/features/settings";
import { defaultSettings } from "@/features/settings";

import { SettingsProvider } from "@/features/settings/use-settings";

import { ThemeProvider } from "@/components/theme-provider";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

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

export default async function RootLayout({
  children,
  params: { locale },
}: LayoutProps) {
  const messages = await getMessages();

  const settings = await getInitialSettings();

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
              <div className="flex flex-col items-center gap-2 w-full">
                <Header />
                <div className="flex flex-col mx-auto w-full max-w-screen-xl fle">
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

async function getInitialSettings() {
  const cookieStore = cookies();

  try {
    if (!cookieStore.has("settings")) {
      throw new Error("No settings cookie");
    }

    let parsed: Settings | undefined;
    try {
      parsed = JSON.parse(
        cookieStore.get("settings")?.value || "{}"
      ) as Settings;
    } catch (err) {
      parsed = undefined;
    }

    return {
      ...defaultSettings,
      ...parsed,
      outputData: {
        ...defaultSettings.outputData,
        ...(parsed ?? {}).outputData,
      },
    };
  } catch (err) {
    return defaultSettings;
  }
}
