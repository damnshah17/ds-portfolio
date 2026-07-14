export type SectionMood = {
  id: string
  label: string
  mood: string
  line: string
}

export const sectionMoods: SectionMood[] = [
  {
    id: "home",
    label: "Home",
    mood: "entering the lobby",
    line: "Daaman is currently trying to make this portfolio feel less boring.",
  },
  {
    id: "journey",
    label: "Journey",
    mood: "timeline mode",
    line: "A suspicious amount of learning, debugging, and surviving deadlines.",
  },
  {
    id: "work",
    label: "Work",
    mood: "builder mode",
    line: "Projects with actual problems behind them, not just pretty cards.",
  },
  {
    id: "side-quests",
    label: "Side Quests",
    mood: "personality unlocked",
    line: "Anime, memes, gym arcs, books, and other side effects of being alive.",
  },
  {
    id: "guestbook",
    label: "Guestbook",
    mood: "internet wall",
    line: "Leave something kind, chaotic, or suspiciously wise.",
  },
  {
    id: "contact",
    label: "Contact",
    mood: "professional exit",
    line: "For roles, projects, referrals, or a good technical conversation.",
  },
]