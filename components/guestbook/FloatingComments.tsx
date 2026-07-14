"use client"

import { motion } from "motion/react"

import type { GuestbookComment } from "@/components/data/comments"

type FloatingCommentsProps = {
  comments: GuestbookComment[]
}

const floatingLayouts = [
  {
    className: "left-[5%] top-[12%]",
    x: [0, 130, 40, 190, 0],
    y: [0, 60, 180, 110, 0],
    rotate: [-3, 4, -2, 3, -3],
    duration: 24,
  },
  {
    className: "right-[6%] top-[14%]",
    x: [0, -150, -60, -210, 0],
    y: [0, 90, 210, 130, 0],
    rotate: [3, -4, 2, -3, 3],
    duration: 27,
  },
  {
    className: "left-[8%] bottom-[16%]",
    x: [0, 170, 90, 240, 0],
    y: [0, -70, -210, -120, 0],
    rotate: [2, -3, 4, -2, 2],
    duration: 29,
  },
  {
    className: "right-[10%] bottom-[12%]",
    x: [0, -180, -80, -250, 0],
    y: [0, -90, -230, -140, 0],
    rotate: [-2, 3, -4, 2, -2],
    duration: 31,
  },
  {
    className: "left-[38%] top-[8%] hidden xl:block",
    x: [0, -80, 120, -140, 0],
    y: [0, 120, 50, 230, 0],
    rotate: [1, -3, 2, -1, 1],
    duration: 33,
  },
]

export function FloatingComments({ comments }: FloatingCommentsProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {comments.map((comment, index) => {
        const layout = floatingLayouts[index % floatingLayouts.length]

        return (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 0.9, scale: 1 }}
            animate={{
              x: layout.x,
              y: layout.y,
              rotate: layout.rotate,
            }}
            viewport={{ once: true }}
            transition={{
              opacity: { duration: 0.35, delay: index * 0.08 },
              scale: { duration: 0.35, delay: index * 0.08 },
              x: {
                duration: layout.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.35,
              },
              y: {
                duration: layout.duration + 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.25,
              },
              rotate: {
                duration: layout.duration + 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className={`absolute ${layout.className}`}
          >
            <div className="max-w-[230px] rounded-[1.5rem] border border-[#d5e8b4]/35 bg-[#062b20]/95 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#d5e8b4] text-lg">
                  {comment.emoji}
                </span>

                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#d5e8b4]">
                  {comment.name}
                </p>
              </div>

              <p className="mt-3 text-sm font-semibold leading-6 text-[#f7f3e8]">
                “{comment.message}”
              </p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}