import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


export const metadata: Metadata = {
  title: "Coming Soon...",
  description: "New website coming soon!",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body
        className={`antialiased font-mono min-h-screen min-w-screen flex flex-col`}
      >
        <main className="flex flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
