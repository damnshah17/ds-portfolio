"use client"

import { motion } from "motion/react"

import type { Project } from "@/data/projects"

type ProjectArtifactProps = {
  project: Project
}

export function ProjectArtifact({ project }: ProjectArtifactProps) {
  if (project.number === "01") {
    const bars = [32, 55, 24, 72, 46, 88, 38, 62, 30, 79, 53, 94, 44, 66, 35]

    return (
      <div className="relative overflow-hidden border border-[#f3f0e8]/15 bg-[#10100e] p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#aaa79f]">
          Live audio fragment
        </p>

        <div className="mt-8 flex h-36 items-center gap-1">
          {bars.map((height, index) => (
            <motion.span
              key={index}
              animate={{
                height: [`${height}%`, `${bars[(index + 5) % bars.length]}%`, `${height}%`],
              }}
              transition={{
                duration: 1.7 + index * 0.05,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full bg-[#b7ff5d]"
            />
          ))}
        </div>

        <div className="mt-7 space-y-2 font-mono text-xs">
          <p className="border-l-2 border-[#b7ff5d] pl-3 text-[#d0ccc2]">
            speaker_03 — “processing spoken input…”
          </p>
          <p className="border-l-2 border-[#f0b35e] pl-3 text-[#d0ccc2]">
            speaker_06 — “…while identifying the voice.”
          </p>
        </div>
      </div>
    )
  }

  if (project.number === "02") {
    const steps = [
      "Student profile",
      "Find opportunities",
      "Apply",
      "Sponsor review",
      "Hiring",
    ]

    return (
      <div className="border border-[#f3f0e8]/15 bg-[#161613] p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#aaa79f]">
          Opportunity workflow
        </p>

        <div className="mt-7 space-y-3">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              className="flex items-center gap-4 border border-[#f3f0e8]/10 px-4 py-3"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f0b35e] font-mono text-xs text-[#11110f]">
                {index + 1}
              </span>
              <span className="text-sm text-[#e4e0d8]">{step}</span>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="border border-[#f3f0e8]/15 bg-[#151719] p-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#aaa79f]">
        Transcript compression
      </p>

      <div className="mt-7">
        <p className="text-xs uppercase tracking-[0.15em] text-[#aaa79f]">
          Raw video transcript
        </p>

        <div className="mt-4 space-y-2">
          <div className="h-3 w-full bg-[#4a4a45]" />
          <div className="h-3 w-[88%] bg-[#4a4a45]" />
          <div className="h-3 w-[95%] bg-[#4a4a45]" />
          <div className="h-3 w-[72%] bg-[#4a4a45]" />
          <div className="h-3 w-[82%] bg-[#4a4a45]" />
        </div>

        <div className="my-7 border-t border-dashed border-[#f3f0e8]/20" />

        <p className="text-xs uppercase tracking-[0.15em] text-sky-300">
          Useful summary
        </p>

        <div className="mt-4 border-l-2 border-sky-300 bg-[#1c2529] p-4 text-sm leading-7 text-[#d9e5e7]">
          A clear explanation of the important ideas, without forcing someone
          to dig through an entire video transcript.
        </div>
      </div>
    </div>
  )
}