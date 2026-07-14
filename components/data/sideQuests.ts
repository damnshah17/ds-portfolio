export type SideQuestType =
  | "books"
  | "anime"
  | "sports"
  | "music"
  | "memes"
  | "secret"

export type SideQuestItem = {
  id: string
  title: string
  label: string
  emoji: string
  type: SideQuestType
  short: string
  note: string
  detail: string
  position: string
  rotate: string
  size: "small" | "medium" | "large"
  accent: "green" | "cream" | "gold" | "pink" | "sky"
  isSecret?: boolean
}

export type AnimePick = {
  title: string
  mood: string
  line: string
  seriousNote: string
  image?: string
}

export type BookPick = {
  title: string
  takeaway: string
  afterReading: string
  image?: string
}

export type MusicMood = {
  title: string
  description: string
  vibe: string
}

export type MemePick = {
  title: string
  line: string
}

export type KarateMoment = {
  title: string
  description: string
  mediaLabel: string
  mediaHint: string
}

export const sideQuestItems: SideQuestItem[] = [
  {
    id: "bookshelf",
    title: "Bookshelf",
    label: "Books",
    emoji: "📚",
    type: "books",
    short: "Ideas I collect when my brain agrees.",
    note: "Books that left behind systems, discipline, focus, and some uncomfortable self-reflection.",
    detail:
      "This shelf is less about showing that I read and more about showing what stayed with me after reading.",
    position: "left-[6%] top-[12%]",
    rotate: "-rotate-6",
    size: "large",
    accent: "cream",
  },
  {
    id: "anime-wall",
    title: "Anime Wall",
    label: "Anime",
    emoji: "🍥",
    type: "anime",
    short: "Long arcs, loud dreams, impossible comebacks.",
    note: "Naruto, One Piece, Dr. Stone, and whatever else I eventually admit belongs here.",
    detail:
      "Anime is where discipline, friendship, obsession, strategy, stupidity, and insane motivation somehow meet.",
    position: "left-[34%] top-[6%]",
    rotate: "rotate-3",
    size: "medium",
    accent: "green",
  },
  {
    id: "training-corner",
    title: "Training Corner",
    label: "Karate",
    emoji: "🥋",
    type: "sports",
    short: "13+ years. 1st Dan black belt.",
    note: "Discipline before debugging. Repetition before confidence.",
    detail:
      "Karate gave me patience, consistency, and the ability to keep showing up even when progress feels invisible.",
    position: "right-[8%] top-[16%]",
    rotate: "rotate-6",
    size: "large",
    accent: "gold",
  },
  {
    id: "headphones",
    title: "Headphones",
    label: "Music",
    emoji: "🎧",
    type: "music",
    short: "Every bug needs background music.",
    note: "Gym playlist, late-night coding songs, and main-character walk music.",
    detail:
      "Music is basically environment configuration for my brain. Different playlist for debugging, walking, gym, and pretending the deadline is under control.",
    position: "left-[14%] top-[48%]",
    rotate: "rotate-4",
    size: "medium",
    accent: "sky",
  },
  {
    id: "meme-note",
    title: "Meme Drawer",
    label: "Memes",
    emoji: "💀",
    type: "memes",
    short: "The bug was one missing import.",
    note: "Debugging memes, grad school memes, anime reaction memes, and controlled brain rot.",
    detail:
      "Some memes are just documentation for emotional states. Especially when the code worked yesterday and now refuses to acknowledge reality.",
    position: "left-[42%] top-[42%]",
    rotate: "-rotate-3",
    size: "small",
    accent: "pink",
  },
  {
    id: "legacy-tape",
    title: "Legacy Tape",
    label: "Archive",
    emoji: "📼",
    type: "secret",
    short: "Old internet artifact. Probably safe. Probably.",
    note: "A suspiciously normal archive from the after-hours room.",
    detail:
      "This looks like a harmless old archive. Nothing to install. Nothing dangerous. Just one tiny internet tradition hiding in plain sight.",
    position: "right-[12%] bottom-[10%]",
    rotate: "rotate-6",
    size: "small",
    accent: "gold",
    isSecret: true,
  },
]

export const animePicks: AnimePick[] = [
  {
    title: "Naruto",
    mood: "never give up arc",
    line: "The blueprint for loud dreams and stubborn progress.",
    seriousNote:
      "What stuck with me is carrying ambition even when people do not understand it yet.",
    image: "/side-quests/anime/naruto.jpg",
  },
  {
    title: "One Piece",
    mood: "adventure mode",
    line: "Friendship, freedom, chaos, and somehow 1000+ episodes make sense.",
    seriousNote:
      "The long-term world-building reminds me that big goals need patience.",
    image: "/side-quests/anime/one-piece.jpg",
  },
  {
    title: "Dr. Stone",
    mood: "science brain activated",
    line: "Science as a shonen power system. Insane concept. Perfect execution.",
    seriousNote:
      "It makes problem-solving feel exciting: observe, test, build, fail, repeat.",
    image: "/side-quests/anime/dr-stone.jpg",
  },
]

export const bookPicks: BookPick[] = [
  {
    title: "Atomic Habits",
    takeaway: "Systems beat motivation.",
    afterReading:
      "Made me think more about small repeatable actions instead of dramatic productivity resets.",
    image: "/side-quests/books/atomic-habits.jpg",
  },
  {
    title: "Deep Work",
    takeaway: "Focus is a skill, not a mood.",
    afterReading:
      "Also made me realize how many times I pretend opening another tab counts as research.",
    image: "/side-quests/books/deep-work.jpg",
  },
  {
    title: "Add next book",
    takeaway: "Leave this slot for your real favorite.",
    afterReading:
      "Replace this with a book you actually want people to know shaped how you think.",
    image: "/side-quests/books/add-book.jpg",
  },
]

export const musicMoods: MusicMood[] = [
  {
    title: "Debugging Mode",
    description: "Low chaos, high focus, no lyrics if the bug is personal.",
    vibe: "focus",
  },
  {
    title: "Gym Mode",
    description: "Songs that make the last set feel like a villain fight.",
    vibe: "energy",
  },
  {
    title: "Main Character Walk",
    description: "For walking to class like the semester has cinematography.",
    vibe: "cinematic",
  },
]

export const memePicks: MemePick[] = [
  {
    title: "Code worked yesterday",
    line: "The most dangerous sentence in software engineering.",
  },
  {
    title: "Grad school brain",
    line: "Laughing because crying would require scheduling.",
  },
  {
    title: "Anime reaction folder",
    line: "Useful for 70% of daily communication.",
  },
  {
    title: "One missing import",
    line: "Forty minutes of debugging. One line of shame.",
  },
]

export const karateMoments: KarateMoment[] = [
  {
    title: "The beginning",
    description:
      "Started as training. Slowly became discipline, routine, confidence, and identity.",
    mediaLabel: "Photo slot",
    mediaHint: "/side-quests/karate/early-training.jpg",
  },
  {
    title: "Black belt era",
    description:
      "The point where repetition stopped feeling boring and started feeling like proof.",
    mediaLabel: "Video slot",
    mediaHint: "/side-quests/karate/black-belt-demo.mp4",
  },
  {
    title: "Coaching",
    description:
      "Teaching made me better at explaining, leading, observing, and staying patient.",
    mediaLabel: "Photo slot",
    mediaHint: "/side-quests/karate/coaching.jpg",
  },
]

export const starterRecommendations = [
  "Watch Monster",
  "Try bouldering once",
  "Read Project Hail Mary",
  "Make a gym playlist called final boss",
  "Watch one comfort anime episode and call it recovery",
]