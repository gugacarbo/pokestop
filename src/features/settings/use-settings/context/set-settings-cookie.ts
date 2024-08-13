"use server";

import { cookies } from "next/headers";
import { Settings } from "..";

export async function setSettingsCookie(settings: Settings) {
  const cookieStore = cookies();

  cookieStore.set("settings", JSON.stringify(settings), {
    path: "/",
    maxAge: 30 * 24 * 60 * 60,
  });
}
