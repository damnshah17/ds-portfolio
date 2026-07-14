"use client"

import { useEffect, useRef } from "react"

type Props = {
  onVisible: () => void
}

export function CampusScene({ onVisible }: Props) {
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
      id="portal"
      className="bg-[#dce5dc] px-6 py-24 md:px-10"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#b36c3f]">
            Stop 03 / The campus map
          </p>

          <h2 className="mt-4 font-serif text-4xl tracking-[-0.04em] text-[#1d2d24] sm:text-5xl">
            Building paths between students, sponsors, and opportunities.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#5c5a54]">
            I work on a university micro-internship platform where people need
            clear workflows, not more friction.
          </p>

          <p className="mt-5 max-w-xl leading-7 text-[#6f6a60]">
            My work has included student application flows, sponsor project
            workflows, validation feedback, onboarding tours, and visibility
            rules across the product.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[#1d2d24]/10 bg-[#f4efe7] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f6a60]">
            Opportunity route
          </p>

          <div className="mt-7 space-y-3">
            {[
              "Student profile",
              "Project discovery",
              "Application",
              "Sponsor review",
              "Hiring workflow",
            ].map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-4 rounded-2xl border border-[#1d2d24]/10 bg-white/50 p-4"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#264b3c] text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <span className="text-sm font-medium text-[#1d2d24]">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}