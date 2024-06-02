import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MenuBoard from "@/app/components/menu";
import "./layout.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CODEFLIX",
  description: "projeto CODEFLIX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <MenuBoard></MenuBoard>
        {children}
      </body>
    </html>
  );
}
