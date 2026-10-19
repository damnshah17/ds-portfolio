"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
  MapPin,
  Medal,
} from "lucide-react"

import {
  courses,
  journeyItems,
  type JourneyItem,
} from "@/components/data/journey"

type Tab = "journey" | "courses"

const accentStyles = {
  lime: {
    dot: "bg-[#d5e8b4]",
    border: "border-[#d5e8b4]",
    label: "text-[#d5e8b4]",
    pill: "bg-[#d5e8b4] text-[#0b2f23]",
  },
  gold: {
    dot: "bg-[#e1aa66]",
    border: "border-[#e1aa66]",
    label: "text-[#e1aa66]",
    pill: "bg-[#e1aa66] text-[#0b2f23]",
  },
  cream: {
    dot: "bg-[#f7f3e8]",
    border: "border-[#f7f3e8]",
    label: "text-[#f7f3e8]",
    pill: "bg-[#f7f3e8] text-[#0b2f23]",
  },
}

function ItemIcon({ type }: { type: JourneyItem["type"] }) {
  if (type === "education") {
    return <GraduationCap size={16} />
  }

  if (type === "milestone") {
    return <ArrowUpRight size={16} />
  }

  if (type === "leadership") {
    return <Medal size={16} />
  }

  return <BriefcaseBusiness size={16} />
}

function formatType(type: JourneyItem["type"]) {
  if (type === "simulation") return "simulation"
  if (type === "leadership") return "leadership"
  if (type === "education") return "education"
  if (type === "milestone") return "milestone"
  return "experience"
}

