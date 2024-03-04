import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "./components/NavigatioBar";
import Footer from "./components/Footer";
import SessionProvider from "./components/SessionProvider";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Historya",
  description:
    "Un proiect realizat pentru concursul Istorie și Societate în Dimensiune Virtuală",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <NavigationBar />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
