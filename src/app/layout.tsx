import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";


// style imports:
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashwin's World",
  description: "This is my personal portfolio site which I have created just to document my progress in the web universe",
};

export const viewport: Viewport = {
  colorScheme: 'dark'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
