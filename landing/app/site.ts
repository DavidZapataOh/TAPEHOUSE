/**
 * Outbound links. A link with no address yet is simply not rendered,
 * so the footer never ships a dead end.
 */
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "#open-app";

export const EXTERNAL: { label: string; href?: string }[] = [
  { label: "GitHub", href: process.env.NEXT_PUBLIC_GITHUB_URL },
  { label: "X", href: process.env.NEXT_PUBLIC_X_URL },
  { label: "Telegram", href: process.env.NEXT_PUBLIC_TELEGRAM_URL },
];

export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
