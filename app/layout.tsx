import type { Metadata } from "next";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import { theme as baseTheme } from "./theme";
import Shell from "./layout/shell/shell";

export const metadata: Metadata = {
  title: "My-portifolio",
  description: "Modern portifolio created by nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MantineProvider theme={baseTheme}>
          <Shell>
            <main>{children} </main>
          </Shell>
        </MantineProvider>
      </body>
    </html>
  );
}
