"use client"

import { SectionLink } from "@/components/navigation/SectionLink"

import { useEffect, useRef } from "react"
import { ArrowDown, ArrowUpRight, X } from "lucide-react"
import type { WorkProject } from "@/components/data/work"

type ProjectDrawerProps = { project: WorkProject | null; onClose: () => void }

export function ProjectDrawer({ project, onClose }: ProjectDrawerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    if (!project) return
    const dialog = dialogRef.current
    const trigger = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    dialog?.showModal()
    document.body.style.overflow = "hidden"
    return () => {
      dialog?.close()
      document.body.style.overflow = previousOverflow
      trigger?.focus({ preventScroll: true })
    }
  }, [project])

  return (
    <dialog ref={dialogRef} aria-labelledby="project-title" onCancel={(event) => { event.preventDefault(); onClose() }}
      onKeyDown={(event) => {
        if (event.key !== "Tab") return
        const controls = event.currentTarget.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex="0"]')
        const first = controls[0]
        const last = controls[controls.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
      }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose() }}
      className="project-dialog fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none bg-transparent p-0 text-[#0b2f23] backdrop:bg-[#041a13]/80 backdrop:backdrop-blur-sm">
      {project && (
        <div className="ml-auto min-h-full w-full max-w-3xl bg-[#f7f3e8] p-6 shadow-2xl sm:p-10">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-wider text-[#3b7358]">{project.category}{project.collection === "archive" ? ` · ${project.status}` : ""}</p>
              <h2 id="project-title" className="mt-4 break-words font-serif text-4xl leading-tight tracking-tight sm:text-5xl">{project.title}<span className="block text-[#3b7358]">{project.subtitle}</span></h2>
            </div>
            <button type="button" autoFocus onClick={onClose} aria-label="Close project details" className="sticky top-0 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#0b2f23]/25 bg-[#f7f3e8] hover:bg-[#e4ead7]"><X size={20} /></button>
          </div>
          <p className="mt-6 text-lg leading-8">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.githubUrl && <a className="project-link inline-flex items-center gap-2" href={project.githubUrl} target="_blank" rel="noreferrer">Repository <ArrowUpRight size={16} aria-hidden="true" /></a>}
            {project.liveUrl && <a className="project-link inline-flex items-center gap-2" href={project.liveUrl} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={16} aria-hidden="true" /></a>}
            {project.publicationUrl && <a className="project-link inline-flex items-center gap-2" href={project.publicationUrl} target="_blank" rel="noreferrer">Read publication <ArrowUpRight size={16} aria-hidden="true" /></a>}
            {project.relatedExperience && <SectionLink className="project-link inline-flex items-center gap-2" href="#journey" onNavigate={onClose}>Related experience <ArrowDown size={16} aria-hidden="true" /></SectionLink>}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">{project.metrics.map((metric) => <p className="rounded-2xl bg-[#e4ead7] p-4 text-sm font-semibold" key={metric}>{metric}</p>)}</div>
          <div className="mt-10 space-y-8">
            <section><h3 className="project-detail-heading">The idea</h3><p className="mt-3 leading-7">{project.problem}</p></section>
            <section><h3 className="project-detail-heading">How I approached it</h3><div className="mt-3 space-y-4">{project.whatIDid.map((item) => <p key={item} className="leading-7">{item}</p>)}</div></section>
            {project.architecture && <figure className="rounded-2xl bg-[#e4ead7] p-5"><figcaption className="project-detail-heading">Architecture diagram · simulated workcell</figcaption><ol className="mt-4 space-y-3">{project.architecture.map((step, i) => <li key={step} className="rounded-xl bg-[#f7f3e8] p-3 text-sm">{i + 1}. {step}</li>)}</ol></figure>}
            {project.tradeoffs.length > 0 && <section><h3 className="project-detail-heading">The interesting part</h3><div className="mt-3 space-y-4">{project.tradeoffs.map((item) => <p key={item} className="leading-7">{item}</p>)}</div></section>}
            <section><h3 className="project-detail-heading">What came out of it</h3><p className="mt-3 leading-7">{project.outcome}</p></section>
            <section><h3 className="project-detail-heading">Stack</h3><div className="mt-3 flex flex-wrap gap-2">{project.stack.map((tool) => <span className="rounded-full border border-[#0b2f23]/20 px-3 py-1.5 text-sm" key={tool}>{tool}</span>)}</div></section>
          </div>
        </div>
      )}
    </dialog>
  )
}
