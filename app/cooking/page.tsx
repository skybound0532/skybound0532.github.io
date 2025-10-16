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
    src: "/genericpasta.JPG",
    caption: "Generic chicken stock and tomato sauce pasta",
    height: "450px",
  },
  {
    src: "/ubecoconutmochi.JPG",
    caption: "Ube coconut mochi butter cake. Currently my favorite recipe ever.",
    height: "400px",
  },
  {
    src: "/tonkatsu.JPG",
    caption: "Tonkatsu",
    height: "350px",
  },
  {
    src: "/millecrepecake.JPG",
    caption: "Matcha mille crepe cake",
    height: "460px",
  },
  {
    src: "/ubetart.JPG",
    caption: "Ube tart",
    height: "420px",
  },
  {
    src: "/kfc.JPG",
    caption: "Korean fried chicken with random gochujang sauce",
    height: "360px",
  },
  {
    src: "/onigiri.JPG",
    caption: "Tuna mayo and salmon rice onigiri",
    height: "300px",
  },
  {
    src: "/honeygarlicchicken.JPG",
    caption: "Soy honey garlic chicken",
    height: "360px",
  },
  {
    src: "/eggtart.JPG",
    caption: "Egg tart croissants",
    height: "460px",
  },
  {
    src: "/matchabasquecheesecake.JPG",
    caption: "Matcha basque cheesecake",
    height: "340px",
  },
  {
    src: "/marrymechickenpasta.JPG",
    caption: "Marry me chicken pasta",
    height: "420px",
  },
  {
    src: "/bobacake.JPG",
    caption: "Brown sugar boba cake",
    height: "420px",
  },
  {
    src: "/frenchoniongrilledcheese.JPG",
    caption: "French onion grilled cheese",
    height: "500px",
  },
  {
    src: "/hongshaorou.JPG",
    caption: "Red braised pork belly",
    height: "400px",
  },
  {
    src: "/matchatiramisu.JPG",
    caption: "Matcha tiramisu",
    height: "420px",
  },
  {
    src: "/blueberrycheesecake.JPG",
    caption: "Blueberry cheesecake",
    height: "380px",
  },
  {
    src: "/ubehalayajam.JPG",
    caption: "Ube halaya jam",
    height: "390px",
  },
  {
    src: "/tteokbokki.JPG",
    caption: "Tteokbokki",
    height: "420px",
  },
  {
    src: "/threelayermatcha.JPG",
    caption: "Three layer matcha cheesecake",
    height: "390px",
  },
  {
    src: "/pulledpork.JPG",
    caption: "Pulled pork",
    height: "420px",
  },
];
