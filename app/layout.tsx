import Navigations from "./components/Navigations";
import { ReactNode } from "react";
import Logo from "./components/Logo";

import "@/app/styles/globals.css";
export const metadata = { title: "The Wild Oasis" };

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigations />
        </header>
        <main>{children}</main>
        <footer>
          <p>Basir</p>
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
