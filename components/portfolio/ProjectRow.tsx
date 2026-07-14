"use client"

import { motion } from "motion/react"
import { ArrowDownRight } from "lucide-react"

import type { Project } from "@/data/projects"

type ProjectRowProps = {
  project: Project
  isLast: boolean
  onOpen: (project: Project) => void
}

export function ProjectRow({
  project,
  isLast,
  onOpen,
}: ProjectRowProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className={`group grid gap-8 border-t border-[#f3f0e8]/15 py-10 md:grid-cols-[0.22fr_1fr_0.8fr] md:gap-12 ${
        isLast ? "border-b" : ""
      }`}
    >
      <p className="font-mono text-sm text-[#7e7b74]">{project.number}</p>

      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[#aaa79f]">
          {project.type}
        </p>

        <h3 className="mt-4 whitespace-pre-line font-serif text-4xl leading-[0.95] tracking-[-0.045em] text-[#f3f0e8] transition group-hover:text-[#b7ff5d] sm:text-5xl">
          {project.title}
        </h3>
      </div>

      <div className={`border-l-2 ${project.accent} pl-5`}>
        <p className="leading-7 text-[#b8b4ab]">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.meta.map((item) => (
            <span
              key={item}
              className="border border-[#f3f0e8]/15 px-3 py-1 text-xs text-[#aaa79f]"
            >
              {item}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onOpen(project)}
          className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#f3f0e8] transition hover:text-[#b7ff5d]"
        >
          Read project story
          <ArrowDownRight size={16} />
        </button>
      </div>
    </motion.article>
  )
}