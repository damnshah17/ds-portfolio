"use client"

import { type ProjectFilter, type WorkProject, workProjects } from "@/components/data/work"
import { PortalProjectCard } from "@/components/work/PortalProjectCard"
import { ArrowUpRight } from "lucide-react"

type ProjectPortalProps = {
  activeFilter: ProjectFilter
  onOpen: (project: WorkProject) => void
}

export function ProjectPortal({ activeFilter, onOpen }: ProjectPortalProps) {
  const matches = (project: WorkProject) => activeFilter === "All" ||
    project.category === activeFilter || project.tags.includes(activeFilter)
  const featured = workProjects.filter((p) => (p.collection === "featured" || p.collection === "systems") && matches(p))
  const archive = workProjects.filter((p) => p.collection === "archive" && matches(p))

  return (
    <div className="mt-10 space-y-12">
      <p className="sr-only" role="status">{featured.length + archive.length} projects match {activeFilter}.</p>
      {featured.length > 0 && (
        <section aria-labelledby="featured-heading">
          <h3 id="featured-heading" className="mb-5 text-xl font-semibold">Featured Work</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, index) => <PortalProjectCard key={project.id} project={project} index={index} onOpen={onOpen} />)}
          </div>
        </section>
      )}
      {archive.length > 0 && (
        <details className="rounded-3xl border border-[#0b2f23]/20 bg-[#e8ecdd] p-5 sm:p-7">
          <summary className="cursor-pointer text-xl font-semibold">More projects & archive <span className="text-sm font-normal">({archive.length})</span></summary>
          <p className="my-5 text-[#4c6d5d]">Earlier experiments, learning projects, and training. Each entry keeps its original scope visible.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {archive.map((project) => (
              <button type="button" key={project.id} onClick={() => onOpen(project)} aria-haspopup="dialog" className="rounded-2xl border border-[#0b2f23]/15 bg-[#f7f3e8] p-5 text-left transition hover:border-[#3b7358]">
                <span className="text-xs uppercase tracking-wider text-[#3b7358]">{project.status}</span>
                <h4 className="mt-2 text-lg font-semibold">{project.title} — {project.subtitle}</h4>
                <p className="mt-2 text-sm leading-6 text-[#4c6d5d]">{project.description}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold">View details <ArrowUpRight size={16} aria-hidden="true" /></span>
              </button>
            ))}
          </div>
        </details>
      )}
    </div>
  )
}
