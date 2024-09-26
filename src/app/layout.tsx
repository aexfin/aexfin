import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";

const darker_grotesque = Chakra_Petch({
  weight: "500",
  display: "auto",
  style: ["normal"],
  subsets: ["latin"],
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
        className={`${darker_grotesque.className} text-center selection:bg-slate-400`}
      >
        {children}
      </body>
    </html>
  );
}
