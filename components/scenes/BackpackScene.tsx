"use client"

import { useEffect, useRef } from "react"

type Props = {
  onVisible: () => void
}

const toolGroups = [
  {
    title: "AI / ML",
    tools: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Hugging Face"],
  },
  {
    title: "Full-stack",
    tools: ["Next.js", "React", "TypeScript", "Node.js", "Flask"],
  },
  {
    title: "Systems",
    tools: ["SQL", "Docker", "Git", "Linux", "Firebase"],
  },
]

export function BackpackScene({ onVisible }: Props) {
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
      id="toolkit"
      className="bg-[#ead9bd] px-6 py-24 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#b36c3f]">
          Stop 05 / The backpack
        </p>

        <h2 className="mt-4 max-w-3xl font-serif text-4xl tracking-[-0.04em] text-[#1d2d24] sm:text-5xl">
          Tools matter most when they have already helped you build something.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {toolGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[1.75rem] border border-[#1d2d24]/10 bg-[#f4efe7]/80 p-6"
            >
              <h3 className="font-serif text-2xl text-[#1d2d24]">{group.title}</h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-[#264b3c]/20 px-3 py-1.5 text-sm text-[#264b3c]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}