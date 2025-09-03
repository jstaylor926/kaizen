import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaizen — Josh Taylor",
  description: "A portfolio that improves through small, visible steps.",
  metadataBase: new URL("https://kaizen.example.com"),
  openGraph: {
    title: "Kaizen — Josh Taylor",
    description: "A portfolio that improves through small, visible steps.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 antialiased`}>
        <div className="mx-auto max-w-6xl px-4">
          <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60 border-b border-zinc-200/50 dark:border-zinc-800">
            <nav className="flex items-center justify-between py-3">
              <a href="/" className="font-semibold tracking-tight">Kaizen</a>
              <div className="flex gap-6 text-sm">
                <a href="/projects">Projects</a>
                <a href="/changelog">Changelog</a>
                <a href="/about">About</a>
              </div>
            </nav>
          </header>
          <main className="py-10">{children}</main>
          <footer className="py-10 text-sm text-zinc-500">© {new Date().getFullYear()} Josh Taylor</footer>
        </div>
      </body>
    </html>
  );
}
