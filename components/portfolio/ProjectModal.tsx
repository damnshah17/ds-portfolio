"use client"

import { AnimatePresence, motion } from "motion/react"
import { ExternalLink, X } from "lucide-react"

import type { Project } from "@/data/projects"
import { ProjectArtifact } from "@/components/portfolio/ProjectArtifact"

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-end bg-black/75 p-3 backdrop-blur-sm sm:items-center sm:justify-center sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.24 }}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[90vh] w-full max-w-5xl overflow-y-auto border border-[#f3f0e8]/15 bg-[#181815] p-6 sm:p-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <div className="flex items-start justify-between gap-8">
              <div>
                <p className="font-mono text-xs text-[#b7ff5d]">
                  {project.number} / {project.type}
                </p>

                <h2
                  id="project-modal-title"
                  className="mt-4 whitespace-pre-line font-serif text-4xl leading-[0.95] tracking-[-0.05em] text-[#f3f0e8] sm:text-6xl"
                >
                  {project.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close project story"
                className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#f3f0e8]/20 text-[#f3f0e8] transition hover:bg-[#f3f0e8] hover:text-[#11110f]"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-10 grid gap-10 border-t border-[#f3f0e8]/15 pt-8 lg:grid-cols-[0.85fr_1.15fr]">
  <ProjectArtifact project={project} />
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#aaa79f]">
                  The problem
                </p>

                <p className="mt-4 text-lg leading-8 text-[#d0ccc2]">
                  {project.problem}
                </p>

                <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-[#aaa79f]">
                  Outcome
                </p>

                <p className="mt-4 text-lg leading-8 text-[#d0ccc2]">
                  {project.outcome}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.stack.map((tool) => (
                    <span
                      key={tool}
                      className="border border-[#f3f0e8]/15 px-3 py-1.5 text-xs text-[#aaa79f]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#aaa79f]">
                  How I approached it
                </p>

                <div className="mt-4 border-l border-[#b7ff5d]">
                  {project.highlights.map((highlight, index) => (
                    <div
                      key={highlight}
                      className="border-b border-[#f3f0e8]/10 px-5 py-5 last:border-b-0"
                    >
                      <p className="font-mono text-xs text-[#b7ff5d]">
                        0{index + 1}
                      </p>
                      <p className="mt-2 leading-7 text-[#d0ccc2]">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 border border-[#f3f0e8]/25 px-4 py-3 text-sm text-[#f3f0e8] transition hover:bg-[#b7ff5d] hover:text-[#11110f]"
                  >
                    View project link
                    <ExternalLink size={15} />
                  </a>
                ) : null}
              </div>
            </div>
            
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}