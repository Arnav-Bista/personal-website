import type { Metadata } from "next";
import { JetBrains_Mono, Fira_Code } from "next/font/google";
import "@/app/globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "600"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Arnav Bista",
  description: "Things I built.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} ${firaCode.variable}`}>
        {children}
      </body>
    </html>
  );
}
