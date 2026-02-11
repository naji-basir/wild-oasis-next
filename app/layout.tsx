import Navigations from "./components/Navigations";
import { ReactNode } from "react";

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <Navigations />
        <main>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
