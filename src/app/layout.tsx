'use client';
import { Geist, Geist_Mono, Sour_Gummy, Unbounded } from "next/font/google";
import "./globals.css";

// components
import Nav from "./components/navigation/nav";
import Footer from "./components/navigation/footer";
import CursorTrail from "./components/CursorTrail";
import { motion } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SourGummy = Sour_Gummy({
  variable: "--font-sour-gummy",
  subsets: ["latin"],
});

const Unbound = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: "400",
});

// export const metadata: Metadata = {
//   title: "dumbass.dog 🐾🦴",
//   description: "Silly programmer nerd, Counter-Strike enthusiast and Monster Ultra fueled dog.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${SourGummy.variable} ${Unbound.variable} antialiased relative`}
      >
        <CursorTrail />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 5 }}
          transition={{ duration: 2 }}
          className="absolute top-0 left-0 w-[40%] max-h-[300px] min-h-[300px] bg-[radial-gradient(ellipse,rgba(255,255,255,0.06)_1%,rgba(0,0,0,0)_60%)] pointer-events-none"
          style={{
            transform: "rotate(200deg) scale(1.5)",
          }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-[1200px] mx-auto font-[family-name:var(--font-geist-sans)] p-10"
        >
          <Nav />
          {children}
          <Footer />
        </motion.div>
      </body>
    </html>
  );
}