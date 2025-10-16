import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eric Gu",
  description: "My engineering portfolio, cooking photos, and more.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-3xl border-b border-white/10" style={{ background: "rgba(255,255,255,0.015)" }}>
          <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold gradient-text">
              Eric Gu
            </Link>
            <NavigationMenu className="hidden sm:block">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                    <Link href="/">
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                    <Link href="/projects">
                      Projects
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                    <Link href="/cooking">
                      Cooking
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            {/* simple mobile links */}
            <div className="sm:hidden flex items-center gap-4 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary">Home</Link>
              <Link href="/projects" className="text-muted-foreground hover:text-primary">Projects</Link>
              <Link href="/cooking" className="text-muted-foreground hover:text-primary">Cooking</Link>
            </div>
          </div>
        </nav>
        <main className="pt-20">{children}</main>
        
        {/* footer */}
        <footer className="backdrop-blur-3xl border-t border-white/10 mt-16" style={{ background: "rgba(255,255,255,0.015)" }}>
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-center gap-8 text-base text-muted-foreground">
              <div>© 2025 Eric Gu. Built in Next.js using shadcn/ui</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
