"use client"

import { AnimatePresence, motion } from "motion/react"
import { X } from "lucide-react"

import type { WorkProject } from "@/components/data/work"

type ProjectDrawerProps = {
  project: WorkProject | null
  onClose: () => void
}

export function ProjectDrawer({ project, onClose }: ProjectDrawerProps) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[70] bg-[#041a13]/75 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 170, damping: 24 }}
            onClick={(event) => event.stopPropagation()}
            className="ml-auto flex h-full w-full max-w-3xl flex-col overflow-y-auto bg-[#f7f3e8] p-6 text-[#0b2f23] shadow-2xl sm:p-10"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3b7358]">
                  {project.category}
                </p>

                <h2 className="mt-4 font-serif text-5xl leading-[0.92] tracking-[-0.055em] sm:text-6xl">
                  {project.title}
                  <span className="block text-[#3b7358]">{project.subtitle}</span>
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close project drawer"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#0b2f23]/20 transition hover:bg-[#0b2f23] hover:text-[#f7f3e8]"
              >
                <X size={19} />
              </button>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <div key={metric} className="rounded-3xl bg-[#e4ead7] p-5">
                  <p className="text-sm font-semibold">{metric}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 space-y-10">
              <section>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3b7358]">
                  Problem
                </p>
                <p className="mt-4 text-lg leading-8">{project.problem}</p>
              </section>

              <section>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3b7358]">
                  What I did
                </p>

                <div className="mt-5 space-y-3">
                  {project.whatIDid.map((item, index) => (
                    <div
                      key={item}
                      className="rounded-3xl border border-[#0b2f23]/10 bg-white/45 p-5"
                    >
                      <p className="font-mono text-xs text-[#3b7358]">
                        0{index + 1}
                      </p>
                      <p className="mt-2 leading-7">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3b7358]">
                  Outcome
                </p>
                <p className="mt-4 text-lg leading-8">{project.outcome}</p>
              </section>

              <section>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3b7358]">
                  Stack
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-[#0b2f23]/20 px-3 py-1.5 text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}