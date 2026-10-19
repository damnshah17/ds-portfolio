"use client"

import { SectionLink } from "@/components/navigation/SectionLink"

import { type FormEvent, useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Check, Circle, Plus, Send } from "lucide-react"

import {
  animePicks,
  hobbyPicks,
  karateMoments,
  shelfPicks,
  sideQuestItems,
  starterRecommendations,
  type AnimePick,
  type ShelfCategory,
  type ShelfPick,
  type SideQuestItem,
} from "@/components/data/sideQuests"

const accentStyles = {
  green: {
    card: "bg-[#0b2f23] text-[#f7f3e8]",
    chip: "bg-[#d5e8b4] text-[#0b2f23]",
    glow: "bg-[#d5e8b4]/30",
  },
  cream: {
    card: "bg-[#f7f3e8] text-[#0b2f23]",
    chip: "bg-[#0b2f23] text-[#f7f3e8]",
    glow: "bg-[#f7f3e8]/50",
  },
  gold: {
    card: "bg-[#e1aa66] text-[#0b2f23]",
    chip: "bg-[#0b2f23] text-[#f7f3e8]",
    glow: "bg-[#e1aa66]/40",
  },
  pink: {
    card: "bg-[#f0a6c8] text-[#0b2f23]",
    chip: "bg-[#0b2f23] text-[#f7f3e8]",
    glow: "bg-[#f0a6c8]/40",
  },
  archive: {
    card: "bg-[#d8cfbf] text-[#0b2f23]",
    chip: "bg-[#31473b] text-[#f7f3e8]",
    glow: "bg-[#d8cfbf]/45",
  },
}

const stackPositions = [
  "md:left-[5%] md:top-[7%] md:rotate-[-7deg] md:z-10",
  "md:left-[52%] md:top-[19%] md:rotate-[7deg] md:z-20",
  "md:left-[6%] md:top-[36%] md:rotate-[7deg] md:z-10",
  "md:left-[52%] md:top-[48%] md:rotate-[-7deg] md:z-20",
  "md:left-[6%] md:top-[64%] md:rotate-[-7deg] md:z-10",
]

function SideQuestCard({
  item,
  isSelected,
  onSelect,
  index,
}: {
  item: SideQuestItem
  isSelected: boolean
  onSelect: (item: SideQuestItem) => void
  index: number
}) {
  const accent = accentStyles[item.accent]
  const stackPosition = stackPositions[index % stackPositions.length]

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(item)}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.22, delay: index * 0.05 }}
      whileHover={{
        y: -8,
        rotate: 0,
        scale: 1.025,
      }}
      className={`group relative min-h-[145px] overflow-hidden rounded-[1.45rem] border p-5 text-left shadow-[0_16px_38px_rgba(6,43,32,0.13)] transition md:absolute md:h-[155px] md:w-[285px] ${stackPosition} ${
        accent.card
      } ${
        isSelected
          ? "border-[#0b2f23]/35 ring-4 ring-[#0b2f23]/15 md:z-40"
          : "border-[#0b2f23]/10 hover:md:z-50"
      }`}
    >
      <div
        className={`pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full blur-2xl ${accent.glow}`}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div className="text-2xl">{item.emoji}</div>

        <span
          className={`rounded-full px-3 py-1 text-[11px] font-bold ${accent.chip}`}
        >
          {item.label}
        </span>
      </div>

      <h3 className="relative mt-4 font-serif text-[1.9rem] leading-none tracking-[-0.05em]">
        {item.title}
      </h3>

      <p className="relative mt-3 line-clamp-2 max-w-[92%] text-xs leading-5 opacity-80">
        {item.short}
      </p>

      <div className="absolute bottom-4 right-4 h-2.5 w-2.5 rounded-full bg-current opacity-25 transition group-hover:scale-[2.2]" />
    </motion.button>
  )
}

