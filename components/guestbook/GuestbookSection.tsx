"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

import { guestbookComments } from "@/components/data/comments"
import type { GuestbookComment } from "@/components/data/comments"
import { FloatingComments } from "@/components/guestbook/FloatingComments"
import { GuestbookForm } from "@/components/guestbook/GuestbookForm"

function FeaturedCommentReel({ comment }: { comment: GuestbookComment }) {
  return (
    <div className="relative h-[240px] overflow-hidden rounded-[2rem] border border-[#d5e8b4]/25 bg-[#0b2f23] p-5 text-[#f7f3e8] shadow-[0_25px_70px_rgba(0,0,0,0.22)]">
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#d5e8b4]/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-[#9ad7f5]/20 blur-3xl" />

      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d5e8b4]">
            Wall reel
          </p>
          <p className="mt-1 text-xs font-semibold text-[#c6d2c7]">
            one note gets the spotlight
          </p>
        </div>

        <div className="rounded-full bg-[#d5e8b4] px-3 py-1 text-xs font-bold text-[#0b2f23]">
          passed vibe check
        </div>
      </div>

      <div className="relative mt-4 h-[150px] overflow-hidden rounded-[1.5rem] border border-[#0b2f23]/10 bg-[#f7f3e8] p-5 text-[#0b2f23] shadow-[inset_0_0_0_1px_rgba(11,47,35,0.08)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 45, rotate: -1.5, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, y: -45, rotate: 1.5, scale: 0.97 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            className="h-full"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#d5e8b4] text-xl">
                  {comment.emoji}
                </span>

                <div className="min-w-0">
                  <p className="truncate text-xs font-black uppercase tracking-[0.14em] text-[#0b2f23]">
                    {comment.name}
                  </p>
                  <p className="mt-0.5 text-xs font-semibold text-[#3b7358]">
                    note #{comment.id}
                  </p>
                </div>
              </div>

              <span className="shrink-0 rounded-full bg-[#0b2f23] px-3 py-1 text-xs font-bold text-[#d5e8b4]">
                pinned
              </span>
            </div>

            <p className="mt-5 line-clamp-2 font-serif text-3xl leading-[1.02] tracking-[-0.05em] text-[#0b2f23]">
              “{comment.message}”
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export function GuestbookSection() {
  const [activeCommentIndex, setActiveCommentIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveCommentIndex((current) => {
        return (current + 1) % guestbookComments.length
      })
    }, 4500)

    return () => window.clearInterval(timer)
  }, [])

  const activeComment = guestbookComments[activeCommentIndex]

  return (
    <section
      id="guestbook"
      className="relative overflow-hidden bg-[#174b38] px-6 py-28 lg:px-10"
    >
      <FloatingComments comments={guestbookComments} />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,rgba(23,75,56,0.08),rgba(23,75,56,0.68)_74%)]" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
        <div className="flex h-full flex-col justify-center rounded-[2.25rem] bg-[#174b38]/45 p-2 backdrop-blur-[2px]">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d5e8b4]">
            04 / Guestbook
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.05em] text-[#f7f3e8] sm:text-7xl">
            Leave a note before you go.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[#c6d2c7]">
            A small wall for quick notes, reactions, recommendations, and
            friendly chaos. For anything professional, jump to contact.
          </p>

            <div className="mt-8 max-w-xl">
                <FeaturedCommentReel comment={activeComment} />
            </div>
        </div>

        <div className="flex h-full">
          <GuestbookForm />
        </div>
      </div>
    </section>
  )
}