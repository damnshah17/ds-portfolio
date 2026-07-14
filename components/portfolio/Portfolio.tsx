import { About } from "@/components/portfolio/About"
import { Contact } from "@/components/portfolio/Contact"
import { Hero } from "@/components/portfolio/Hero"
import { Navbar } from "@/components/portfolio/Navbar"
import { ProjectList } from "@/components/portfolio/ProjectList"

export default function Portfolio() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#11110f] text-[#f3f0e8]">
      <Navbar />
      <Hero />
      <ProjectList />
      <About />
      <Contact />
    </main>
  )
}