function HobbiesScreen() {
  const [activeHobby, setActiveHobby] = useState(0)
  const hobby = hobbyPicks[activeHobby]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHobby((current) => (current + 1) % hobbyPicks.length)
    }, 3600)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#f7f3e8] p-5 text-[#0b2f23]">
        <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#d5e8b4]/70 blur-3xl" />

        <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-[#3b7358]">
          My hobbies
        </p>

        <h4 className="relative mt-3 font-serif text-4xl leading-none tracking-[-0.05em]">
          Outside the build queue.
        </h4>
      </div>

      <div className="overflow-hidden rounded-[2rem] bg-[#0b2f23] p-5 text-[#f7f3e8]">
        <AnimatePresence mode="wait">
          <motion.div
            key={hobby.title}
            initial={{ opacity: 0, y: 55, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: -55, rotate: 3 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="min-h-[250px] rounded-[1.7rem] bg-[#d5e8b4] p-6 text-[#0b2f23]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-3xl bg-[#0b2f23] text-4xl">
                {hobby.emoji}
              </div>

              <span className="rounded-full bg-[#0b2f23] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#d5e8b4]">
                {hobby.status}
              </span>
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#3b7358]">
              {hobby.category}
            </p>

            <h5 className="mt-2 font-serif text-5xl leading-none tracking-[-0.05em]">
              {hobby.title}
            </h5>

            <p className="mt-5 text-sm font-semibold leading-7 text-[#254333]">
              {hobby.line}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {hobbyPicks.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setActiveHobby(index)}
            className={`rounded-2xl border p-3 text-xl transition ${
              activeHobby === index
                ? "border-[#0b2f23] bg-[#0b2f23] text-[#d5e8b4]"
                : "border-[#0b2f23]/10 bg-[#f7f3e8] text-[#0b2f23] hover:bg-[#eef3d7]"
            }`}
            aria-label={`Show ${item.title}`}
          >
            {item.emoji}
          </button>
        ))}
      </div>
    </div>
  )
}

function AnimeCover({ anime }: { anime: AnimePick }) {
  return (
    <div className="relative aspect-[2/3] overflow-hidden rounded-[1.2rem] bg-[#0b2f23] shadow-[0_14px_30px_rgba(6,43,32,0.2)]">
      <div className="absolute inset-0 grid place-items-center text-4xl text-[#d5e8b4]">
        🍥
      </div>

      {anime.image ? (
        <img
          src={anime.image}
          alt=""
          onError={(event) => {
            event.currentTarget.style.display = "none"
          }}
          className="relative h-full w-full object-cover"
        />
      ) : null}

      <div className="absolute inset-0 bg-gradient-to-t from-[#062b20]/85 via-[#062b20]/10 to-transparent" />

      <div className="absolute bottom-2 left-2 right-2">
        <p className="line-clamp-2 text-xs font-black leading-tight text-[#f7f3e8]">
          {anime.title}
        </p>
      </div>

      <div
        className={`absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full ${
          anime.watched
            ? "bg-[#d5e8b4] text-[#0b2f23]"
            : "bg-[#f7f3e8]/85 text-[#0b2f23]/55"
        }`}
      >
        {anime.watched ? <Check size={15} /> : <Circle size={13} />}
      </div>
    </div>
  )
}

