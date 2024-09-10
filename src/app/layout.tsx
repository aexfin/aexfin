import type { Metadata } from "next";
import { Darker_Grotesque } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";
const darker_grotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: "600"
});

export const metadata: Metadata = {
  title: "aexfin",
  description: "is this aexfin?",
  icons: {
    icon: "https://github.com/aexfin.png",
  },
  openGraph: {
    title: "aexfin",
    description: "is this aexfin?",
    type: "profile",
    images: ["https://github.com/aexfin.png"],
    url: "https://github.com/aexfin",
    siteName: "aexfin",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        className={`${darker_grotesque.className} bg-black text-zinc-600 text-center`}
      >
        {children}
      </body>
    </html>
  );
}
