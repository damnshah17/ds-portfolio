"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import {
  type ProjectFilter,
  type WorkProject,
  workProjects,
} from "@/components/data/work"
import { PortalProjectCard } from "@/components/work/PortalProjectCard"

type ProjectPortalProps = {
  activeFilter: ProjectFilter
  onOpen: (project: WorkProject) => void
}

const PAGE_SIZE = 6
const AUTO_ROTATE_MS = 4500

function getFilteredProjects(activeFilter: ProjectFilter) {
  if (activeFilter === "All") {
    return workProjects
  }

  return workProjects.filter((project) => {
    return project.category === activeFilter || project.tags.includes(activeFilter)
  })
}

export function ProjectPortal({ activeFilter, onOpen }: ProjectPortalProps) {
  const portalRef = useRef<HTMLDivElement | null>(null)

  const [page, setPage] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isPortalVisible, setIsPortalVisible] = useState(false)

  const filteredProjects = useMemo(
    () => getFilteredProjects(activeFilter),
    [activeFilter],
  )

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PAGE_SIZE))

  const visibleProjects = useMemo(() => {
    const safePage = Math.min(page, totalPages - 1)
    const start = safePage * PAGE_SIZE

    return filteredProjects.slice(start, start + PAGE_SIZE)
  }, [filteredProjects, page, totalPages])

  useEffect(() => {
    const node = portalRef.current

    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPortalVisible(entry.isIntersecting)
      },
      {
        threshold: 0.25,
      },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    setPage(0)
  }, [activeFilter])

  useEffect(() => {
    if (!isPortalVisible || isPaused || filteredProjects.length <= PAGE_SIZE) {
      return
    }

    const timer = window.setInterval(() => {
      setPage((current) => (current + 1) % totalPages)
    }, AUTO_ROTATE_MS)

    return () => window.clearInterval(timer)
  }, [filteredProjects.length, isPaused, isPortalVisible, totalPages])

  function goNext() {
    setPage((current) => (current + 1) % totalPages)
  }

  function goPrevious() {
    setPage((current) => (current - 1 + totalPages) % totalPages)
  }

  function handleOpen(project: WorkProject) {
    setIsPaused(true)
    onOpen(project)
  }

  const canNavigate = totalPages > 1

  return (
    <div
      ref={portalRef}
      className="mt-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative overflow-hidden rounded-[2.25rem] border border-[#0b2f23]/10 bg-[#e8ecdd] p-4 shadow-[0_25px_70px_rgba(6,43,32,0.1)] sm:p-6">
        <div className="mb-5 flex justify-end gap-2">
          <button
            type="button"
            onClick={goPrevious}
            disabled={!canNavigate}
            aria-label="Previous project set"
            className="grid h-11 w-11 place-items-center rounded-full border border-[#0b2f23]/10 bg-[#f7f3e8] text-[#0b2f23] transition hover:bg-[#0b2f23] hover:text-[#f7f3e8] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft size={19} />
          </button>

          <button
            type="button"
            onClick={goNext}
            disabled={!canNavigate}
            aria-label="Next project set"
            className="grid h-11 w-11 place-items-center rounded-full border border-[#0b2f23]/10 bg-[#f7f3e8] text-[#0b2f23] transition hover:bg-[#0b2f23] hover:text-[#f7f3e8] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight size={19} />
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeFilter}-${page}`}
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.985 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2"
          >
            {visibleProjects.map((project, index) => (
              <PortalProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpen={handleOpen}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}