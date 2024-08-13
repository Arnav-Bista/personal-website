import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import "./background.css";
import NavBar from "./components/navbar";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arnav Bista",
  description: "My Portfolio and Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const titles = ["Home", "Education", "Projects", "Contact Me"];
  const urls = ["/", "/education", "/projects",  "/contact"];

  return (
    <html lang="en">
      <body className={`${firaCode.className}`}>
      <div className="layers">
        <div className="complement"/>
        <div className="highlight"/>
        <div className="third"/>
      </div>
        <NavBar titles={titles} urls={urls} />
        {children}
      </body>
    </html>
  );
}
