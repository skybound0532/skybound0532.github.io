"use client";
import AspectImage from "@/components/ui/aspect-image";
import { useState } from "react";

export default function CookingPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <h1 className="text-4xl font-bold mb-4 gradient-text text-center">Cooking</h1>
      <p className="text-lg text-muted-foreground mb-12 text-center">
        I cook because I enjoy eating
      </p>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {photos.map((photo, index) => (
          <PhotoTile key={index} photo={photo} />
        ))}
      </div>
    </div>
  );
}

type Photo = {
  src: string;
  caption: string;
  height?: string; // deprecated
  aspectRatio?: string; // e.g., "4 / 5" or "1 / 1"
};

const photos: Photo[] = [
  {
    src: "/raspmatchamochi.JPG",
    caption: "Raspberry mochi butter cake with matcha glaze",
    aspectRatio: "4 / 5",
  },
  {
    src: "/genericpasta.JPG",
    caption: "Generic chicken stock and tomato sauce pasta",
    aspectRatio: "3 / 4",
  },
  {
    src: "/ubecoconutmochi.JPG",
    caption: "Ube coconut mochi butter cake. Currently my favorite recipe ever.",
    aspectRatio: "4 / 5",
  },
  {
    src: "/tonkatsu.JPG",
    caption: "Tonkatsu",
    aspectRatio: "4 / 5",
  },
  {
    src: "/millecrepecake.JPG",
    caption: "Matcha mille crepe cake",
    aspectRatio: "4 / 5",
  },
  {
    src: "/ubetart.JPG",
    caption: "Ube tart",
    aspectRatio: "1 / 1",
  },
  {
    src: "/kfc.JPG",
    caption: "Korean fried chicken with random gochujang sauce",
    aspectRatio: "4 / 5",
  },
  {
    src: "/onigiri.JPG",
    caption: "Tuna mayo and salmon rice onigiri",
    aspectRatio: "1 / 1",
  },
  {
    src: "/honeygarlicchicken.JPG",
    caption: "Soy honey garlic chicken",
    aspectRatio: "4 / 5",
  },
  {
    src: "/eggtart.JPG",
    caption: "Egg tart croissants",
    aspectRatio: "4 / 5",
  },
  {
    src: "/matchabasquecheesecake.JPG",
    caption: "Matcha basque cheesecake",
    aspectRatio: "4 / 5",
  },
  {
    src: "/marrymechickenpasta.JPG",
    caption: "Marry me chicken pasta",
    aspectRatio: "4 / 5",
  },
  {
    src: "/bobacake.JPG",
    caption: "Brown sugar boba cake",
    aspectRatio: "4 / 5",
  },
  {
    src: "/frenchoniongrilledcheese.JPG",
    caption: "French onion grilled cheese",
    aspectRatio: "3 / 4",
  },
  {
    src: "/hongshaorou.JPG",
    caption: "Red braised pork belly",
    aspectRatio: "4 / 5",
  },
  {
    src: "/matchatiramisu.JPG",
    caption: "Matcha tiramisu",
    aspectRatio: "4 / 5",
  },
  {
    src: "/blueberrycheesecake.JPG",
    caption: "Blueberry cheesecake",
    aspectRatio: "4 / 5",
  },
  {
    src: "/ubehalayajam.JPG",
    caption: "Ube halaya jam",
    aspectRatio: "4 / 5",
  },
  {
    src: "/tteokbokki.JPG",
    caption: "Tteokbokki",
    aspectRatio: "4 / 5",
  },
  {
    src: "/threelayermatcha.JPG",
    caption: "Three layer matcha cheesecake",
    aspectRatio: "4 / 5",
  },
  {
    src: "/pulledpork.JPG",
    caption: "Pulled pork",
    aspectRatio: "4 / 5",
  },
];

function PhotoTile({ photo }: { photo: Photo }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div
      className="relative break-inside-avoid mb-4 group cursor-pointer select-none"
      onClick={() => setRevealed((v) => !v)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setRevealed((v) => !v);
      }}
      role="button"
      tabIndex={0}
      aria-pressed={revealed}
      aria-label={`Toggle caption: ${photo.caption}`}
    >
      <AspectImage
        src={photo.src}
        alt={photo.caption}
        ratio={photo.aspectRatio || "4 / 5"}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        imageClassName="transition-transform duration-300 group-hover:scale-105"
      >
        <div
          className={`absolute inset-0 bg-black/70 transition-opacity duration-300 flex items-center justify-center p-6 ${revealed ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
        >
          <p className="text-white text-center text-lg font-medium">{photo.caption}</p>
        </div>
      </AspectImage>
    </div>
  );
}
