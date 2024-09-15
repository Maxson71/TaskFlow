import type { Metadata } from "next";
import "./globals.css";

import { Inter as FontSans } from "next/font/google";
import {cn} from "@/lib/utils";
import {AppProvider} from "@/app/_providers/app-provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={cn(
              "min-h-screen font-sans antialiased",
              fontSans.variable,
          )}
      >
      <AppProvider>
        {children}
      </AppProvider>
      </body>
    </html>
  );
}
