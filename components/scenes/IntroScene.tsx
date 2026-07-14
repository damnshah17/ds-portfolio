"use client"

import { motion } from "motion/react"

type IntroSceneProps = {
  onEnter: () => void
}

export function IntroScene({ onEnter }: IntroSceneProps) {
  return (
    <section
      id="intro"
      className="relative flex min-h-[88vh] items-center overflow-hidden px-6 py-20 md:px-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(174,195,173,0.65),transparent_32%),radial-gradient(circle_at_10%_80%,rgba(227,177,118,0.28),transparent_30%)]" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium uppercase tracking-[0.24em] text-[#6f6a60]"
          >
            A walk through what I build
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-3xl font-serif text-5xl leading-[0.96] tracking-[-0.04em] text-[#1d2d24] sm:text-7xl"
          >
            I like taking messy ideas and giving them somewhere useful to go.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-7 max-w-xl text-lg leading-8 text-[#5c5a54]"
          >
            I am Daaman Shah, a computer science graduate student building
            software, AI systems, and practical tools around real people.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            href="#workshop"
            onClick={onEnter}
            className="mt-9 inline-flex rounded-full bg-[#264b3c] px-6 py-3 text-sm font-semibold text-[#f4efe7] transition hover:-translate-y-0.5 hover:bg-[#1d2d24]"
          >
            Enter the workshop →
          </motion.a>
        </div>

        <div className="relative mx-auto h-[340px] w-full max-w-md rounded-[2rem] border border-[#1d2d24]/10 bg-[#efe4d2] p-8 shadow-[0_24px_80px_rgba(38,75,60,0.12)]">
          <p className="text-sm font-semibold text-[#264b3c]">The map starts here.</p>

          <div className="relative mt-10 h-48">
            <div className="absolute left-[8%] top-[72%] h-2 w-[78%] rounded-full bg-[#b36c3f]" />
            <div className="absolute left-[28%] top-[45%] h-2 w-[50%] rotate-[-28deg] rounded-full bg-[#b36c3f]" />
            <div className="absolute left-[68%] top-[19%] h-2 w-[28%] rotate-[52deg] rounded-full bg-[#b36c3f]" />

            {[
              { label: "Workshop", left: "18%", top: "61%" },
              { label: "Listening room", left: "47%", top: "37%" },
              { label: "Campus", left: "74%", top: "5%" },
            ].map((stop) => (
              <div
                key={stop.label}
                style={{ left: stop.left, top: stop.top }}
                className="absolute -translate-x-1/2 text-center"
              >
                <div className="mx-auto h-5 w-5 rounded-full border-4 border-[#f4efe7] bg-[#264b3c]" />
                <p className="mt-2 whitespace-nowrap text-xs text-[#5c5a54]">
                  {stop.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}