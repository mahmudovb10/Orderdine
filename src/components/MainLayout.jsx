// src/app/layout.jsx

import { GlobalContextProvider } from "@/context/GlobalContext";
import Link from "next/link"; // Next.js linklarini ishlatamiz
import "./globals.css"; // Global stillaringiz

export const metadata = {
  title: "Commerce Next",
  description: "Next.js E-Commerce Project",
};

export default function RootLayout({ children }) {
  // MainLayout.jsx dan ko'chirilgan asosiy layout shu yerda joylashadi.
  return (
    <html lang="en">
      <body>
        <GlobalContextProvider>
          <div className="main__layout">
            <header className="header bg-base-300 p-4 shadow-md">
              <Link href="/" className="text-3xl font-bold">
                Logo
              </Link>
              {/* Bu yerga Navigatsiya (Navbar) kiritishingiz mumkin */}
            </header>

            <main className="main min-h-[80vh]">
              {/* Barcha sahifalar (page.jsx) shu yerga tushadi */}
              {children}
            </main>

            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
              <aside className="grid-flow-col items-center">
                {/* SVG... */}
                <p>
                  Copyright © {new Date().getFullYear()} - All right reserved
                </p>
              </aside>
              <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                {/* Social media linklari ham next/link bilan ishlatilishi mumkin */}
              </nav>
            </footer>
          </div>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
