"use client"

import { motion } from "motion/react"
import { ArrowDownRight } from "lucide-react"

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-center px-6 py-20 lg:px-10"
    >
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-[#b7ff5d]"
      >
        Computer Science / Builder / 2026
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.08 }}
        className="max-w-6xl font-serif text-6xl leading-[0.9] tracking-[-0.055em] sm:text-8xl lg:text-[8rem]"
      >
        I build software for ideas that deserve to become real.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10 grid max-w-4xl gap-8 border-t border-[#f3f0e8]/15 pt-6 md:grid-cols-[1fr_auto]"
      >
        <p className="max-w-xl text-lg leading-8 text-[#b8b4ab]">
          I am a graduate computer science student working across AI,
          full-stack products, and practical systems built around people.
        </p>

        <a
          href="#work"
          className="group flex h-fit items-center gap-2 text-sm font-medium text-[#b7ff5d]"
        >
          Explore selected work
          <ArrowDownRight className="transition group-hover:translate-x-1 group-hover:translate-y-1" />
        </a>
      </motion.div>
    </section>
  )
}