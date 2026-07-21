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
    name: "Leave a project note",
    message: "Tell me which project you clicked first, or which one needs more detail.",
    emoji: "🛠️",
    position: "left",
  },
  {
    id: 2,
    name: "Send a side quest",
    message: "Dare me a sketch, suggest a book, or drop a cube challenge.",
    emoji: "🎲",
    position: "right",
  },
  {
    id: 3,
    name: "Anime recommendation box",
    message: "Recommend an anime that deserves a spot on the watchlist.",
    emoji: "🍥",
    position: "center",
  },
  {
    id: 4,
    name: "Tiny feedback corner",
    message: "Point out something confusing, broken, funny, or surprisingly good.",
    emoji: "💬",
    position: "left",
  },
  {
    id: 5,
    name: "Career advice welcome",
    message: "Drop advice for projects, internships, AI engineering, or software roles.",
    emoji: "🧭",
    position: "right",
  },
]