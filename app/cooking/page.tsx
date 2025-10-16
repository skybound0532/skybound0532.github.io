import Image from "next/image";

export default function CookingPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <h1 className="text-4xl font-bold mb-4 gradient-text text-center">Cooking</h1>
      <p className="text-lg text-muted-foreground mb-12 text-center">
        I cook because I enjoy eating
      </p>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative break-inside-avoid mb-4 group cursor-pointer"
            style={{ height: photo.height }}
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/20">
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Hover Caption Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                <p className="text-white text-center text-lg font-medium">
                  {photo.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

type Photo = {
  src: string;
  caption: string;
  height: string;
};

const photos: Photo[] = [
  {
    src: "/raspmatchamochi.JPG",
    caption: "Raspberry mochi butter cake with matcha glaze",
    height: "400px",
  },
  {
    src: "/genericpasta.jpg",
    caption: "Generic chicken stock and tomato sauce pasta",
    height: "450px",
  },
  {
    src: "/ubecoconutmochi.jpg",
    caption: "Ube coconut mochi butter cake. Currently my favorite recipe ever.",
    height: "400px",
  },
  {
    src: "/tonkatsu.jpg",
    caption: "Tonkatsu",
    height: "350px",
  },
  {
    src: "/millecrepecake.jpg",
    caption: "Matcha mille crepe cake",
    height: "460px",
  },
  {
    src: "/ubetart.jpg",
    caption: "Ube tart",
    height: "420px",
  },
  {
    src: "/kfc.jpg",
    caption: "Korean fried chicken with random gochujang sauce",
    height: "360px",
  },
  {
    src: "/onigiri.jpg",
    caption: "Tuna mayo and salmon rice onigiri",
    height: "300px",
  },
  {
    src: "/honeygarlicchicken.jpg",
    caption: "Soy honey garlic chicken",
    height: "360px",
  },
  {
    src: "/eggtart.jpg",
    caption: "Egg tart croissants",
    height: "460px",
  },
  {
    src: "/matchabasquecheesecake.jpg",
    caption: "Matcha basque cheesecake",
    height: "340px",
  },
  {
    src: "/marrymechickenpasta.jpg",
    caption: "Marry me chicken pasta",
    height: "420px",
  },
  {
    src: "/bobacake.jpg",
    caption: "Brown sugar boba cake",
    height: "420px",
  },
  {
    src: "/frenchoniongrilledcheese.jpg",
    caption: "French onion grilled cheese",
    height: "500px",
  },
  {
    src: "/hongshaorou.jpg",
    caption: "Red braised pork belly",
    height: "400px",
  },
  {
    src: "/matchatiramisu.jpg",
    caption: "Matcha tiramisu",
    height: "420px",
  },
  {
    src: "/blueberrycheesecake.jpg",
    caption: "Blueberry cheesecake",
    height: "380px",
  },
  {
    src: "/ubehalayajam.jpg",
    caption: "Ube halaya jam",
    height: "390px",
  },
  {
    src: "/tteokbokki.jpg",
    caption: "Tteokbokki",
    height: "420px",
  },
  {
    src: "/threelayermatcha.jpg",
    caption: "Three layer matcha cheesecake",
    height: "390px",
  },
  {
    src: "/pulledpork.jpg",
    caption: "Pulled pork",
    height: "420px",
  },
];
