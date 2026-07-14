"use client"

import { useEffect, useRef } from "react"

type WorkshopSceneProps = {
  onVisible: () => void
}

export function WorkshopScene({ onVisible }: WorkshopSceneProps) {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onVisible()
      },
      { threshold: 0.45 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [onVisible])

  return (
    <section
      ref={sectionRef}
      id="workshop"
      className="border-y border-[#1d2d24]/10 bg-[#e7ddcd] px-6 py-24 md:px-10"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="rounded-[2rem] bg-[#264b3c] p-8 text-[#f4efe7]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c8dfc5]">
            The workshop
          </p>

          <div className="mt-10 space-y-4">
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-sm text-[#c8dfc5]">Current place</p>
              <p className="mt-1 text-lg">M.S. Computer Science</p>
              <p className="text-sm text-[#d9e5d5]">Binghamton University</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-sm text-[#c8dfc5]">What I enjoy</p>
              <p className="mt-1 text-lg">AI, full-stack systems, useful interfaces</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-sm text-[#c8dfc5]">How I work</p>
              <p className="mt-1 text-lg">Curiosity, iteration, and stubborn debugging</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#b36c3f]">
            Stop 01
          </p>

          <h2 className="mt-4 font-serif text-4xl tracking-[-0.04em] text-[#1d2d24] sm:text-5xl">
            Before the projects, a little context.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5c5a54]">
            I am interested in the space between an idea that sounds impressive
            and a system that someone can actually use. That has taken me from
            machine learning projects to full-stack product work, technical
            support, and accessibility-focused experiments.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#6f6a60]">
            The next rooms are not just a project list. Each one shows a
            different kind of problem I wanted to understand and build through.
          </p>
        </div>
      </div>
    </section>
  )
}