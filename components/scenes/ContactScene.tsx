"use client"

import { useEffect, useRef } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Mail } from "lucide-react"

type Props = {
  onVisible: () => void
}

export function ContactScene({ onVisible }: Props) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && onVisible(),
      { threshold: 0.45 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [onVisible])

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#264b3c] px-6 py-24 text-[#f4efe7] md:px-10"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#c8dfc5]">
          Final stop / The next door
        </p>

        <h2 className="mt-5 font-serif text-5xl tracking-[-0.05em] sm:text-6xl">
          Let’s build something useful.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#d8e6d4]">
          I am always interested in good problems, thoughtful software, and
          teams that care about how their work reaches people.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:dshah13@binghamton.edu"
            className="inline-flex items-center gap-2 rounded-full bg-[#f4efe7] px-5 py-3 text-sm font-semibold text-[#264b3c] transition hover:bg-[#ead9bd]"
          >
            <Mail size={16} />
            Email me
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm transition hover:bg-white/10"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm transition hover:bg-white/10"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}