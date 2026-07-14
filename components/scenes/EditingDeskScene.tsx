"use client"

import { useEffect, useRef } from "react"

type Props = {
  onVisible: () => void
}

export function EditingDeskScene({ onVisible }: Props) {
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
      id="tubescript"
      className="bg-[#f4efe7] px-6 py-24 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#b36c3f]">
          Stop 04 / The editing desk
        </p>

        <div className="mt-5 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-serif text-4xl tracking-[-0.04em] text-[#1d2d24] sm:text-5xl">
              Turning long videos into something people can actually use.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5c5a54]">
              TubeScript is a browser extension concept that turns video
              transcripts into focused summaries through a React frontend and
              Flask-based backend.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#1d2d24]/10 bg-[#efe4d2] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6f6a60]">
              Raw transcript
            </p>

            <div className="mt-4 space-y-2">
              <div className="h-3 w-full rounded bg-[#c7bca9]" />
              <div className="h-3 w-[87%] rounded bg-[#c7bca9]" />
              <div className="h-3 w-[94%] rounded bg-[#c7bca9]" />
              <div className="h-3 w-[71%] rounded bg-[#c7bca9]" />
              <div className="h-3 w-[82%] rounded bg-[#c7bca9]" />
            </div>

            <div className="my-7 border-t border-dashed border-[#1d2d24]/20" />

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#264b3c]">
              Useful summary
            </p>

            <div className="mt-4 rounded-2xl bg-[#264b3c] p-5 text-sm leading-7 text-[#f4efe7]">
              The important ideas, reduced to a clear explanation without
              making the viewer dig through the entire transcript.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}