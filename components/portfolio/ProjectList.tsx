"use client"

import { useState } from "react"

import { projects, type Project } from "@/data/projects"
import { ProjectModal } from "@/components/portfolio/ProjectModal"
import { ProjectRow } from "@/components/portfolio/ProjectRow"

export function ProjectList() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section
      id="work"
      className="border-y border-[#f3f0e8]/10 bg-[#181815] px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[0.55fr_1fr]">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#b7ff5d]">
            Selected Work
          </p>

          <h2 className="max-w-3xl font-serif text-5xl leading-[0.95] tracking-[-0.05em] sm:text-6xl">
            Different problems. Different ways of thinking through them.
          </h2>
        </div>

        <div className="mt-20">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.number}
              project={project}
              isLast={index === projects.length - 1}
              onOpen={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}