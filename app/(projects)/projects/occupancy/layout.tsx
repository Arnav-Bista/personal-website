import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "@/app/globals.css";
import OccupancyNavBar from "./occupancyComponents/occupancyNavBar";
const firaCode = Fira_Code({ subsets: ["latin"] });


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.className}`}>
        <OccupancyNavBar />
        {children}
      </body>
    </html>
  );
}
