import type { Metadata } from "next";
import { Darker_Grotesque } from "next/font/google";
import "./globals.css";

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
      <body className={`${darker_grotesque.className} text-neutral-500 no-scrollbar`}>{children}</body>
    </html>
  );
}
