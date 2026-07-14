"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

import { sectionMoods } from "@/components/data/sectionMoods"

export function SectionMoodWidget() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const sections = sectionMoods
      .map((section) => document.getElementById(section.id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)

        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries.sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio,
          )[0]

          setActiveSection(mostVisible.target.id)
        }
      },
      {
        threshold: [0.25, 0.45, 0.65],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const currentMood =
    sectionMoods.find((section) => section.id === activeSection) ??
    sectionMoods[0]

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-40 hidden max-w-xs md:block">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMood.id}
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="rounded-[1.5rem] border border-[#f7f3e8]/15 bg-[#0b3528]/85 p-4 text-[#f7f3e8] shadow-[0_12px_35px_rgba(0,0,0,0.18)] backdrop-blur-xl"
        >
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#d5e8b4]" />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d5e8b4]">
              {currentMood.label}
            </p>
          </div>

          <p className="mt-3 text-sm font-semibold">{currentMood.mood}</p>

          <p className="mt-2 text-xs leading-5 text-[#b9c8ba]">
            {currentMood.line}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}