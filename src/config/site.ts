export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    community?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Catch a Plane Wiki",
  shortName: "Catch a Plane",
  logoText: "C",
  tagline: "Plane-Catching Guides, Gloves & Gear",
  description: "Your ultimate Catch a Plane guide on Roblox! Learn plane-catching strategies, glove and gear upgrades, strength training, and progression tips.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://catchaplane.top",
  supportEmail: "support@catchaplane.top",
  gameUrl: "https://www.roblox.com/games/86522629968403/Catch-a-Plane",
  heroVideoId: "aL1FDRtS7qQ", // Catch a Plane Roblox gameplay
  social: {
    community: "https://www.roblox.com/communities/34857128",
    youtube: "https://www.youtube.com/watch?v=aL1FDRtS7qQ",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
