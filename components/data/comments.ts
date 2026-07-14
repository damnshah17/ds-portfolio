export type GuestbookComment = {
  id: number
  name: string
  message: string
  emoji: string
  position: "left" | "right" | "center"
}

export const guestbookComments: GuestbookComment[] = [
  {
    id: 1,
    name: "Internet visitor",
    message: "This portfolio has actual personality.",
    emoji: "🔥",
    position: "left",
  },
  {
    id: 2,
    name: "Future recruiter maybe",
    message: "Came for the projects, stayed for the side quests.",
    emoji: "🫡",
    position: "right",
  },
  {
    id: 3,
    name: "Anime witness",
    message: "The anime section needs a full ranking system.",
    emoji: "💀",
    position: "center",
  },
  {
    id: 4,
    name: "Debugging survivor",
    message: "Professional overthinker is painfully accurate.",
    emoji: "🤝",
    position: "left",
  },
  {
    id: 5,
    name: "Random visitor",
    message: "RTSR project is actually wild.",
    emoji: "⚡",
    position: "right",
  },
]