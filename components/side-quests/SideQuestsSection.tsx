"use client"

import { type FormEvent, useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { ChevronLeft, ChevronRight, ExternalLink, Send } from "lucide-react"
import { FaInstagram, FaSpotify } from "react-icons/fa"

import {
  animePicks,
  bookPicks,
  karateMoments,
  memePicks,
  musicMoods,
  sideQuestItems,
  starterRecommendations,
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
  sky: {
    card: "bg-[#9ad7f5] text-[#0b2f23]",
    chip: "bg-[#0b2f23] text-[#f7f3e8]",
    glow: "bg-[#9ad7f5]/40",
  },
}

const sizeClasses = {
  small: "h-32 w-44",
  medium: "h-40 w-56",
  large: "h-48 w-64",
}

function EvidenceItem({
  item,
  isSelected,
  onSelect,
}: {
  item: SideQuestItem
  isSelected: boolean
  onSelect: (item: SideQuestItem) => void
}) {
  const accent = accentStyles[item.accent]

  return (
    <motion.button
      type="button"
      drag
      dragMomentum={false}
      whileDrag={{ scale: 1.04, rotate: 0, zIndex: 30 }}
      whileHover={{ y: -6, rotate: 0, zIndex: 20 }}
      onClick={() => onSelect(item)}
      className={`absolute ${item.position} ${item.rotate} ${
        sizeClasses[item.size]
      } group cursor-grab overflow-hidden rounded-[1.6rem] border border-[#0b2f23]/10 p-4 text-left shadow-[0_18px_45px_rgba(6,43,32,0.16)] active:cursor-grabbing ${
        accent.card
      } ${isSelected ? "ring-4 ring-[#0b2f23]/20" : ""}`}
    >
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full blur-2xl ${accent.glow}`}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div className="text-3xl">{item.emoji}</div>

        <span
          className={`rounded-full px-3 py-1 text-[11px] font-bold ${accent.chip}`}
        >
          {item.label}
        </span>
      </div>

      <div className="relative mt-5">
        <h3 className="font-serif text-3xl leading-none tracking-[-0.05em]">
          {item.title}
        </h3>

        <p className="mt-3 text-xs leading-5 opacity-80">{item.short}</p>
      </div>

      <div className="absolute bottom-3 left-4 right-4 translate-y-3 opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="rounded-2xl bg-black/10 px-3 py-2 text-[11px] font-semibold backdrop-blur">
          Inspect · drag
        </div>
      </div>
    </motion.button>
  )
}

function MediaSlot({
  label,
  hint,
  type = "image",
}: {
  label: string
  hint: string
  type?: "image" | "video"
}) {
  return (
    <div className="grid aspect-[4/3] place-items-center rounded-[1.5rem] border border-dashed border-[#0b2f23]/20 bg-[#f7f3e8]/80 text-center text-[#0b2f23]">
      <div>
        <p className="text-sm font-bold">{label}</p>
        <p className="mt-2 px-4 font-mono text-[10px] leading-4 text-[#315d47]">
          {hint}
        </p>
        <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#3b7358]">
          {type}
        </p>
      </div>
    </div>
  )
}

function PhoneArrowButton({
  label,
  onClick,
  children,
}: {
  label: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full bg-[#0b2f23] text-[#f7f3e8] transition hover:bg-[#174b38]"
    >
      {children}
    </button>
  )
}

function AnimeScreen() {
  const [activeAnime, setActiveAnime] = useState(0)
  const anime = animePicks[activeAnime]

  function previousAnime() {
    setActiveAnime((current) =>
      current === 0 ? animePicks.length - 1 : current - 1,
    )
  }

  function nextAnime() {
    setActiveAnime((current) => (current + 1) % animePicks.length)
  }

  return (
    <div className="space-y-4">
      <div className="rounded-[2rem] bg-[#0b2f23] p-4 text-[#f7f3e8]">
        <div className="grid aspect-[3/4] max-h-[300px] place-items-center rounded-[1.5rem] border border-[#d5e8b4]/15 bg-gradient-to-br from-[#d5e8b4]/25 to-[#08251c]">
          <div className="text-center">
            <p className="text-5xl">🍥</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#d5e8b4]">
              Poster slot
            </p>
            <p className="mt-2 max-w-[220px] px-4 font-mono text-[10px] leading-5 text-[#c6d2c7]">
              {anime.image}
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-[2rem] bg-[#f7f3e8] p-5 text-[#0b2f23]">
        <div className="flex items-center justify-between gap-4">
          <PhoneArrowButton label="Previous anime" onClick={previousAnime}>
            <ChevronLeft size={17} />
          </PhoneArrowButton>

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3b7358]">
            Anime log
          </p>

          <PhoneArrowButton label="Next anime" onClick={nextAnime}>
            <ChevronRight size={17} />
          </PhoneArrowButton>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={anime.title}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -18 }}
            transition={{ duration: 0.22 }}
          >
            <h4 className="mt-5 font-serif text-5xl leading-none tracking-[-0.05em]">
              {anime.title}
            </h4>

            <p className="mt-3 inline-flex rounded-full bg-[#d5e8b4] px-3 py-1 text-xs font-bold">
              {anime.mood}
            </p>

            <p className="mt-5 text-sm font-semibold leading-6">{anime.line}</p>

            <div className="mt-5 rounded-3xl border border-[#0b2f23]/10 bg-[#e8ecdd] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#3b7358]">
                Real note
              </p>
              <p className="mt-2 text-sm leading-6 text-[#315d47]">
                {anime.seriousNote}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

function BooksScreen() {
  const [activeBook, setActiveBook] = useState(0)
  const book = bookPicks[activeBook]

  function previousBook() {
    setActiveBook((current) =>
      current === 0 ? bookPicks.length - 1 : current - 1,
    )
  }

  function nextBook() {
    setActiveBook((current) => (current + 1) % bookPicks.length)
  }

  return (
    <div className="rounded-[2rem] bg-[#f7f3e8] p-5 text-[#0b2f23]">
      <div className="flex items-center justify-between gap-4">
        <PhoneArrowButton label="Previous book" onClick={previousBook}>
          <ChevronLeft size={17} />
        </PhoneArrowButton>

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3b7358]">
          Bookshelf
        </p>

        <PhoneArrowButton label="Next book" onClick={nextBook}>
          <ChevronRight size={17} />
        </PhoneArrowButton>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={book.title}
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -18 }}
          transition={{ duration: 0.22 }}
          className="mt-5"
        >
          <div className="grid aspect-[3/4] max-h-[310px] place-items-center rounded-[1.5rem] border border-[#0b2f23]/10 bg-[#e8ecdd] text-center">
            <div>
              <p className="text-5xl">📘</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em]">
                Cover slot
              </p>
              <p className="mt-2 px-4 font-mono text-[10px] leading-4 text-[#3b7358]">
                {book.image}
              </p>
            </div>
          </div>

          <h4 className="mt-5 font-serif text-5xl leading-none tracking-[-0.05em]">
            {book.title}
          </h4>

          <p className="mt-3 text-sm font-bold text-[#3b7358]">
            {book.takeaway}
          </p>

          <p className="mt-2 text-sm leading-6 text-[#315d47]">
            {book.afterReading}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function MusicScreen() {
  return (
    <div className="space-y-4">
      <div className="rounded-[2rem] bg-[#9ad7f5] p-5 text-[#0b2f23]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#24566b]">
              Radio mode
            </p>
            <h4 className="mt-2 font-serif text-5xl tracking-[-0.05em]">
              Brain FM
            </h4>
          </div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="grid h-16 w-16 place-items-center rounded-full bg-[#f7f3e8] text-[#0b2f23]"
          >
            🎧
          </motion.div>
        </div>

        <div className="mt-7 flex h-24 items-center gap-1">
          {[30, 70, 45, 85, 35, 65, 50, 90, 40, 75, 55, 68].map(
            (height, index) => (
              <motion.span
                key={index}
                animate={{
                  height: [`${height}%`, `${100 - height / 2}%`, `${height}%`],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.05,
                }}
                className="w-full rounded-full bg-[#0b2f23]"
              />
            ),
          )}
        </div>

        <div className="mt-6 rounded-[1.5rem] bg-[#f7f3e8] p-4">
          <div className="flex items-center gap-3">
            <FaSpotify size={24} className="text-[#1DB954]" />
            <div>
              <p className="text-sm font-bold">Spotify slot</p>
              <p className="mt-1 text-xs leading-5 text-[#315d47]">
                Later replace this with an embed or playlist link.
              </p>
            </div>
          </div>

          <a
            href="https://open.spotify.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0b2f23] px-4 py-2 text-xs font-bold text-[#f7f3e8]"
          >
            Open playlist placeholder
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {musicMoods.map((mood) => (
        <div
          key={mood.title}
          className="rounded-[1.5rem] bg-[#f7f3e8] p-5 text-[#0b2f23]"
        >
          <div className="flex items-center justify-between gap-4">
            <h4 className="font-serif text-3xl tracking-[-0.04em]">
              {mood.title}
            </h4>
            <span className="rounded-full bg-[#9ad7f5] px-3 py-1 text-xs font-bold">
              {mood.vibe}
            </span>
          </div>
          <p className="mt-2 text-sm leading-6 text-[#315d47]">
            {mood.description}
          </p>
        </div>
      ))}
    </div>
  )
}

function MemeScreen() {
  const [memeIndex, setMemeIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setMemeIndex((index) => (index + 1) % memePicks.length)
    }, 2300)

    return () => window.clearInterval(timer)
  }, [])

  const meme = memePicks[memeIndex]

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-[2rem] bg-[#f0a6c8] p-5 text-[#0b2f23]">
        <p className="text-xs font-bold uppercase tracking-[0.2em]">
          Meme reel
        </p>

        <div className="mt-5 h-[300px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={meme.title}
              initial={{ opacity: 0, y: 70, rotate: -3 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, y: -70, rotate: 3 }}
              transition={{ duration: 0.3 }}
              className="flex h-full flex-col justify-between rounded-[2rem] bg-[#f7f3e8] p-6"
            >
              <p className="text-5xl">💀</p>
              <div>
                <h4 className="font-serif text-5xl leading-none tracking-[-0.05em]">
                  {meme.title}
                </h4>
                <p className="mt-5 text-base font-bold leading-7">
                  {meme.line}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="rounded-[2rem] bg-[#0b2f23] p-5 text-[#f7f3e8]">
        <FaInstagram size={24} className="text-[#d5e8b4]" />
        <h4 className="mt-4 font-serif text-4xl leading-none tracking-[-0.05em]">
          Meme exchange desk.
        </h4>
        <p className="mt-4 text-sm leading-7 text-[#c6d2c7]">
          Send good memes. Bad memes will be reviewed by committee.
        </p>

        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#d5e8b4] px-4 py-2 text-xs font-bold text-[#0b2f23]"
        >
          Instagram placeholder
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  )
}

function KarateScreen() {
  return (
    <div className="space-y-4">
      <div className="rounded-[2rem] bg-[#e1aa66] p-5 text-[#0b2f23]">
        <p className="text-xs font-bold uppercase tracking-[0.2em]">
          Training blog
        </p>

        <h4 className="mt-4 font-serif text-5xl leading-none tracking-[-0.05em]">
          13+ years, one black belt, many repetitions.
        </h4>

        <p className="mt-5 text-sm font-semibold leading-7">
          A small timeline for the part of my life that taught me discipline
          before software ever did.
        </p>
      </div>

      <div className="relative ml-3 border-l-2 border-[#0b2f23]/20 pl-5">
        {karateMoments.map((moment, index) => (
          <div key={moment.title} className="relative pb-5">
            <span className="absolute -left-[31px] top-1 grid h-5 w-5 place-items-center rounded-full bg-[#0b2f23] text-[10px] font-bold text-[#d5e8b4]">
              {index + 1}
            </span>

            <div className="rounded-[2rem] bg-[#f7f3e8] p-4 text-[#0b2f23]">
              <MediaSlot
                label={moment.mediaLabel}
                hint={moment.mediaHint}
                type={
                  moment.mediaLabel.toLowerCase().includes("video")
                    ? "video"
                    : "image"
                }
              />
              <h5 className="mt-4 font-serif text-3xl leading-none tracking-[-0.05em]">
                {moment.title}
              </h5>
              <p className="mt-3 text-sm leading-6 text-[#315d47]">
                {moment.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function LegacyScreen({
  gotHadCount,
  onHandsUp,
}: {
  gotHadCount: number
  onHandsUp: () => void
}) {
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

        <button
          type="button"
          onClick={onHandsUp}
          className="mt-6 rounded-full bg-[#d5e8b4] px-5 py-3 text-sm font-bold text-[#0b2f23] transition hover:-translate-y-0.5 hover:bg-[#f7f3e8]"
        >
          🙌 Hands up, I got had
        </button>

        <p className="mt-4 text-sm text-[#d5e8b4]">
          {gotHadCount} brave visitors admitted defeat on this browser.
        </p>
      </div>
    </div>
  )
}

function InspectingApp({
  selectedItem,
  gotHadCount,
  onHandsUp,
}: {
  selectedItem: SideQuestItem
  gotHadCount: number
  onHandsUp: () => void
}) {
  return (
    <div className="h-[640px] overflow-hidden rounded-[2.4rem] border-[8px] border-[#0b2f23] bg-[#0b2f23] shadow-[0_24px_70px_rgba(6,43,32,0.24)]">
      <div className="flex h-full flex-col overflow-hidden rounded-[1.8rem] bg-[#e8ecdd]">
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
              {selectedItem.type === "anime" ? <AnimeScreen /> : null}
              {selectedItem.type === "books" ? <BooksScreen /> : null}
              {selectedItem.type === "music" ? <MusicScreen /> : null}
              {selectedItem.type === "memes" ? <MemeScreen /> : null}
              {selectedItem.type === "sports" ? <KarateScreen /> : null}
              {selectedItem.type === "secret" ? (
                <LegacyScreen
                  gotHadCount={gotHadCount}
                  onHandsUp={onHandsUp}
                />
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

  function submitRecommendation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const trimmed = recommendation.trim()
    if (!trimmed) return

    setRecommendations((current) => [trimmed, ...current])
    setRecommendation("")
  }

  const rollingItems = [...recommendations, ...recommendations]

  return (
    <div className="mt-5 overflow-hidden rounded-[2rem] border border-[#0b2f23]/10 bg-[#eef3d7] p-4 shadow-[0_18px_50px_rgba(6,43,32,0.1)]">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3b7358]">
          Suggestions
        </p>
        <span className="h-2 w-2 rounded-full bg-[#0b2f23]" />
      </div>

      <div className="h-28 overflow-hidden">
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

      <form onSubmit={submitRecommendation} className="mt-4 flex gap-2">
        <input
          value={recommendation}
          onChange={(event) => setRecommendation(event.target.value)}
          placeholder="drop a recommendation..."
          className="min-w-0 flex-1 rounded-full border border-[#0b2f23]/10 bg-white/70 px-4 py-3 text-sm text-[#0b2f23] outline-none placeholder:text-[#78917a] focus:border-[#0b2f23]"
        />

        <button
          type="submit"
          className="grid h-12 w-12 place-items-center rounded-full bg-[#0b2f23] text-[#d5e8b4] transition hover:bg-[#174b38]"
          aria-label="Send recommendation"
        >
          <Send size={17} />
        </button>
      </form>
    </div>
  )
}

export function SideQuestsSection() {
  const [selectedItem, setSelectedItem] = useState<SideQuestItem>(
    sideQuestItems[0],
  )
  const [gotHadCount, setGotHadCount] = useState(0)

  useEffect(() => {
    const savedCount = window.localStorage.getItem("sideQuestGotHadCount")
    if (savedCount) {
      setGotHadCount(Number(savedCount))
    }
  }, [])

  function handleSelect(item: SideQuestItem) {
    setSelectedItem(item)

    if (item.isSecret) {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
    }
  }

  function handleHandsUp() {
    setGotHadCount((current) => {
      const next = current + 1
      window.localStorage.setItem("sideQuestGotHadCount", String(next))
      return next
    })
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
              A visual evidence board for the human behind the commits. Drag
              things around. Inspect whatever looks suspicious.
            </p>
          </div>

          <h2 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.05em] sm:text-7xl">
            Proof that I exist outside VS Code.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 xl:grid-cols-[0.95fr_390px]">
          <div className="relative min-h-[640px] overflow-hidden rounded-[2.5rem] border border-[#0b2f23]/10 bg-[#eef3d7] p-5 shadow-[0_25px_70px_rgba(6,43,32,0.12)]">
            <div className="pointer-events-none absolute inset-0 opacity-[0.28]">
              <div className="h-full w-full bg-[linear-gradient(to_right,#0b2f23_1px,transparent_1px),linear-gradient(to_bottom,#0b2f23_1px,transparent_1px)] bg-[size:44px_44px]" />
            </div>

            <div className="pointer-events-none absolute left-6 top-6 rounded-full bg-[#0b2f23] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#d5e8b4]">
              Human Evidence Board
            </div>

            <div className="pointer-events-none absolute bottom-6 left-6 rounded-full border border-[#0b2f23]/10 bg-[#f7f3e8]/80 px-4 py-2 text-xs font-semibold text-[#315d47]">
              Tip: cards are draggable
            </div>

            <AnimatePresence>
              {sideQuestItems.map((item) => (
                <EvidenceItem
                  key={item.id}
                  item={item}
                  isSelected={selectedItem.id === item.id}
                  onSelect={handleSelect}
                />
              ))}
            </AnimatePresence>
          </div>

          <div>
            <InspectingApp
              selectedItem={selectedItem}
              gotHadCount={gotHadCount}
              onHandsUp={handleHandsUp}
            />

            <RecommendationConsole />
          </div>
        </div>
      </div>
    </section>
  )
}