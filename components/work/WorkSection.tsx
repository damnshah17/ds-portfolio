"use client"

import { useState } from "react"

import {
  type ProjectFilter,
  type WorkProject,
} from "@/components/data/work"
import { ProjectDrawer } from "@/components/work/ProjectDrawer"
import { ProjectFilters } from "@/components/work/ProjectFilters"
import { ProjectPortal } from "@/components/work/ProjectPortal"

export function WorkSection() {
  const [selectedProject, setSelectedProject] =
    useState<WorkProject | null>(null)

  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All")

  return (
    <section
      id="work"
      className="bg-[#f7f3e8] px-6 py-28 text-[#0b2f23] lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.55fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#3b7358]">
              02 / Work
            </p>

            <p className="mt-6 max-w-xs text-base leading-7 text-[#4c6d5d]">
              A few projects that explain the kinds of problems I like:
              real-time systems, product workflows, and tools that make
              information easier to use.
            </p>
          </div>

          <h2 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.05em] text-[#0b2f23] sm:text-7xl">
            Things I built, broke, fixed, and learned from.
          </h2>
        </div>

        <div className="mt-12 flex justify-center">
        <ProjectFilters
            activeFilter={activeFilter}
            onChange={setActiveFilter}
        />
        </div>

        <ProjectPortal
          activeFilter={activeFilter}
          onOpen={setSelectedProject}
        />
      </div>

      <ProjectDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}