function AnimeScreen() {
  const watchedCount = animePicks.filter((anime) => anime.watched).length
  const progress = Math.round((watchedCount / animePicks.length) * 100)
  const featuredAnime =
    animePicks.find((anime) => anime.title === "One Piece") ?? animePicks[0]

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#0b2f23] p-5 text-[#f7f3e8]">
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#d5e8b4]/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-14 h-40 w-40 rounded-full bg-[#9ad7f5]/20 blur-3xl" />

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d5e8b4]">
              Anime watchlist
            </p>

            <h4 className="mt-3 font-serif text-4xl leading-none tracking-[-0.05em]">
              Poster wall.
            </h4>
          </div>

          <div className="rounded-full bg-[#d5e8b4] px-3 py-1 text-xs font-bold text-[#0b2f23]">
            {watchedCount}/{animePicks.length}
          </div>
        </div>

        <div className="relative mt-5 grid grid-cols-[112px_1fr] gap-4 overflow-hidden rounded-[1.5rem] border border-[#d5e8b4]/15 bg-[#062b20] p-4">
          <AnimeCover anime={featuredAnime} />

          <div className="min-w-0 self-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8aa78f]">
              featured bias
            </p>

            <p className="mt-2 text-2xl font-black leading-tight">
              {featuredAnime.title}
            </p>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#f7f3e8]/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="h-full rounded-full bg-[#d5e8b4]"
              />
            </div>

            <p className="mt-2 text-xs font-semibold text-[#c6d2c7]">
              {progress}% watched from this curated wall.
            </p>
          </div>
        </div>

        <SectionLink
          href="#side-quest-suggestions"
          className="relative mt-5 inline-flex items-center gap-2 rounded-full bg-[#d5e8b4] px-4 py-2 text-xs font-bold text-[#0b2f23] transition hover:bg-[#f7f3e8]"
        >
          <Plus size={14} />
          Suggest something new ↓
        </SectionLink>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {animePicks.map((anime, index) => (
          <motion.div
            key={anime.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.18, delay: index * 0.01 }}
          >
            <AnimeCover anime={anime} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function ShelfImage({ item }: { item: ShelfPick }) {
  return (
    <div className="relative aspect-[2/3] overflow-hidden rounded-[1.4rem] bg-[#0b2f23]">
      <div className="absolute inset-0 grid place-items-center text-5xl">
        {item.emoji}
      </div>

      {item.image ? (
        <img
          src={item.image}
          alt=""
          onError={(event) => {
            event.currentTarget.style.display = "none"
          }}
          className="relative h-full w-full object-contain p-2"
        />
      ) : null}

      <div className="absolute inset-0 bg-gradient-to-t from-[#0b2f23]/35 to-transparent" />
    </div>
  )
}

function DrawerShowcase({
  items,
  category,
  title,
  description,
}: {
  items: ShelfPick[]
  category: ShelfCategory
  title: string
  description: string
}) {
  const [activeItem, setActiveItem] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveItem((current) => (current + 1) % items.length)
    }, 3300)

    return () => window.clearInterval(timer)
  }, [items.length])

  const item = items[activeItem]

  return (
    <div className="overflow-hidden rounded-[2rem] bg-[#f7f3e8]/80 p-4 text-[#0b2f23]">
      <div className="mb-4">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#9a4a6b]">
          {category}
        </p>

        <h5 className="mt-2 font-serif text-4xl leading-none tracking-[-0.05em]">
          {title}
        </h5>

        <p className="mt-3 text-sm font-semibold leading-6 text-[#315d47]">
          {description}
        </p>
      </div>

      <div className="relative overflow-hidden rounded-[1.8rem] bg-[#0b2f23] p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: 90, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            exit={{ opacity: 0, x: -90, rotate: -2 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            className="rounded-[1.5rem] bg-[#f7f3e8] p-3 text-[#0b2f23]"
          >
            <ShelfImage item={item} />

            <div className="mt-4 flex items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#9a4a6b]">
                  {item.status}
                </p>

                <h6 className="mt-1 font-serif text-3xl leading-none tracking-[-0.05em]">
                  {item.title}
                </h6>
              </div>

              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-[#f0a6c8] text-xl">
                {item.emoji}
              </div>
            </div>

            <p className="mt-3 text-sm font-semibold leading-6 text-[#315d47]">
              {item.line}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-4 flex justify-center gap-2">
          {items.map((drawerItem, index) => (
            <button
              key={drawerItem.title}
              type="button"
              onClick={() => setActiveItem(index)}
              aria-label={`Show ${drawerItem.title}`}
              className={`h-2 rounded-full transition ${
                activeItem === index
                  ? "w-8 bg-[#f0a6c8]"
                  : "w-2 bg-[#f7f3e8]/45"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function CubeList({ items }: { items: ShelfPick[] }) {
  return (
    <div className="rounded-[2rem] bg-[#f7f3e8]/80 p-4 text-[#0b2f23]">
      <div className="mb-4">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#9a4a6b]">
          Cubes
        </p>

        <h5 className="mt-2 font-serif text-4xl leading-none tracking-[-0.05em]">
          Cube corner.
        </h5>

        <p className="mt-3 text-sm font-semibold leading-6 text-[#315d47]">
          Just a tiny list of cubes I can solve.
        </p>
      </div>

      <div className="grid gap-2">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.18, delay: index * 0.04 }}
            className="flex items-center gap-3 rounded-[1.25rem] border border-[#0b2f23]/10 bg-[#f7f3e8] p-3 text-[#0b2f23] shadow-[0_10px_24px_rgba(6,43,32,0.06)]"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#f0a6c8] text-2xl">
              {item.emoji}
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-sm font-black">{item.title}</p>

              <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#9a4a6b]">
                {item.status}
              </p>

              <p className="mt-2 text-xs font-semibold leading-5 text-[#315d47]">
                {item.line}
              </p>
            </div>

            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#0b2f23] text-[#d5e8b4]">
              <Check size={15} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function ShelfScreen() {
  const books = shelfPicks.filter((item) => item.category === "Books")
  const sketches = shelfPicks.filter((item) => item.category === "Sketches")
  const cubes = shelfPicks.filter((item) => item.category === "Cubes")

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#f0a6c8] p-5 text-[#0b2f23]">
        <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#f7f3e8]/45 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-[#0b2f23]/10 blur-3xl" />

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em]">
              Shelf stream
            </p>

            <h4 className="mt-4 font-serif text-5xl leading-none tracking-[-0.05em]">
              Tiny offline archive.
            </h4>
          </div>

          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#0b2f23] text-3xl">
            🗂️
          </div>
        </div>

        <p className="relative mt-5 text-sm font-semibold leading-7 text-[#254333]">
          Books I read, sketches I made, and cubes I can solve, small things
          that belong somewhere outside the resume.
        </p>

        <div className="relative mt-5 grid grid-cols-3 gap-2">
          {(["Books", "Sketches", "Cubes"] as ShelfCategory[]).map(
            (category) => (
              <div
                key={category}
                className="rounded-2xl bg-[#f7f3e8]/85 px-3 py-3 text-center shadow-[0_10px_24px_rgba(6,43,32,0.08)]"
              >
                <p className="text-lg font-black">
                  {
                    shelfPicks.filter((item) => item.category === category)
                      .length
                  }
                </p>

                <p className="mt-1 text-[10px] font-black uppercase tracking-[0.12em] text-[#9a4a6b]">
                  {category}
                </p>
              </div>
            ),
          )}
        </div>
      </div>

      <DrawerShowcase
        category="Books"
        items={books}
        title="Book drawers."
        description="Three book drawers: finished reads and the current reading boss fight."
      />

      <DrawerShowcase
        category="Sketches"
        items={sketches}
        title="Sketch drawers."
        description="Two sketch drawers, rotating sideways like a small visual archive."
      />

      <CubeList items={cubes} />

      <div className="rounded-[2rem] bg-[#0b2f23] p-5 text-[#f7f3e8]">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d5e8b4]">
          Next dare
        </p>

        <h4 className="mt-3 font-serif text-4xl leading-none tracking-[-0.05em]">
          Send me a side quest.
        </h4>

        <p className="mt-4 text-sm font-semibold leading-7 text-[#c6d2c7]">
          Dare me a sketch, suggest a book, throw a cube challenge, recommend an
          anime, or drop a random hobby that sounds mildly unreasonable.
        </p>

        <SectionLink
          href="#side-quest-suggestions"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#d5e8b4] px-4 py-2 text-xs font-bold text-[#0b2f23] transition hover:bg-[#f7f3e8]"
        >
          <Plus size={14} />
          Go to suggestions
        </SectionLink>
      </div>
    </div>
  )
}

function KarateScreen() {
  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#e1aa66] p-5 text-[#0b2f23]">
        <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#f7f3e8]/45 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-[#0b2f23]/10 blur-3xl" />

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#5c3c13]">
              Training log
            </p>

            <h4 className="mt-4 font-serif text-5xl leading-none tracking-[-0.05em]">
              13+ years, one black belt, many repetitions.
            </h4>
          </div>

          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#0b2f23] text-3xl">
            🥋
          </div>
        </div>

        <p className="relative mt-5 text-sm font-semibold leading-7 text-[#254333]">
          A journey through the part of my life that taught me discipline,
          patience, leadership, and showing up consistently.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] bg-[#f7f3e8] p-5 text-[#0b2f23]">
        <div className="pointer-events-none absolute -right-20 top-20 h-44 w-44 rounded-full bg-[#d5e8b4]/55 blur-3xl" />

        <div className="relative mb-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#3b7358]">
            Journey path
          </p>

          <h5 className="mt-2 font-serif text-4xl leading-none tracking-[-0.05em]">
            From student to mentor.
          </h5>
        </div>

        <div className="relative">
          <div className="absolute bottom-4 left-[1.05rem] top-4 w-px bg-[#0b2f23]/15" />

          <div className="space-y-3">
            {karateMoments.map((moment, index) => (
              <motion.div
                key={moment.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.04 }}
                className="relative pl-10"
              >
                <div className="absolute left-0 top-3 grid h-9 w-9 place-items-center rounded-full border-4 border-[#f7f3e8] bg-[#0b2f23] text-[11px] font-black text-[#d5e8b4]">
                  {moment.mediaLabel}
                </div>

                <div className="rounded-[1.45rem] border border-[#0b2f23]/10 bg-[#e8ecdd] p-4 shadow-[0_10px_24px_rgba(6,43,32,0.06)]">
                  <div className="flex items-start justify-between gap-3">
                    <h6 className="font-serif text-2xl leading-none tracking-[-0.04em]">
                      {moment.title}
                    </h6>

                    <span className="shrink-0 rounded-full bg-[#d5e8b4] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.1em] text-[#0b2f23]">
                      {moment.mediaHint}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-[#315d47]">
                    {moment.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function LegacyScreen() {
  return (
    <div className="grid min-h-[460px] place-items-center rounded-[2rem] bg-[#0b2f23] p-7 text-center text-[#f7f3e8]">
      <div>
        <p className="text-5xl">📼</p>

        <h4 className="mt-6 font-serif text-5xl leading-none tracking-[-0.05em]">
          lol. You got archived.
        </h4>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#c6d2c7]">
          If you came back from the tape, be honest. The archive got you.
        </p>

        <SectionLink
          href="#guestbook"
          focusTargetId="guestbook-message"
          className="mt-6 inline-block rounded-full bg-[#d5e8b4] px-5 py-3 text-sm font-bold text-[#0b2f23] transition hover:-translate-y-0.5 hover:bg-[#f7f3e8]"
        >
          🙌 Hands up, I got had
        </SectionLink>

        <p className="mt-4 text-sm text-[#d5e8b4]">
          Confess in the guestbook. No judgment. Probably.
        </p>
      </div>
    </div>
  )
}

function InspectingApp({
  selectedItem,
}: {
  selectedItem: SideQuestItem
}) {
  return (
    <div className="h-[590px] overflow-hidden rounded-[2.2rem] border-[7px] border-[#0b2f23] bg-[#0b2f23] shadow-[0_24px_70px_rgba(6,43,32,0.22)]">
      <div className="flex h-full flex-col overflow-hidden rounded-[1.6rem] bg-[#e8ecdd]">
        <div className="shrink-0 bg-[#0b2f23] px-5 pb-4 pt-3 text-[#f7f3e8]">
          <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-[#d5e8b4]/35" />

          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#d5e8b4]">
                Inspecting
              </p>

              <h3 className="mt-2 font-serif text-4xl leading-none tracking-[-0.05em]">
                {selectedItem.title}
              </h3>
            </div>

            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#d5e8b4] text-2xl text-[#0b2f23]">
              {selectedItem.emoji}
            </div>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedItem.id}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              {selectedItem.type === "hobbies" ? <HobbiesScreen /> : null}
              {selectedItem.type === "anime" ? <AnimeScreen /> : null}
              {selectedItem.type === "shelf" ? <ShelfScreen /> : null}
              {selectedItem.type === "sports" ? <KarateScreen /> : null}
              {selectedItem.type === "secret" ? (
                <LegacyScreen />
              ) : null}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="shrink-0 border-t border-[#0b2f23]/10 bg-[#f7f3e8] px-5 py-3">
          <div className="mx-auto h-1.5 w-20 rounded-full bg-[#0b2f23]/25" />
        </div>
      </div>
    </div>
  )
}

function RecommendationConsole() {
  const [recommendation, setRecommendation] = useState("")
  const [recommendations, setRecommendations] = useState(starterRecommendations)
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  )

  async function submitRecommendation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const trimmed = recommendation.trim()
    if (!trimmed) return

    setStatus("sending")

    const formData = new FormData()
    formData.append("type", "Side quest suggestion")
    formData.append("suggestion", trimmed)

    try {
      const response = await fetch("https://formspree.io/f/mzdnvowj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (!response.ok) {
        setStatus("error")
        return
      }

      setRecommendations((current) => [trimmed, ...current])
      setRecommendation("")
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  const rollingItems = [...recommendations, ...recommendations]

  return (
    <div
      id="side-quest-suggestions"
      className="mt-5 overflow-hidden rounded-[2rem] border border-[#0b2f23]/10 bg-[#eef3d7] p-4 shadow-[0_18px_50px_rgba(6,43,32,0.1)]"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#254333]">
            Suggestions
          </p>

          <p className="mt-1 text-xs font-semibold text-[#4c6d5d]">
            Dare me a sketch, suggest a book, or drop a side quest.
          </p>
        </div>

        <span className="h-2 w-2 rounded-full bg-[#0b2f23]" />
      </div>

      <div className="h-24 overflow-hidden">
        <motion.div
          animate={{ y: ["0%", "-50%"] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="space-y-2"
        >
          {rollingItems.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className={`rounded-2xl border border-[#0b2f23]/10 px-4 py-3 ${
                index % 2 === 0 ? "bg-[#0b2f23] text-[#d5e8b4]" : "bg-white/70"
              }`}
            >
              <p className="text-sm font-semibold">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <form onSubmit={submitRecommendation} className="mt-4 space-y-3">
        <div className="flex gap-2">
          <input
            name="suggestion"
            value={recommendation}
            onChange={(event) => {
              setRecommendation(event.target.value)
              if (status !== "idle") setStatus("idle")
            }}
            placeholder="drop a recommendation..."
            className="min-w-0 flex-1 rounded-full border border-[#0b2f23]/10 bg-white/70 px-4 py-3 text-sm text-[#0b2f23] outline-none placeholder:text-[#78917a] focus:border-[#0b2f23]"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="grid h-12 w-12 place-items-center rounded-full bg-[#0b2f23] text-[#d5e8b4] transition hover:bg-[#174b38] disabled:cursor-not-allowed disabled:opacity-60"
            aria-label="Send recommendation"
          >
            <Send size={17} />
          </button>
        </div>

        {status === "sending" ? (
          <p className="text-xs font-semibold text-[#4c6d5d]">
            Sending the side quest...
          </p>
        ) : null}

        {status === "sent" ? (
          <p className="rounded-2xl bg-[#d5e8b4] px-4 py-3 text-xs font-bold text-[#0b2f23]">
            Side quest received. I will pretend I am mentally prepared.
          </p>
        ) : null}

        {status === "error" ? (
          <p className="rounded-2xl bg-[#f0a6c8] px-4 py-3 text-xs font-bold text-[#0b2f23]">
            Something broke. Very on brand. Try again once.
          </p>
        ) : null}
      </form>
    </div>
  )
}

export function SideQuestsSection() {
  const [selectedItem, setSelectedItem] = useState<SideQuestItem>(
    sideQuestItems[0],
  )

  function handleSelect(item: SideQuestItem) {
    setSelectedItem(item)

    if (item.isSecret) {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
    }
  }


  return (
    <section
      id="side-quests"
      className="relative overflow-hidden bg-[#d9e7bd] px-6 py-24 text-[#0b2f23] lg:px-10"
    >
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#f7f3e8]/50 blur-[90px]" />
      <div className="pointer-events-none absolute -right-24 bottom-24 h-72 w-72 rounded-full bg-[#7ab690]/30 blur-[90px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.55fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#3b7358]">
              03 / Side Quests
            </p>

            <p className="mt-6 max-w-xs text-base leading-7 text-[#315d47]">
              A smaller hobby dashboard for the human behind the commits. Pick a
              card and inspect the side quest.
            </p>
          </div>

          <h2 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.05em] sm:text-7xl">
            Proof that I exist outside VS Code.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 xl:grid-cols-[0.95fr_390px]">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#0b2f23]/10 bg-[#eef3d7] p-5 shadow-[0_25px_70px_rgba(6,43,32,0.12)] md:min-h-[760px]">
            <div className="pointer-events-none absolute inset-0 opacity-[0.24]">
              <div className="h-full w-full bg-[linear-gradient(to_right,#0b2f23_1px,transparent_1px),linear-gradient(to_bottom,#0b2f23_1px,transparent_1px)] bg-[size:44px_44px]" />
            </div>

            <div className="relative mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3b7358]">
                  Side quest dashboard
                </p>

                <h3 className="mt-2 font-serif text-4xl leading-none tracking-[-0.05em]">
                  Pick a card.
                </h3>
              </div>

              <span className="rounded-full bg-[#0b2f23] px-4 py-2 text-xs font-bold text-[#d5e8b4]">
                5 cards
              </span>
            </div>

            <div className="relative grid gap-4 md:block md:min-h-[690px]">
              {sideQuestItems.map((item, index) => (
                <SideQuestCard
                  key={item.id}
                  item={item}
                  index={index}
                  isSelected={selectedItem.id === item.id}
                  onSelect={handleSelect}
                />
              ))}
            </div>
          </div>

          <div>
            <InspectingApp
              selectedItem={selectedItem}
            />

            <RecommendationConsole />
          </div>
        </div>
      </div>
    </section>
  )
}
