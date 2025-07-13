import Hero from "./components/Hero"
import Main from "./components/Main"
import Projects from "./components/Projects"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "dumbass.dog 🐾🦴",
  description: "Silly programmer nerd, Counter-Strike enthusiast and Monster Ultra fueled dog.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://dumbass.dog",
    title: "dumbass.dog 🐾🦴",
    description: "dumb programmer, counter-strike enthusiast and monster ultra fueled dog.",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/96448965",
        width: 400,
        height: 400,
        alt: "dumbass.dog icon",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@femd0g",
    title: "dumbass.dog 🐾🦴",
    description: "dumb programmer, counter-strike enthusiast and monster ultra fueled dog.",
    images: "https://avatars.githubusercontent.com/u/96448965",
  },
};

export const viewport = {
  themeColor: "#0c0c0c",
};

export default function Home() {
  return(
    <div className="flex flex-col gap-12 py-20">
      <Hero />
      <Main />
      <Projects />
    </div>
  )
}