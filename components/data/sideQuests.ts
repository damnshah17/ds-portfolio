export type SideQuestType =
  | "hobbies"
  | "anime"
  | "sports"
  | "shelf"
  | "secret"

export type SideQuestItem = {
  id: string
  title: string
  label: string
  emoji: string
  type: SideQuestType
  short: string
  accent: "green" | "cream" | "gold" | "pink" | "archive"
  isSecret?: boolean
}

export type AnimePick = {
  title: string
  watched: boolean
  image?: string
}

export type HobbyPick = {
  title: string
  category: string
  status: "active" | "learning" | "planned" | "curious"
  emoji: string
  line: string
}

export type ShelfCategory = "Books" | "Sketches" | "Cubes"

export type ShelfPick = {
  title: string
  category: ShelfCategory
  status: string
  emoji: string
  line: string
  image?: string
}

export type KarateMoment = {
  title: string
  description: string
  mediaLabel: string
  mediaHint: string
}

export const sideQuestItems: SideQuestItem[] = [
  {
    id: "hobby-stack",
    title: "My Hobbies",
    label: "Life",
    emoji: "🧭",
    type: "hobbies",
    short: "Small side quests that keep life from becoming one long VS Code tab.",
    accent: "cream",
  },
  {
    id: "anime-wall",
    title: "Anime Watchlist",
    label: "Anime",
    emoji: "🍥",
    type: "anime",
    short: "Watched, watching, and dangerously close to watching.",
    accent: "green",
  },
  {
    id: "training-corner",
    title: "Training Corner",
    label: "Karate",
    emoji: "🥋",
    type: "sports",
    short: "13+ years. 1st Dan black belt. Repetition before confidence.",
    accent: "gold",
  },
  {
    id: "shelf-stream",
    title: "Shelf Stream",
    label: "Archive",
    emoji: "🗂️",
    type: "shelf",
    short: "Books, sketches, cubes, and tiny proof of offline side quests.",
    accent: "pink",
  },
  {
    id: "legacy-tape",
    title: "Legacy Tape",
    label: "Archive",
    emoji: "📼",
    type: "secret",
    short: "Old internet artifact. Probably safe. Probably.",
    accent: "archive",
    isSecret: true,
  },
]

export const hobbyPicks: HobbyPick[] = [
  {
    title: "Martial Arts",
    category: "Active",
    status: "active",
    emoji: "🥋",
    line: "The long-running side quest. Discipline, repetition, and black belt memories.",
  },
  {
    title: "Badminton",
    category: "Active",
    status: "active",
    emoji: "🏸",
    line: "Casual enough to start. Competitive enough to get suspiciously serious.",
  },
  {
    title: "Tennis",
    category: "Active",
    status: "active",
    emoji: "🎾",
    line: "Still learning the rhythm, but the game is fun enough to keep coming back.",
  },
  {
    title: "Astronomy",
    category: "Learning",
    status: "learning",
    emoji: "🔭",
    line: "Stars, planets, space, and the casual reminder that everything is huge.",
  },
  {
    title: "White Nights",
    category: "Reading",
    status: "active",
    emoji: "📖",
    line: "I do not claim to be a reader. I survived Dostoevsky once and got curious.",
  },
  {
    title: "Kafka + Crime and Punishment",
    category: "Reading",
    status: "planned",
    emoji: "📚",
    line: "The next existential boss fight. Entering carefully.",
  },
  {
    title: "Hiking",
    category: "Outside",
    status: "planned",
    emoji: "🥾",
    line: "Touching grass, but with elevation and better views.",
  },
  {
    title: "Roller Skating",
    category: "Curious",
    status: "curious",
    emoji: "🛼",
    line: "Not part of the regular life yet. High chance of falling. Still sounds fun.",
  },
]

