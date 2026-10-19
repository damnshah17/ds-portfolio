"use client"

import { motion } from "motion/react"

import { projectFilters, type ProjectFilter } from "@/components/data/work"

type ProjectFiltersProps = {
  activeFilter: ProjectFilter
  onChange: (filter: ProjectFilter) => void
}

export function ProjectFilters({ activeFilter, onChange }: ProjectFiltersProps) {
  return (
  <div className="max-w-full" role="group" aria-label="Filter projects by category">
    <div className="flex flex-wrap justify-center gap-2 rounded-3xl border border-[#0b2f23]/10 bg-[#e5ead9] p-2">
        {projectFilters.map((filter) => {
          const isActive = activeFilter === filter

          return (
            <button
              key={filter}
              type="button"
              aria-pressed={isActive}
              onClick={() => onChange(filter)}
              className={`relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition md:px-5 ${
                isActive
                  ? "text-[#f7f3e8]"
                  : "text-[#315d47] hover:text-[#0b2f23]"
              }`}
            >
              {isActive ? (
                <motion.span
                  layoutId="project-filter-pill"
                  className="absolute inset-0 rounded-full bg-[#0b2f23]"
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 30,
                  }}
                />
              ) : null}

              <span className="relative z-10">{filter}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
