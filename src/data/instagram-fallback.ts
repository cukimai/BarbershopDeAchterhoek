export type InstagramPost = {
  id: string;
  /** Pad binnen /public of absolute URL */
  image: string;
  permalink: string;
  caption: string;
  type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
};

/**
 * Fallback-posts van @barbershopdeachterhoek. Worden getoond zolang er geen
 * live feed is opgehaald met `npm run instagram` (zie README).
 */
export const fallbackPosts: InstagramPost[] = [
  {
    id: "DAi0wRqghui",
    image: "/instagram/DAi0wRqghui.jpg",
    permalink: "https://www.instagram.com/p/DAi0wRqghui/",
    caption: "Giveaway: maak kans op één van onze parfums",
    type: "IMAGE",
  },
  {
    id: "DdlqJURNVHo",
    image: "/instagram/DdlqJURNVHo.jpg",
    permalink: "https://www.instagram.com/reel/DdlqJURNVHo/",
    caption: "Welkom bij Barbershop De Achterhoek",
    type: "VIDEO",
  },
  {
    id: "DZSleScoYxz",
    image: "/instagram/DZSleScoYxz.jpg",
    permalink: "https://www.instagram.com/reel/DZSleScoYxz/",
    caption: "Precisie aan de stoel",
    type: "VIDEO",
  },
  {
    id: "DZDtA6QuDBP",
    image: "/instagram/DZDtA6QuDBP.jpg",
    permalink: "https://www.instagram.com/reel/DZDtA6QuDBP/",
    caption: "Strakke fade, klaar voor de week",
    type: "VIDEO",
  },
  {
    id: "DdTD9ELOhAJ",
    image: "/instagram/DdTD9ELOhAJ.jpg",
    permalink: "https://www.instagram.com/reel/DdTD9ELOhAJ/",
    caption: "Vakmanschap en de juiste tools",
    type: "VIDEO",
  },
  {
    id: "DZC_KSuoflt",
    image: "/instagram/DZC_KSuoflt.jpg",
    permalink: "https://www.instagram.com/reel/DZC_KSuoflt/",
    caption: "Wie is jouw favoriete barber?",
    type: "VIDEO",
  },
  {
    id: "DSUwpM5iMAJ",
    image: "/instagram/DSUwpM5iMAJ.jpg",
    permalink: "https://www.instagram.com/reel/DSUwpM5iMAJ/",
    caption: "Schaar over kam",
    type: "VIDEO",
  },
  {
    id: "DZSLSL7ot9K",
    image: "/instagram/DZSLSL7ot9K.jpg",
    permalink: "https://www.instagram.com/reel/DZSLSL7ot9K/",
    caption: "Kom langs aan de Stationsstraat",
    type: "VIDEO",
  },
  {
    id: "DRzKgtwiOdK",
    image: "/instagram/DRzKgtwiOdK.jpg",
    permalink: "https://www.instagram.com/reel/DRzKgtwiOdK/",
    caption: "De barber draait je om",
    type: "VIDEO",
  },
  {
    id: "DRuGsmrCMsm",
    image: "/instagram/DRuGsmrCMsm.jpg",
    permalink: "https://www.instagram.com/reel/DRuGsmrCMsm/",
    caption: "Baard in topvorm",
    type: "VIDEO",
  },
];
