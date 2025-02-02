import Hero from "./components/Hero"
import Main from "./components/Main"

export default function Home() {
  return(
    <div className="flex flex-col gap-20 py-20">
      <Hero />
      <Main />
    </div>
  )
}