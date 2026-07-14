import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[#f3f0e8]/10 bg-[#b7ff5d] px-6 py-24 text-[#11110f] lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em]">
          Contact
        </p>

        <div className="mt-7 flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <h2 className="max-w-4xl font-serif text-5xl leading-[0.92] tracking-[-0.05em] sm:text-7xl">
            Let’s make something useful.
          </h2>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:dshah13@binghamton.edu"
              className="inline-flex items-center gap-2 border border-[#11110f]/30 px-4 py-3 text-sm font-medium transition hover:bg-[#11110f] hover:text-[#b7ff5d]"
            >
              <Mail size={16} />
              Email
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-[#11110f]/30 px-4 py-3 text-sm font-medium transition hover:bg-[#11110f] hover:text-[#b7ff5d]"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-[#11110f]/30 px-4 py-3 text-sm font-medium transition hover:bg-[#11110f] hover:text-[#b7ff5d]"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}