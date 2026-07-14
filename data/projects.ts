export type Project = {
  number: string
  title: string
  type: string
  description: string
  meta: string[]
  accent: string
  problem: string
  outcome: string
  highlights: string[]
  stack: string[]
  link?: string
}

export const projects: Project[] = [
  {
    number: "01",
    title: "Real-Time Transcription\n& Speaker Recognition",
    type: "AI / Audio Intelligence",
    description:
      "A real-time speech system combining Faster-Whisper transcription with a custom ResNet CNN for speaker recognition.",
    meta: ["91.7% accuracy", "F1 0.945", "7 speakers"],
    accent: "border-lime-300",
    problem:
      "Most transcription tools can convert speech to text, but they do not explain who said what. I wanted to combine transcription and speaker identification into one real-time workflow.",
    outcome:
      "The system reached 91.7% speaker-identification accuracy and a 0.945 F1 score across seven speakers. It was published with me as main author in IJCSMC and received first place at Aaveshkar 2024.",
    highlights: [
      "Used Faster-Whisper for live automatic speech recognition.",
      "Built a custom ResNet CNN to classify speakers from MFCC features and delta values.",
      "Used PyAudio and concurrent processing to support live microphone input.",
      "Applied noise augmentation to improve robustness across recordings.",
    ],
    stack: [
      "Python",
      "Faster-Whisper",
      "TensorFlow",
      "ResNet CNN",
      "PyAudio",
      "MFCC",
    ],
  },
  {
    number: "02",
    title: "Micro-Internship\nPlatform",
    type: "Product Engineering",
    description:
      "Full-stack work on a university platform for students, sponsors, and administrators managing real opportunity workflows.",
    meta: ["Next.js", "TypeScript", "PostgreSQL"],
    accent: "border-orange-300",
    problem:
      "A micro-internship platform has multiple user roles, different permissions, and a workflow that must stay clear from discovery through hiring. Small gaps in validation or visibility can create real confusion for students and sponsors.",
    outcome:
      "I contributed product improvements across student, sponsor, and admin workflows, making applications, project management, approvals, and onboarding clearer and more reliable.",
    highlights: [
      "Improved student application views so users could review submitted answers and resumes.",
      "Added clearer API validation and user-facing feedback for incomplete approval fields.",
      "Refined sponsor project workflows, hiring status behavior, and department-level visibility.",
      "Built onboarding tours to guide users through profile and dashboard workflows.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "REST APIs",
      "Zod",
      "React Joyride",
    ],
  },
  {
    number: "03",
    title: "TubeScript\nSummarizer",
    type: "Browser Tool",
    description:
      "A browser extension concept that turns long video transcripts into focused, useful summaries.",
    meta: ["React", "Flask", "NLP"],
    accent: "border-sky-300",
    problem:
      "Long videos often contain useful information, but finding the important parts can take longer than the viewer has. I wanted to turn raw video transcripts into something much easier to scan and use.",
    outcome:
      "The project became a full-stack browser-tool concept with a React interface, a Flask API, and a summarization workflow designed around reducing information overload.",
    highlights: [
      "Built the extension interface with React and modern browser-extension architecture.",
      "Connected a Flask-based API layer for transcript processing.",
      "Designed the experience around converting long source material into concise takeaways.",
      "Worked in a team setting and contributed to the product flow from interface to backend integration.",
    ],
    stack: ["React", "Tailwind CSS", "Flask", "Python", "Manifest V3", "NLP"],
  },
]