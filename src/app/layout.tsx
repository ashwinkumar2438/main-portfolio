import type { Metadata, Viewport } from "next";

// local imports:
import Pointer from "src/components/atoms/pointer";

// style imports:
import 'src/styles/globals.scss';

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
      <body>
        <Pointer />
        {children}
      </body>
    </html>
  );
}
