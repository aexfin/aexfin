import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const powerGrotesk = localFont({src: "../../public/Power-Grotesk.ttf"});

export const metadata: Metadata = {
  title: "@aexfin",
  description: "aexfin",
  icons: {
    icon: "https://github.com/aexfin.png",
  },
  openGraph: {
    title: "@aexfin",
    type: "profile",
    images: [
      "https://github.com/aexfin.png"
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${powerGrotesk.className} cursor-crosshair`}>
      <body className="flex flex-col items-center justify-between">
        {children}
        <div className="fixed bottom-0 m-4 p-2 flex flex-row bg-neutral-950 rounded-full border-2 border-neutral-900">
          <Link href="/about" className="px-16 text-lg text-neutral-500 cursor-crosshair duration-300 hover:text-neutral-50">
            @aexfin/<span className="text-neutral-50">about</span>
          </Link>
          <Link href="/" className="px-16 text-lg text-neutral-500 cursor-crosshair duration-300 hover:text-neutral-50">
            @aexfin
          </Link>
          <Link href="/projects" className="px-16 text-lg text-neutral-500 cursor-crosshair duration-300 hover:text-neutral-50">
            @aexfin/<span className="text-neutral-50">projects</span>
          </Link>
        </div>
        </body>
    </html>
  );
}