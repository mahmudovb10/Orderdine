import { GlobalContextProvider } from "@/context/GlobalContext";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <GlobalContextProvider>
          <div className="main__layout min-h-screen flex flex-col">
            <header className="header bg-base-300 p-4 shadow-md">
              <Link href="#">Dashboard</Link>
            </header>

            <main className="main flex-grow p-4">{children}</main>

            <footer className="footer bg-neutral text-neutral-content p-4 mt-auto">
              <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </footer>
          </div>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
