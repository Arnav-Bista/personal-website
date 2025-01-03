import { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "@/app/globals.css";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Projects',
  description: '...'
}

export default function ConstraintsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.className}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
