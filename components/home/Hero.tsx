"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { ArrowDownRight, Download, Mail, MapPin, Sparkles } from "lucide-react"

const roles = [
  "Software Developer",
  "AI / ML Builder",
  "Full-Stack Engineer",
  "Problem Solver",
  "Professional Overthinker",
  "Anime-Backed Debugger",
]

const currentlyDoing = [
  "building AI, software, and full-stack products",
  "surviving graduate school one assignment at a time",
  "turning strange ideas into working prototypes",
  "trying not to open another tab while debugging",
]

const statusCards = [
  {
    label: "Base",
    value: "Binghamton University, NY",
  },
  {
    label: "Mode",
    value: "AI + software + full-stack",
  },
  {
    label: "Side quest",
    value: "Anime, gym, books, memes",
  },
]

function FloatingMascot() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, rotate: -4 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
        rotate: [-3, 2, -3],
      }}
      transition={{
        opacity: { duration: 0.5, delay: 0.35 },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="pointer-events-none relative mx-auto mb-5 hidden h-36 w-52 lg:block"
    >
      <div className="absolute left-1/2 top-7 h-20 w-24 -translate-x-1/2 rounded-[2rem] border border-[#f7f3e8]/20 bg-[#d5e8b4] shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
        <div className="absolute left-5 top-7 h-3 w-3 rounded-full bg-[#0b2f23]" />
        <div className="absolute right-5 top-7 h-3 w-3 rounded-full bg-[#0b2f23]" />
        <div className="absolute left-1/2 top-12 h-2 w-8 -translate-x-1/2 rounded-full bg-[#0b2f23]/70" />
      </div>

      <motion.div
        animate={{ rotate: [-12, 12, -12] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-8 top-16 h-4 w-12 origin-right rounded-full bg-[#d5e8b4]"
      />

      <motion.div
        animate={{ rotate: [12, -12, 12] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-8 top-16 h-4 w-12 origin-left rounded-full bg-[#d5e8b4]"
      />

      <div className="absolute bottom-4 left-1/2 h-10 w-36 -translate-x-1/2 rounded-full bg-[#0b2f23]/40 blur-xl" />

      <motion.div
        animate={{ opacity: [0.4, 1, 0.4], y: [0, -4, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-2 top-1 rounded-full border border-[#d5e8b4]/30 bg-[#0a382a]/90 px-3 py-1 text-xs font-semibold text-[#d5e8b4]"
      >
        Chello...
      </motion.div>
    </motion.div>
  )
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const roleTimer = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % roles.length)
    }, 2300)

    const currentTimer = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % currentlyDoing.length)
    }, 3800)

    return () => {
      window.clearInterval(roleTimer)
      window.clearInterval(currentTimer)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28 lg:px-10"
    >
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[#d5e8b4]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[32rem] w-[32rem] rounded-full bg-[#7ab690]/10 blur-[140px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#f7f3e8_1px,transparent_1px),linear-gradient(to_bottom,#f7f3e8_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5e8b4]/20 bg-[#0a382a]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d5e8b4]">
              <MapPin size={14} />
              Binghamton University, NY
            </div>

            <p className="text-xl font-medium text-[#f7f3e8] sm:text-2xl">
              Hey, I&apos;m{" "}
              <span className="font-semibold text-[#d5e8b4]">
                Daaman Shah
              </span>
              .
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.08 }}
            className="mt-6 max-w-4xl font-serif text-5xl leading-[0.9] tracking-[-0.06em] text-[#f7f3e8] sm:text-7xl lg:text-[5.8rem]"
          >
            I turn strange ideas
            <span className="block text-[#d5e8b4]">
              into useful software.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.16 }}
            className="mt-6 max-w-2xl text-base leading-7 text-[#b9c8ba] sm:text-lg"
          >
            I&apos;m an MS CS student at Binghamton building across AI, software,
            full-stack products, accessibility ideas, and side quests that
            refuse to leave my brain.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.22 }}
            className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#f7f3e8]/15 pt-5"
          >
            <span className="text-sm text-[#8aa78f]">
              Currently functioning as
            </span>

            <div className="relative h-10 min-w-[260px] overflow-hidden rounded-full border border-[#f7f3e8]/15 bg-[#0a382a]/70 px-4 py-2">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.24 }}
                  className="text-sm font-semibold text-[#f7f3e8]"
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.3 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-[#d5e8b4] px-5 py-3 text-sm font-semibold text-[#0b2f23] transition hover:-translate-y-0.5 hover:bg-[#f7f3e8]"
            >
              Explore my work
              <ArrowDownRight
                size={17}
                className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>

            <a
              href="/resume/Daaman-Shah-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-[#f7f3e8]/20 px-5 py-3 text-sm font-medium text-[#f7f3e8] transition hover:border-[#d5e8b4] hover:bg-white/5"
            >
              <Download size={16} />
              Resume
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#f7f3e8]/20 px-5 py-3 text-sm font-medium text-[#f7f3e8] transition hover:border-[#d5e8b4] hover:bg-white/5"
            >
              <Mail size={16} />
              Let's Connect
            </a>
          </motion.div>
        </div>

        <div>
          <FloatingMascot />

          <motion.aside
            initial={{ opacity: 0, y: 26, rotate: 1.5 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.72, delay: 0.24 }}
            className="relative rounded-[2rem] border border-[#f7f3e8]/15 bg-[#0a382a]/85 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.2)] backdrop-blur-sm sm:p-7"
          >
            <div className="absolute -right-4 -top-4 rotate-6 rounded-2xl bg-[#d5e8b4] px-4 py-3 text-sm font-bold text-[#0b2f23] shadow-xl">
              Building...
            </div>

            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-[#d5e8b4]" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d5e8b4]">
                The quick version
              </p>
            </div>

            <div className="mt-6 grid gap-3">
              {statusCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-3xl border border-[#f7f3e8]/10 bg-[#062b20]/60 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-[#8aa78f]">
                    {card.label}
                  </p>
                  <p className="mt-2 text-lg leading-7 text-[#f7f3e8]">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-3xl border border-[#d5e8b4]/20 bg-[#d5e8b4]/10 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-[#8aa78f]">
                Currently
              </p>

              <AnimatePresence mode="wait">
                <motion.p
                  key={currentlyDoing[currentIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.24 }}
                  className="mt-2 min-h-12 text-sm leading-6 text-[#d5e8b4]"
                >
                  {currentlyDoing[currentIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}