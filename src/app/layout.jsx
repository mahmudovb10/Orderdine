// src/app/layout.jsx

import { GlobalContextProvider } from "@/context/GlobalContext";
import "./globals.css";

export const metadata = {
  title: "Next.js E-Commerce",
  description: "Firebase Auth va Next.js App Router asosidagi loyiha.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        {/* Global Kontekstni to'liq ilovani o'rab turadi */}
        <GlobalContextProvider>
          {/* Children (Marshrut Guruhlari) bu yerda render qilinadi */}
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  );
}
