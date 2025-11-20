import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import Layout from "./component/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nelson Okosun - GIS Consultant & Project Manager",
  description: "Professional GIS Consultant and Project Manager specializing in spatial analysis, mapping solutions, and project management.",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><defs><style>.logo{fill:%239333ea}</style></defs><circle cx='16' cy='16' r='16' fill='%23000'/><path class='logo' d='M16 4C10.48 4 6 8.48 6 14c0 7 10 14 10 14s10-7 10-14c0-5.52-4.48-10-10-10z'/><circle cx='16' cy='14' r='2.5' fill='white'/></svg>",
        type: "image/svg+xml",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning={true}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}