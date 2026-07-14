"use client"

import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"

import type { WorkProject } from "@/components/data/work"

type PortalProjectCardProps = {
  project: WorkProject
  index: number
  onOpen: (project: WorkProject) => void
}

const accentClasses = {
  lime: "bg-[#d5e8b4] text-[#0b2f23]",
  gold: "bg-[#e1aa66] text-[#0b2f23]",
  sky: "bg-[#9ad7f5] text-[#0b2f23]",
  pink: "bg-[#f0a6c8] text-[#0b2f23]",
  cream: "bg-[#f7f3e8] text-[#0b2f23]",
}

const slotClasses = [
  "lg:col-start-1 lg:row-start-1",
  "lg:col-start-2 lg:row-start-1",
  "lg:col-start-3 lg:row-start-1",
  "lg:col-start-3 lg:row-start-2",
  "lg:col-start-2 lg:row-start-2",
  "lg:col-start-1 lg:row-start-2",
]

export function PortalProjectCard({
  project,
  index,
  onOpen,
}: PortalProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -18, scale: 0.96 }}
      transition={{
        duration: 0.26,
        ease: "easeOut",
        delay: index * 0.045,
      }}
      whileHover={{ y: -6 }}
      className={`group relative min-h-[270px] overflow-hidden rounded-[1.75rem] border border-[#f7f3e8]/12 bg-[#0b2f23] p-5 shadow-[0_20px_55px_rgba(6,43,32,0.16)] ${slotClasses[index]}`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#d5e8b4]/10 blur-3xl" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-bold ${accentClasses[project.accent]}`}
          >
            {project.category}
          </span>

          <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-[#b9c8ba]">
            {project.year}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onOpen(project)}
          aria-label={`Open ${project.title}`}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-[#f7f3e8] transition group-hover:bg-[#d5e8b4] group-hover:text-[#0b2f23]"
        >
          <ArrowUpRight size={18} />
        </button>
      </div>

      <div className="relative mt-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8fb49a]">
          {project.status}
        </p>

        <h3 className="mt-3 font-serif text-3xl leading-[0.95] tracking-[-0.05em] text-[#f7f3e8]">
          {project.title}
          <span className="block text-[#8fb49a]">{project.subtitle}</span>
        </h3>

        <p className="mt-5 line-clamp-3 text-sm leading-6 text-[#c6d2c7]">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-white/15 px-3 py-1 text-xs text-[#b9c8ba]"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}