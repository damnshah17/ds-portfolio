export type WorkProject = {
  id: string
  title: string
  subtitle: string
  category: string
  year: string
  status: "Shipped" | "In Progress" | "Archived"
  description: string
  stack: string[]
  tags: string[]
  metrics: string[]
  problem: string
  whatIDid: string[]
  outcome: string
  visual: "waveform" | "workflow" | "summary" | "chart" | "backend"
  accent: "lime" | "gold" | "sky" | "pink" | "cream"
  githubUrl?: string
  liveUrl?: string
}

export const projectFilters = [
  "All",
  "Full-Stack",
  "AI / ML",
  "Backend",
  "Frontend",
] as const

export type ProjectFilter = (typeof projectFilters)[number]

export const workProjects: WorkProject[] = [
  {
    id: "microinternship",
    title: "Micro-Internship",
    subtitle: "Platform Engineering",
    category: "Full-Stack",
    year: "2026",
    status: "In Progress",
    description:
      "A university platform connecting students, sponsors, and admins through short-term technical project opportunities.",
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "REST APIs", "Zod"],
    tags: ["Full-Stack", "Product", "Next.js", "PostgreSQL"],
    metrics: ["Multi-role system", "UAT fixes", "Sponsor/admin workflows"],
    problem:
      "The platform needed clear workflows across students, sponsors, and admins. Small gaps in validation, visibility, or role-specific screens could create real confusion for users.",
    whatIDid: [
      "Improved student application views for submitted answers and resume access.",
      "Added clearer approval validation and user-facing feedback.",
      "Refined sponsor project workflows and department-level visibility.",
      "Worked on role-based dashboard behavior across student, sponsor, and admin flows.",
    ],
    outcome:
      "Made real platform workflows clearer, more reliable, and easier to use for a university-facing product.",
    visual: "workflow",
    accent: "gold",
  },
  {
    id: "rtsr",
    title: "Real-Time Transcription",
    subtitle: "& Speaker Recognition",
    category: "AI / ML",
    year: "2024",
    status: "Shipped",
    description:
      "A live speech system that transcribes audio and identifies who is speaking.",
    stack: [
      "Python",
      "Faster-Whisper",
      "TensorFlow",
      "ResNet CNN",
      "PyAudio",
      "MFCC",
    ],
    tags: ["AI / ML", "Research", "Audio"],
    metrics: ["91.7% accuracy", "F1 0.945", "7 speakers"],
    problem:
      "Most transcription tools tell you what was said, but not who said it. I wanted to combine both into one real-time workflow.",
    whatIDid: [
      "Used Faster-Whisper for automatic speech recognition.",
      "Built a custom ResNet CNN for speaker identification.",
      "Extracted MFCC features and delta values from short audio clips.",
      "Used PyAudio and concurrent processing for live microphone input.",
    ],
    outcome:
      "Published as main author in IJCSMC and won first place at Aaveshkar 2024.",
    visual: "waveform",
    accent: "lime",
  },
  {
    id: "jpmorgan-simulation",
    title: "JPMorganChase",
    subtitle: "Backend Simulation",
    category: "Backend",
    year: "2025",
    status: "Shipped",
    description:
      "A backend simulation involving Kafka, Spring Boot, transaction processing, persistence, and REST APIs.",
    stack: ["Java", "Spring Boot", "Kafka", "Spring Data JPA", "H2", "Maven"],
    tags: ["Backend", "Java", "Kafka", "Spring Boot"],
    metrics: ["Kafka consumer", "REST endpoint", "Database persistence"],
    problem:
      "The simulation focused on processing transaction messages reliably, validating data, persisting updates, and exposing account balance information through a backend service.",
    whatIDid: [
      "Integrated Kafka into a Spring Boot microservice.",
      "Consumed and deserialized transaction messages.",
      "Implemented validation and persistence using Spring Data JPA.",
      "Connected to an external REST Incentive API.",
      "Built a REST endpoint for querying user balances.",
    ],
    outcome:
      "Built stronger understanding of message-driven backend systems, service boundaries, and transaction workflows.",
    visual: "backend",
    accent: "cream",
  },
  {
    id: "tubescript",
    title: "TubeScript",
    subtitle: "Summarizer",
    category: "Full-Stack",
    year: "2024",
    status: "Shipped",
    description:
      "A browser extension concept for turning long video transcripts into useful summaries.",
    stack: ["React", "Tailwind CSS", "Flask", "Python", "Manifest V3"],
    tags: ["Full-Stack", "Frontend", "Python", "Browser Tool"],
    metrics: ["Transcript to summary", "Browser extension", "Team project"],
    problem:
      "Long videos can contain useful information, but finding the important parts takes time.",
    whatIDid: [
      "Built the extension interface with React.",
      "Connected a Flask backend for transcript processing.",
      "Focused the UX on reducing information overload.",
      "Worked through frontend-to-backend integration in a team setting.",
    ],
    outcome:
      "Created a usable summarization tool concept for making video content easier to consume.",
    visual: "summary",
    accent: "sky",
  },
  {
    id: "admission",
    title: "Admission Prediction",
    subtitle: "Model",
    category: "AI / ML",
    year: "2023",
    status: "Archived",
    description:
      "A machine-learning model for estimating university admission probability.",
    stack: ["Python", "Pandas", "Scikit-Learn", "Regression"],
    tags: ["AI / ML", "Data", "Regression"],
    metrics: ["Data cleaning", "Visualization", "Prediction model"],
    problem:
      "Admission chances depend on multiple features, and I wanted to model those relationships through data.",
    whatIDid: [
      "Cleaned and explored the admission dataset.",
      "Visualized feature relationships.",
      "Built a multiple linear regression model.",
      "Interpreted how different inputs affected prediction outcomes.",
    ],
    outcome:
      "Strengthened my foundation in applied ML, preprocessing, and model interpretation.",
    visual: "chart",
    accent: "pink",
  },
  {
    id: "qr-chatbot",
    title: "QR Chatbot",
    subtitle: "Generator",
    category: "Full-Stack",
    year: "2023",
    status: "Archived",
    description:
      "A small Flask-based tool that converts text or links into QR codes through a simple chatbot-style interface.",
    stack: ["Python", "Flask", "pyqrcode", "HTML", "CSS"],
    tags: ["Full-Stack", "Python", "Tooling"],
    metrics: ["QR generation", "Flask app", "Utility project"],
    problem:
      "I wanted to build a simple utility that could take user input and instantly convert it into a usable QR code.",
    whatIDid: [
      "Built a Flask backend to receive text and link inputs.",
      "Generated QR codes using Python libraries.",
      "Created a simple frontend flow for quick input and output.",
    ],
    outcome:
      "Helped me practice small full-stack utility development and Python web workflows.",
    visual: "summary",
    accent: "sky",
  },
  {
    id: "sports-platform",
    title: "Sports Community",
    subtitle: "Platform",
    category: "Frontend",
    year: "2023",
    status: "Archived",
    description:
      "A sports community website concept connecting athletes, coaches, and learners through resources and structured information.",
    stack: ["HTML", "CSS", "JavaScript", "UI Design"],
    tags: ["Frontend", "Community", "UI"],
    metrics: ["Sports resources", "Coach discovery", "Frontend build"],
    problem:
      "Many sports learners struggle to find structured beginner-friendly resources and guidance in one place.",
    whatIDid: [
      "Designed pages for sports learning and discovery.",
      "Created frontend layouts for athletes and coaches.",
      "Focused on presenting rules, techniques, and community information clearly.",
    ],
    outcome:
      "Built my early foundation in frontend structure, user flow, and project storytelling.",
    visual: "workflow",
    accent: "gold",
  },
  {
    id: "portfolio-site",
    title: "Personal Portfolio",
    subtitle: "Project Portal",
    category: "Frontend",
    year: "2026",
    status: "In Progress",
    description:
      "A personal portfolio designed as a living project archive with dynamic navigation, timelines, side quests, and a rotating project portal.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion"],
    tags: ["Frontend", "Full-Stack", "Design"],
    metrics: ["Dynamic nav", "Project portal", "Interactive sections"],
    problem:
      "A normal portfolio can feel flat, so I wanted to build one that shows personality while still being useful for recruiters.",
    whatIDid: [
      "Built a one-page portfolio with section-based navigation.",
      "Designed a project portal for scalable project browsing.",
      "Added interactive timeline, guestbook, side quests, and animated UI details.",
    ],
    outcome:
      "Created a portfolio system that can grow as more GitHub projects are added.",
    visual: "workflow",
    accent: "lime",
  },
]