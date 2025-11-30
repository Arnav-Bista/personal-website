import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import "./background.css";
import NavBar from "../components/navbar";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arnav Bista",
  description: "My Portfolio and Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const titles = ["Home", "Experience", "Education", "Projects", "Contact Me"];
  const urls = ["/", "/experience", "/education", "/projects", "/contact"];

  return (
    <html lang="en">
      <body className={`${jetbrainsMono.className}`}>
        <NavBar titles={titles} urls={urls} />
        {children}
      </body>
    </html>
  );
}
