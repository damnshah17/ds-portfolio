"use client"

import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"

import type { WorkProject } from "@/components/data/work"

type ProjectCardProps = {
  project: WorkProject
  onOpen: (project: WorkProject) => void
}

const accentClasses = {
  lime: "bg-[#d5e8b4] text-[#0b2f23]",
  gold: "bg-[#e1aa66] text-[#0b2f23]",
  sky: "bg-[#9ad7f5] text-[#0b2f23]",
  pink: "bg-[#f0a6c8] text-[#0b2f23]",
  cream: "bg-[#f7f3e8] text-[#0b2f23]",
}

function ProjectVisual({ type }: { type: WorkProject["visual"] }) {
  if (type === "waveform") {
    const bars = [35, 68, 24, 82, 46, 92, 39, 71, 55, 88, 31, 76]

    return (
      <div className="flex h-28 items-center gap-1">
        {bars.map((height, index) => (
          <motion.span
            key={index}
            animate={{ height: [`${height}%`, `${bars[(index + 4) % bars.length]}%`, `${height}%`] }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1], delay: index * 0.025,}}
            className="w-full rounded-full bg-[#d5e8b4]"
          />
        ))}
      </div>
    )
  }

  if (type === "workflow") {
    return (
      <div className="space-y-2">
        {["Profile", "Apply", "Review", "Hire"].map((step, index) => (
          <div key={step} className="flex items-center gap-3 rounded-2xl bg-white/10 p-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e1aa66] text-xs font-bold text-[#0b2f23]">
              {index + 1}
            </span>
            <span className="text-sm text-[#f7f3e8]">{step}</span>
          </div>
        ))}
      </div>
    )
  }

  if (type === "summary") {
    return (
      <div>
        <div className="space-y-2">
          <div className="h-3 w-full rounded bg-white/25" />
          <div className="h-3 w-[82%] rounded bg-white/25" />
          <div className="h-3 w-[94%] rounded bg-white/25" />
          <div className="h-3 w-[67%] rounded bg-white/25" />
        </div>
        <div className="my-5 border-t border-dashed border-white/25" />
        <div className="rounded-2xl bg-[#9ad7f5] p-4 text-sm font-medium text-[#0b2f23]">
          Important ideas, minus the 40-minute transcript.
        </div>
      </div>
    )
  }

  if (type === "chart") {
    return (
      <div className="flex h-28 items-end gap-3">
        {[45, 70, 52, 88, 61, 94].map((height, index) => (
          <span
            key={index}
            style={{ height: `${height}%` }}
            className="w-full rounded-t-2xl bg-[#f0a6c8]"
          />
        ))}
      </div>
    )
  }

  return (
    <div className="grid h-28 place-items-center rounded-3xl border border-dashed border-white/25">
      <p className="text-center text-sm leading-6 text-[#d5e8b4]">
        Experiment shelf
        <br />
        still under construction
      </p>
    </div>
  )
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="group flex min-h-[540px] flex-col justify-between rounded-[2rem] bg-[#0b2f23] p-6 shadow-[0_25px_70px_rgba(6,43,32,0.16)]"
    >
      <div>
        <div className="flex items-start justify-between gap-5">
          <span className={`rounded-full px-3 py-1 text-xs font-bold ${accentClasses[project.accent]}`}>
            {project.category}
          </span>

          <button
            type="button"
            onClick={() => onOpen(project)}
            aria-label={`Open ${project.title}`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#f7f3e8] transition group-hover:bg-[#d5e8b4] group-hover:text-[#0b2f23]"
          >
            <ArrowUpRight size={18} />
          </button>
        </div>

        <div className="mt-9">
          <ProjectVisual type={project.visual} />
        </div>
      </div>

      <div className="mt-10">
        <h3 className="font-serif text-4xl leading-[0.95] tracking-[-0.05em] text-[#f7f3e8]">
          {project.title}
          <span className="block text-[#8fb49a]">{project.subtitle}</span>
        </h3>

        <p className="mt-5 leading-7 text-[#c6d2c7]">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.metrics.map((metric) => (
            <span
              key={metric}
              className="rounded-full border border-white/15 px-3 py-1 text-xs text-[#b9c8ba]"
            >
              {metric}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}