export const animePicks: AnimePick[] = [
  {
    title: "Naruto",
    watched: true,
    image: "/side-quests/anime/naruto.jpg",
  },
  {
    title: "One Piece",
    watched: true,
    image: "/side-quests/anime/one-piece.jpg",
  },
  {
    title: "Dr. Stone",
    watched: true,
    image: "/side-quests/anime/dr-stone.jpg",
  },
  {
    title: "Death Note",
    watched: true,
    image: "/side-quests/anime/death-note.jpg",
  },
  {
    title: "Demon Slayer",
    watched: true,
    image: "/side-quests/anime/demon-slayer.jpg",
  },
  {
    title: "Jujutsu Kaisen",
    watched: true,
    image: "/side-quests/anime/jujutsu-kaisen.jpg",
  },
  {
    title: "Fullmetal Alchemist",
    watched: true,
    image: "/side-quests/anime/fullmetal-alchemist.jpg",
  },
  {
    title: "Hunter x Hunter",
    watched: true,
    image: "/side-quests/anime/hunter-x-hunter.jpg",
  },
  {
    title: "Mob Psycho 100",
    watched: true,
    image: "/side-quests/anime/mob-psycho-100.jfif",
  },
  {
    title: "One Punch Man",
    watched: true,
    image: "/side-quests/anime/one-punch-man.jpg",
  },
  {
    title: "Haikyuu",
    watched: true,
    image: "/side-quests/anime/haikyuu.jfif",
  },
  {
    title: "Blue Lock",
    watched: true,
    image: "/side-quests/anime/blue-lock.jfif",
  },
  {
    title: "Code Geass",
    watched: true,
    image: "/side-quests/anime/code-geass.jfif",
  },
  {
    title: "Bungo Stray Dogs",
    watched: true,
    image: "/side-quests/anime/bungo-stray-dogs.jfif",
  },
  {
    title: "Classroom of the Elite",
    watched: true,
    image: "/side-quests/anime/classroom-of-the-elite.jfif",
  },
  {
    title: "Solo Leveling",
    watched: true,
    image: "/side-quests/anime/solo-leveling.jfif",
  },
  {
    title: "Kaiju No. 8",
    watched: true,
    image: "/side-quests/anime/kaiju-no-8.jfif",
  },
  {
    title: "Your Name",
    watched: true,
    image: "/side-quests/anime/your-name.jpg",
  },
  {
    title: "Weathering With You",
    watched: true,
    image: "/side-quests/anime/weathering-with-you.jfif",
  },
  {
    title: "Spirited Away",
    watched: true,
    image: "/side-quests/anime/spirited-away.jfif",
  },
  {
    title: "Monster",
    watched: false,
    image: "/side-quests/anime/monster.jfif",
  },
  {
    title: "Vinland Saga",
    watched: false,
    image: "/side-quests/anime/vinland-saga.jpg",
  },
  {
    title: "Frieren",
    watched: false,
    image: "/side-quests/anime/frieren.jpg",
  },
  {
    title: "Steins;Gate",
    watched: false,
    image: "/side-quests/anime/steins-gate.jfif",
  },
]

export const shelfPicks: ShelfPick[] = [
  {
    title: "White Nights",
    category: "Books",
    status: "Read",
    emoji: "📖",
    line: "Read this and briefly became more dramatic than necessary.",
    image: "/side-quests/shelf/white-nights.jfif",
  },
  {
    title: "A Brief History of Time",
    category: "Books",
    status: "Read",
    emoji: "🌌",
    line: "Stephen Hawking made space feel huge, confusing, and weirdly beautiful.",
    image: "/side-quests/shelf/brief-history-of-time.jfif",
  },
  {
    title: "Crime and Punishment",
    category: "Books",
    status: "Current read",
    emoji: "📚",
    line: "Currently entering Dostoevsky boss-fight mode. Slowly. Carefully.",
    image: "/side-quests/shelf/crime-and-punishment.jfif",
  },
  {
    title: "Faceless Abstract",
    category: "Sketches",
    status: "Sketch",
    emoji: "✏️",
    line: "An abstract face study with faceless-art energy.",
    image: "/side-quests/shelf/sketch-01.jpg",
  },
  {
    title: "Naruto Sketch",
    category: "Sketches",
    status: "Sketch",
    emoji: "🍥",
    line: "A Naruto sketch, because some side quests are obviously anime-coded.",
    image: "/side-quests/shelf/sketch-02.jpeg",
  },
  {
    title: "Rubik’s Cube",
    category: "Cubes",
    status: "Can solve",
    emoji: "🧩",
    line: "Classic cube. Pattern recognition, finger tricks, and tiny algorithmic satisfaction.",
  },
  {
    title: "Master Pyramorphix Cube",
    category: "Cubes",
    status: "Can solve",
    emoji: "⬛",
    line: "Same logic, more chaos. Shapes shift, confidence disappears, still gets solved.",
  },
]

export const karateMoments: KarateMoment[] = [
  {
    title: "The beginning",
    description:
      "Started martial arts as training, but over time it became discipline, routine, confidence, and a major part of how I learned consistency.",
    mediaLabel: "01",
    mediaHint: "Start",
  },
  {
    title: "13-year journey",
    description:
      "Years of practice taught me that progress is mostly repetition, patience, and showing up even when improvement is not immediately visible.",
    mediaLabel: "02",
    mediaHint: "Growth",
  },
  {
    title: "Black belt era",
    description:
      "Earning my 1st Dan black belt made repetition feel less like boring practice and more like proof of long-term commitment.",
    mediaLabel: "03",
    mediaHint: "1st Dan",
  },
  {
    title: "Mentoring students",
    description:
      "Led and mentored over 1,000 students in martial arts over a four-year period, focusing on skill development, discipline, confidence, and personal growth.",
    mediaLabel: "04",
    mediaHint: "Mentor",
  },
  {
    title: "Instructor coordination",
    description:
      "Oversaw operations across a team of 25 instructors, coordinated training schedules, maintained teaching standards, and helped keep program quality consistent across batches.",
    mediaLabel: "05",
    mediaHint: "Team",
  },
  {
    title: "Events and outreach",
    description:
      "Contributed to organizing large-scale events, community programs, and outreach initiatives that connected training with leadership and community impact.",
    mediaLabel: "06",
    mediaHint: "Events",
  },
  {
    title: "What stayed with me",
    description:
      "This role strengthened my leadership, communication, organization, accountability, and team coordination in high-responsibility environments.",
    mediaLabel: "07",
    mediaHint: "Mindset",
  },
]

export const starterRecommendations = [
  "Dare me a sketch",
  "Suggest a book",
  "Recommend an anime banger",
  "Give me a cube challenge",
  "Drop a hiking trail",
  "Suggest a weird hobby",
]