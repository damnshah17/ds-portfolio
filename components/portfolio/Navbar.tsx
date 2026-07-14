export function Navbar() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
      <a
        href="#top"
        className="font-serif text-xl font-semibold tracking-tight text-[#f3f0e8]"
      >
        Daaman Shah
      </a>

      <div className="hidden items-center gap-7 text-sm text-[#aaa79f] md:flex">
        <a href="#work" className="transition hover:text-white">
          Work
        </a>
        <a href="#about" className="transition hover:text-white">
          About
        </a>
        <a href="#contact" className="transition hover:text-white">
          Contact
        </a>
      </div>

      <a
        href="#contact"
        className="rounded-full border border-[#f3f0e8]/25 px-4 py-2 text-sm text-[#f3f0e8] transition hover:bg-[#f3f0e8] hover:text-[#11110f]"
      >
        Get in touch
      </a>
    </nav>
  )
}