export function JourneyTimeline() {
  const [activeTab, setActiveTab] = useState<Tab>("journey")
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  return (
    <section id="journey" className="bg-[#0a3a2b] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.55fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d5e8b4]">
              01 / Journey
            </p>

            <p className="mt-6 max-w-xs text-base leading-7 text-[#b9c8ba]">
              Current work first, then the experiences, projects, courses, and
              leadership roles that shaped how I build.
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.05em] text-[#f7f3e8] sm:text-7xl">
              Experience, projects, and the stuff that actually taught me.
            </h2>

            <div className="mt-10 inline-flex rounded-full border border-[#f7f3e8]/15 bg-[#062b20]/70 p-1">
              <button
                type="button"
                onClick={() => setActiveTab("journey")}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeTab === "journey"
                    ? "bg-[#d5e8b4] text-[#0b2f23]"
                    : "text-[#b9c8ba] hover:text-[#f7f3e8]"
                }`}
              >
                Experience + milestones
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("courses")}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeTab === "courses"
                    ? "bg-[#d5e8b4] text-[#0b2f23]"
                    : "text-[#b9c8ba] hover:text-[#f7f3e8]"
                }`}
              >
                <BookOpen size={15} />
                Courses
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "journey" ? (
            <motion.div
              key="journey"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28 }}
              className="relative mt-16"
            >
              <div className="absolute bottom-0 left-[11px] top-0 w-px bg-[#f7f3e8]/15 md:left-[17px]" />

              <div className="space-y-7">
                {journeyItems.map((item) => {
                  const isExpanded = expandedItem === item.id
                  const accent = accentStyles[item.accent]

                  return (
                    <article key={item.id} className="relative pl-10 md:pl-14">
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedItem((current) =>
                            current === item.id ? null : item.id,
                          )
                        }
                        aria-expanded={isExpanded}
                        className="group w-full text-left"
                      >
                        <span
                          className={`absolute left-0 top-7 h-[23px] w-[23px] rounded-full border-4 border-[#0a3a2b] ${accent.dot} md:h-[35px] md:w-[35px]`}
                        />

                        <div className="rounded-[1.75rem] border border-[#f7f3e8]/12 bg-[#062b20]/45 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#f7f3e8]/25 hover:bg-[#062b20]/75 sm:p-7">
                          <div className="grid gap-7 lg:grid-cols-[1fr_260px]">
                            <div>
                              <div className="flex flex-wrap items-center gap-3">
                                <span
                                  className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${accent.label}`}
                                >
                                  <ItemIcon type={item.type} />
                                  {item.period}
                                </span>

                                <span className="text-xs uppercase tracking-[0.16em] text-[#88a38f]">
                                  {formatType(item.type)}
                                </span>

                                {item.status === "present" ? (
                                  <span className="rounded-full bg-[#d5e8b4] px-3 py-1 text-xs font-semibold text-[#0b2f23]">
                                    Current
                                  </span>
                                ) : null}
                              </div>

                              <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#f7f3e8] sm:text-3xl">
                                {item.title}
                              </h3>

                              <p className="mt-2 max-w-3xl text-sm leading-6 text-[#aebdad]">
                                {item.organization}
                              </p>

                              <p className="mt-5 max-w-3xl leading-7 text-[#c5d1c4]">
                                {item.description}
                              </p>
                            </div>

                            <div className="rounded-[1.25rem] border border-[#f7f3e8]/10 bg-[#0a3a2b]/70 p-4">
                              <div className="space-y-4">
                                <div>
                                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#88a38f]">
                                    <CalendarDays size={14} />
                                    Dates
                                  </div>
                                  <p className="mt-1 text-sm font-medium text-[#f7f3e8]">
                                    {item.period}
                                  </p>
                                </div>

                                <div>
                                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#88a38f]">
                                    <MapPin size={14} />
                                    Location
                                  </div>
                                  <p className="mt-1 text-sm font-medium leading-5 text-[#f7f3e8]">
                                    {item.location}
                                  </p>
                                </div>

                                <div>
                                  <p className="text-xs uppercase tracking-[0.16em] text-[#88a38f]">
                                    Type
                                  </p>
                                  <p className="mt-1 text-sm font-medium leading-5 text-[#f7f3e8]">
                                    {item.mode}
                                  </p>
                                </div>

                                <span className="inline-flex text-sm text-[#d5e8b4]">
                                  {isExpanded ? "Close −" : "Open +"}
                                </span>
                              </div>
                            </div>
                          </div>

                          <AnimatePresence initial={false}>
                            {isExpanded ? (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                              >
                                <div className="mt-6 grid gap-6 border-t border-[#f7f3e8]/10 pt-6 lg:grid-cols-[1fr_300px]">
                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#88a38f]">
                                      What I worked on
                                    </p>

                                    <ul className="mt-4 grid gap-3 text-sm leading-6 text-[#aebdad]">
                                      {item.details.map((detail) => (
                                        <li
                                          key={detail}
                                          className={`border-l-2 ${accent.border} pl-4`}
                                        >
                                          {detail}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#88a38f]">
                                      What I learned
                                    </p>

                                    <p className="mt-4 rounded-2xl border border-[#f7f3e8]/10 bg-[#0a3a2b]/70 p-4 text-sm leading-6 text-[#c5d1c4]">
                                      {item.learned}
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                      {item.skills.map((skill) => (
                                        <span
                                          key={skill}
                                          className="rounded-full border border-[#d5e8b4]/20 px-3 py-1 text-xs text-[#d5e8b4]"
                                        >
                                          {skill}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            ) : null}
                          </AnimatePresence>
                        </div>
                      </button>
                    </article>
                  )
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="courses"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28 }}
              className="mt-16 grid gap-4 md:grid-cols-2"
            >
              {courses.map((course) => (
                <article
                  key={`${course.code}-${course.title}`}
                  className="group rounded-[1.5rem] border border-[#f7f3e8]/12 bg-[#062b20]/45 p-6 transition hover:-translate-y-1 hover:border-[#d5e8b4]/60 hover:bg-[#062b20]/75"
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="rounded-full border border-[#d5e8b4]/30 px-3 py-1 font-mono text-xs text-[#d5e8b4]">
                      {course.code}
                    </span>

                    <span className="text-xs text-[#88a38f]">
                      {course.semester}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-[#f7f3e8]">
                    {course.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#b9c8ba]">
                    {course.note}
                  </p>
                </article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}