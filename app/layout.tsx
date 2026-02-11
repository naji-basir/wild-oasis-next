import Navigations from "./components/Navigations";
import { ReactNode } from "react";

export const metadata = { title: "The Wild Oasis" };

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigations />
        <main>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
