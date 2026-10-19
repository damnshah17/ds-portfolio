export type WorkProject = {
  id: string
  title: string
  subtitle: string
  category: string
  year: string
  status: "Professional work" | "Personal project" | "Research prototype" | "In Progress" | "Simulation" | "Training" | "Concept / prototype" | "Archived"
  collection: "featured" | "systems" | "archive" | "hidden"
  description: string
  stack: string[]
  tags: string[]
  metrics: string[]
  problem: string
  whatIDid: string[]
  outcome: string
  tradeoffs: string[]
  architecture?: string[]
  relatedExperience?: boolean
  accent: "lime" | "gold" | "sky" | "pink" | "cream"
  githubUrl?: string
  liveUrl?: string
  publicationUrl?: string
}

export const projectFilters = ["All", "Full-Stack", "Backend / Real-Time", "AI / ML", "Systems / Embedded"] as const
export type ProjectFilter = (typeof projectFilters)[number]

export const workProjects: WorkProject[] = [
  {
    "id": "microinternship",
    "title": "Watson Tech Talent",
    "subtitle": "Micro-Internship Platform",
    "category": "Full-Stack",
    "year": "2026",
    "status": "Professional work",
    "description": "Good university projects need the right people. Watson Tech Talent brings opportunities, applications, and the teams behind them into one place.",
    "stack": [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "GitHub Actions"
    ],
    "tags": [
      "Full-Stack",
      "Product",
      "Next.js",
      "PostgreSQL"
    ],
    "metrics": [
      "Student / sponsor / admin",
      "BM25 applicant ranking"
    ],
    "problem": "A faculty project and a student looking for hands-on experience should be a natural match. Getting them together takes more than a listing: sponsors need useful applications, students need clear next steps, and administrators need a way to keep everything moving.",
    "whatIDid": [
      "My work on Watson Tech Talent spans that journey, from student applications to sponsor reviews and admin operations. I contributed role-based workflows and authentication so each person sees the tools and information relevant to their part of the process.",
      "To make reviewing applications more useful, I implemented BM25 ranking across resumes and application responses against project requirements. I also built segmented notifications and admin tools to reduce the manual work around the marketplace."
    ],
    "outcome": "The notification workflows reduced manual outreach by 80%, and admin operations reduced routine developer intervention by approximately 60%. For me, the project connects product decisions with the day-to-day work of keeping university software useful.",
    "accent": "gold",
    "collection": "featured",
    "tradeoffs": [
      "The less visible work mattered just as much: reusable frontend components, consistent PostgreSQL migrations, and automated deployments made it easier to keep improving the platform alongside the university team."
    ],
    "relatedExperience": true
  },
  {
    "id": "schrodingers-human",
    "title": "Schrödinger’s Human",
    "subtitle": "Human or AI?",
    "category": "Backend / Real-Time",
    "year": "",
    "status": "Personal project",
    "description": "You meet a stranger, have a conversation, and make a guess: human or AI? Behind that simple idea is a chat system built to keep the conversation intact.",
    "stack": [
      "Node.js",
      "TypeScript",
      "Socket.IO",
      "Redis",
      "PostgreSQL",
      "Python / FastAPI"
    ],
    "tags": [
      "Backend / Real-Time"
    ],
    "metrics": [
      "Local: 100 simulated clients",
      "Single process: 118–138 ms p95"
    ],
    "problem": "The experiment starts with a question: how much can you learn about someone from a conversation alone? I wanted human and AI partners to share the same chat experience, with the reveal coming only after the participant makes a guess.",
    "whatIDid": [
      "I built anonymous sessions and Redis-backed matchmaking to bring participants together, then used Socket.IO for live conversation and PostgreSQL for its history. Client retry identifiers let a message survive a shaky connection without being saved twice.",
      "The AI participant runs through a Python/FastAPI service, using conversation history and persona-based prompts. Chat authority stays in Node.js: the AI service generates a reply, while the conversation system decides whether that reply still belongs."
    ],
    "outcome": "Local load tests reached 118–138 ms p95 delivery with 100 simulated clients across 50 conversations on one API process. Across the measured runs, all 4,080 messages were delivered and persisted. A separate retry exercise produced no duplicate saved messages across 100 cross-instance retries.",
    "tradeoffs": [
      "A reply can become outdated while it is being generated. Durable leases and history checks keep a slow response from being published into a conversation that has already moved on.",
      "Cross-process delivery is the next performance challenge: periodic reconciliation kept histories consistent, but was slower than delivery within one API process."
    ],
    "accent": "lime",
    "collection": "featured"
  },
  {
    "id": "gamevault",
    "title": "GameVault",
    "subtitle": "Game discovery & recommendations",
    "category": "Full-Stack",
    "year": "",
    "status": "Personal project",
    "description": "For the moments when you know what kind of game you want, but not its name. GameVault pairs catalog browsing with recommendations shaped by your preferences.",
    "stack": [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "RAWG API",
      "OpenAI API"
    ],
    "tags": [
      "Full-Stack"
    ],
    "metrics": [
      "Local discovery LCP: −31.5%",
      "Typing requests: 9 → 1"
    ],
    "problem": "A large game catalog is useful when you know what to search for. I wanted to also support the less precise starting point: a mood, a favorite game, or a combination of genres that is hard to express through filters alone.",
    "whatIDid": [
      "I built discovery around RAWG data, with shareable searches, filters, game details, and favorites that stay in the browser. Next.js renders the initial catalog, and RTK Query handles the interactive browsing state without duplicating that data.",
      "For recommendations, OpenAI turns a request into structured preferences. The app then retrieves actual RAWG candidates and ranks them with explanations drawn from their metadata, keeping the suggestions connected to real games."
    ],
    "outcome": "In five-run local mobile Lighthouse comparisons, discovery-page LCP improved from 5.38 to 3.69 seconds, a 31.5% reduction. A typing scenario went from nine browser requests to one. The detail page still needs attention: its LCP moved from 2.82 to 3.33 seconds, so the discovery gain is only one part of the performance story.",
    "tradeoffs": [
      "Typing should feel responsive without firing a request on every keystroke. A short debounce and query-cache reuse address that, while responsive images and lazy loading reduce what the browser has to download."
    ],
    "accent": "sky",
    "collection": "featured"
  },
  {
    "id": "rtsr",
    "title": "Real-Time Transcription",
    "subtitle": "& Speaker Recognition",
    "category": "AI / ML",
    "year": "2024",
    "status": "Research prototype",
    "description": "A transcript tells you what was said. This project adds the other half of the conversation: who said it.",
    "stack": [
      "Python",
      "Faster-Whisper",
      "TensorFlow",
      "ResNet CNN",
      "PyAudio",
      "MFCC"
    ],
    "tags": [
      "AI / ML",
      "Research",
      "Audio"
    ],
    "metrics": [
      "7-speaker evaluation",
      "Reported accuracy: 91.7%"
    ],
    "problem": "Following a conversation gets harder when the words arrive without a speaker attached. The research explored bringing transcription and speaker recognition into the same live-audio workflow.",
    "whatIDid": [
      "I worked on the connection between Faster-Whisper transcription and a custom ResNet CNN for speaker identification. Short audio clips become MFCC features, including changes over time, which the recognition model uses to distinguish speakers.",
      "Live microphone capture and concurrent processing connect the two pieces, so the system can work through incoming audio rather than relying only on prerecorded clips."
    ],
    "outcome": "The seven-speaker evaluation reported 91.7% speaker-recognition accuracy and a weighted F1 of approximately 0.945. The work became a co-authored IJCSMC publication and received first place at Aaveshkar and a top-25 finish out of 613 at the SAP Innovation Marathon.",
    "accent": "lime",
    "collection": "featured",
    "tradeoffs": [
      "Speech-to-text and speaker identification answer different questions. Keeping their processing and evaluation distinct made it possible to understand which part of the system needed improvement."
    ],
    "githubUrl": "https://github.com/damnshah17/Real-Time-Transcription-with-Speaker-Recognition",
    "publicationUrl": "https://ijcsmc.com/docs/papers/September2024/V13I9202401.pdf"
  },
  {
    "id": "coursepilot-ai",
    "title": "CoursePilot AI",
    "subtitle": "Learning platform foundation",
    "category": "Full-Stack",
    "year": "",
    "status": "In Progress",
    "description": "Course material should be the starting point for studying, not another folder to get lost in. CoursePilot is my evolving workspace for that idea.",
    "stack": [
      "React",
      "Redux Toolkit",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Docker"
    ],
    "tags": [
      "Full-Stack"
    ],
    "metrics": [
      "Authentication foundation",
      "Separate API / worker"
    ],
    "problem": "The goal is to turn instructor-provided material into a guided learning experience. I started with the application underneath it: how people sign in, how roles are separated, where data lives, and where longer-running work belongs.",
    "whatIDid": [
      "I built a React and Node.js foundation around Prisma and PostgreSQL, with authentication and role checks. Shared configuration keeps the web app, API, and worker aligned.",
      "Redis and BullMQ provide a separate background-worker foundation, while Docker keeps the services in a consistent development environment. That gives future course-processing features somewhere to grow without putting all the work inside an interactive request."
    ],
    "outcome": "CoursePilot now has the authentication, data, and service structure to build on. Course-grounded tutoring and document ingestion are the next layer of the project.",
    "tradeoffs": [
      "Separating the API and worker introduces another service to manage, but gives each a clear responsibility. The current focus is a dependable foundation for the learning tools that come next."
    ],
    "accent": "gold",
    "collection": "featured",
    "githubUrl": "https://github.com/damnshah17/coursepilot-ai"
  },
  {
    "id": "industrial-workcell",
    "title": "Industrial Robotic",
    "subtitle": "Workcell Controller",
    "category": "Systems / Embedded",
    "year": "",
    "status": "Simulation",
    "description": "Pick a part, inspect it, route it, and recover when something goes wrong. A simulated workcell that connects machine control to an operator’s screen.",
    "stack": [
      "C++20",
      "C# / WPF",
      "ASP.NET Core",
      "TCP IPC",
      "PostgreSQL"
    ],
    "tags": [
      "Systems / Embedded"
    ],
    "metrics": [
      "Simulated devices",
      "Single controller state owner"
    ],
    "problem": "A pick-and-place sequence looks straightforward until a sensor disagrees, motion takes too long, or an operator presses E-stop. I built this simulated workcell to explore how those situations fit into one understandable control system.",
    "whatIDid": [
      "The C++ controller coordinates the robot, conveyor, inspection, and accept/reject sequence through state machines. Hardware interfaces let simulated devices exercise both normal operation and faults without tying the sequence to a particular device.",
      "A WPF console gives the operator a view of the machine through an ASP.NET service. Structured TCP messages connect that service to C++, while PostgreSQL stores operational history."
    ],
    "outcome": "The simulation brings sequencing, inspection, E-stop behavior, and recovery together behind the same operator workflow. It also makes the boundaries between control, orchestration, and presentation tangible.",
    "tradeoffs": [
      "There is one owner of live machine state: the controller. The UI sends intent and displays results; it does not run a second version of the sequence. History is written asynchronously so database delays do not become control delays."
    ],
    "accent": "gold",
    "collection": "systems",
    "githubUrl": "https://github.com/damnshah17/industrial-workcell-controller",
    "architecture": [
      "Operator / WPF console",
      "REST → ASP.NET service",
      "TCP IPC → C++ controller",
      "HAL → simulated robot, conveyor, sensors"
    ]
  },
  {
    "id": "embedded-motion",
    "title": "Real-Time Embedded",
    "subtitle": "Motion Controller",
    "category": "Systems / Embedded",
    "year": "",
    "status": "Personal project",
    "description": "Moving a motor is only part of the job. This controller explores how motion, feedback, and safety cooperate through a C/FreeRTOS architecture.",
    "stack": [
      "C11",
      "FreeRTOS",
      "PID",
      "STM32 HAL",
      "CMake"
    ],
    "tags": [
      "Systems / Embedded"
    ],
    "metrics": [
      "Host simulation",
      "STM32 firmware cross-build"
    ],
    "problem": "A motion command needs more than a target position. It needs feedback, a reference point, and a clear response when movement stalls or a limit is reached. I wanted to work through those responsibilities as cooperating tasks.",
    "whatIDid": [
      "I separated motion, safety, communications, and telemetry into prioritized FreeRTOS tasks connected through queues and notifications. Encoder feedback feeds PID position control, with PWM driving the simulated motor.",
      "Absolute and relative moves, homing, and latched faults share the same control path. HAL interfaces isolate UART, GPIO, timers, PWM, encoder, and watchdog behavior from the application logic."
    ],
    "outcome": "The controller runs against a deterministic host motor simulation and also cross-compiles for STM32F407VG. Those give me two useful checkpoints: exercising behavior on the host and preparing the firmware for future physical-hardware testing.",
    "tradeoffs": [
      "Safety supervision needs to remain responsive while commands and telemetry are busy. Keeping those responsibilities separate made it possible to exercise interruptions and recovery alongside normal moves."
    ],
    "accent": "cream",
    "collection": "systems",
    "githubUrl": "https://github.com/damnshah17/real-time-embedded-motion-controller"
  },
  {
    "id": "tubescript",
    "title": "TubeScript",
    "subtitle": "Summarizer",
    "category": "Full-Stack",
    "year": "2024",
    "status": "Concept / prototype",
    "description": "An early browser-extension concept for getting the useful parts of a long video into a shorter read.",
    "stack": [
      "React",
      "Tailwind CSS",
      "Flask",
      "Python",
      "Manifest V3"
    ],
    "tags": [
      "Full-Stack",
      "Frontend",
      "Python",
      "Browser Tool"
    ],
    "metrics": [
      "Browser-extension concept"
    ],
    "problem": "A useful explanation can be buried inside a long video. TubeScript explores a simpler route from the video transcript to something a viewer can scan.",
    "whatIDid": [
      "The project concept pairs a React browser-extension interface with a Flask transcript-processing backend. The idea is to keep the interaction close to the video while handing the text-processing work to a separate service."
    ],
    "outcome": "An earlier exploration of browser-extension UX and frontend-to-backend boundaries, kept here as a concept/prototype.",
    "accent": "sky",
    "collection": "archive",
    "tradeoffs": []
  },
  {
    "id": "jpmorgan-simulation",
    "title": "JPMorganChase",
    "subtitle": "Forage Job Simulation",
    "category": "Backend",
    "year": "2025",
    "status": "Training",
    "description": "Following a transaction from a Kafka message to a saved balance, through a backend training exercise on Forage.",
    "stack": [
      "Java",
      "Spring Boot",
      "Kafka",
      "Spring Data JPA",
      "H2",
      "Maven"
    ],
    "tags": [
      "Backend",
      "Java",
      "Kafka",
      "Spring Boot"
    ],
    "metrics": [
      "Training exercise",
      "Kafka / Spring Boot"
    ],
    "problem": "This job simulation offered a concrete way to explore a message-driven backend: receive a transaction, decide whether it is valid, and make the resulting balance available through an API.",
    "whatIDid": [
      "I connected a Kafka consumer to a Spring Boot service, then worked through transaction validation and persistence with Spring Data JPA and H2.",
      "An external incentive API and a balance endpoint completed the flow, connecting asynchronous messages with the request-and-response side of the service."
    ],
    "outcome": "The exercise helped me connect messaging, persistence, and API boundaries in one transaction workflow.",
    "accent": "cream",
    "collection": "archive",
    "tradeoffs": []
  },
  {
    "id": "admission",
    "title": "Admission Prediction",
    "subtitle": "Model",
    "category": "AI / ML",
    "year": "2023",
    "status": "Archived",
    "description": "An early ML project about making sense of admissions data before trying to predict from it.",
    "stack": [
      "Python",
      "Pandas",
      "Scikit-Learn",
      "Regression"
    ],
    "tags": [
      "AI / ML",
      "Data",
      "Regression"
    ],
    "metrics": [
      "Preprocessing",
      "Regression baseline"
    ],
    "problem": "I wanted to understand how several applicant features relate to an admission estimate, and how much of the work happens before fitting a model.",
    "whatIDid": [
      "I cleaned the dataset and visualized the relationships between features, then used multiple linear regression as a readable baseline.",
      "Interpreting the model’s inputs and outputs was as much a part of the exercise as generating a prediction."
    ],
    "outcome": "This became a practical introduction to preprocessing, exploratory analysis, and interpreting a regression model.",
    "accent": "pink",
    "collection": "archive",
    "tradeoffs": []
  },
  {
    "id": "sports-platform",
    "title": "Sports Community",
    "subtitle": "Platform",
    "category": "Frontend",
    "year": "2023",
    "status": "Concept / prototype",
    "description": "An early frontend concept for helping sports learners find resources, techniques, and coaching information in one place.",
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "UI Design"
    ],
    "tags": [
      "Frontend",
      "Community",
      "UI"
    ],
    "metrics": [
      "Sports resources",
      "Coach discovery",
      "Frontend build"
    ],
    "problem": "Starting a sport often means piecing together rules, practice advice, and coaching options from different places. This concept brought those starting points into a shared interface.",
    "whatIDid": [
      "I designed frontend pages around learning and discovery, organizing information for athletes and coaches rather than presenting everything as one long resource list."
    ],
    "outcome": "The project gave me an early way to practice page structure, navigation, and turning a broad idea into a usable interface.",
    "accent": "gold",
    "collection": "archive",
    "tradeoffs": []
  },
  {
    "id": "portfolio-site",
    "title": "Personal Portfolio",
    "subtitle": "Project Portal",
    "category": "Frontend",
    "year": "2026",
    "status": "In Progress",
    "description": "A home for the things I build and the person building them: engineering stories, a timeline, and a few deliberately unnecessary side quests.",
    "stack": [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion"
    ],
    "tags": [
      "Frontend",
      "Full-Stack",
      "Design"
    ],
    "metrics": [
      "Dynamic nav",
      "Project portal",
      "Interactive sections"
    ],
    "problem": "I wanted a portfolio that makes the engineering easy to find without losing the interests and experiences around it.",
    "whatIDid": [
      "I used Next.js and shared content data to connect project cards, detail views, and the journey section. Filters keep the work easy to explore, while keyboard-accessible dialogs provide room for the longer stories.",
      "The side quests and guestbook bring the personal side into the same design, with animation adding small moments of character."
    ],
    "outcome": "A portfolio I can keep extending as the work changes, with space for both technical detail and the occasional internet joke.",
    "accent": "lime",
    "collection": "archive",
    "tradeoffs": [],
    "githubUrl": "https://github.com/damnshah17/ds-portfolio"
  },
  {
    "id": "qr-chatbot",
    "title": "QR Code",
    "subtitle": "Generator",
    "category": "Full-Stack",
    "year": "2023",
    "status": "Archived",
    "description": "A small Flask utility for generating QR codes from text or links.",
    "stack": [
      "Python",
      "Flask",
      "pyqrcode",
      "HTML",
      "CSS"
    ],
    "tags": [
      "Full-Stack",
      "Python",
      "Tooling"
    ],
    "metrics": [
      "QR generation",
      "Flask app",
      "Utility project"
    ],
    "problem": "I wanted to build a simple utility that could take user input and instantly convert it into a usable QR code.",
    "whatIDid": [
      "Built a Flask backend to receive text and link inputs.",
      "Generated QR codes using Python libraries.",
      "Created a simple frontend flow for quick input and output."
    ],
    "outcome": "Helped me practice small full-stack utility development and Python web workflows.",
    "accent": "sky",
    "collection": "hidden",
    "tradeoffs": []
  }
]
