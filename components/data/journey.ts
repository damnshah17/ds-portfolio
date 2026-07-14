export type JourneyItem = {
  id: string
  period: string
  duration: string
  title: string
  organization: string
  type: "experience" | "education" | "simulation" | "leadership" | "milestone"
  location: string
  mode: string
  status?: "present" | "past"
  description: string
  details: string[]
  learned: string
  skills: string[]
  accent: "lime" | "gold" | "cream"
}

export type Course = {
  code: string
  title: string
  semester: string
  note: string
}

export const journeyItems: JourneyItem[] = [
  {
    id: "wcac-software-developer",
    period: "Dec 2025 - Present",
    duration: "8 mos",
    title: "Software Developer - WCAC & Watson School of Computing",
    organization:
      "Thomas J. Watson College of Engineering and Applied Science, Binghamton University",
    type: "experience",
    location: "Vestal, New York, United States",
    mode: "Internship · On-site",
    status: "present",
    description:
      "Helping design and build a university-wide platform that connects students with short-term, skill-based technical projects.",
    details: [
      "Work across the full stack using Next.js, React, TypeScript, and PostgreSQL.",
      "Implemented student, sponsor, and admin workflows for a multi-role platform.",
      "Built secure authentication flows, role-based access behavior, dashboards, and approval workflows.",
      "Worked on project lifecycle states, application visibility, validation rules, onboarding tours, and status management.",
      "Improved usability and reliability for a platform expected to support 3000+ users.",
    ],
    learned:
      "This role taught me how production-oriented systems need more than working features. Clean architecture, access control, usability, and maintainability matter just as much as shipping quickly.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "REST APIs",
      "Role-Based Access",
      "Zod",
      "Product Workflows",
    ],
    accent: "lime",
  },
  {
    id: "binghamton-tech-support",
    period: "Jun 2025 - Present",
    duration: "1 yr 2 mos",
    title: "Tech Support - Student Assistant",
    organization: "Binghamton University",
    type: "experience",
    location: "Binghamton, New York, United States",
    mode: "Part-time · On-site",
    status: "present",
    description:
      "Provide technical support for campus computing environments across software, account access, authentication, devices, printers, and network issues.",
    details: [
      "Resolve 100+ weekly requests related to software issues, network authentication, device connectivity, and account access.",
      "Troubleshoot Windows-based environments, login failures, peripherals, shared devices, and computer lab systems.",
      "Maintain and support 40+ printers and lab systems across campus computing pods.",
      "Communicate technical solutions clearly to students, faculty, and staff with different levels of technical comfort.",
    ],
    learned:
      "This role strengthened my ability to diagnose unfamiliar problems quickly, stay calm under pressure, and explain technical issues without making users feel lost.",
    skills: [
      "IT Support",
      "Troubleshooting",
      "Windows",
      "Networking",
      "Customer Support",
      "Printers",
    ],
    accent: "gold",
  },
  {
    id: "binghamton-ms",
    period: "Jan 2025 - Dec 2026",
    duration: "In progress",
    title: "Master of Science in Computer Science",
    organization: "Binghamton University",
    type: "education",
    location: "Binghamton, New York, United States",
    mode: "Graduate Program · Artificial Intelligence Track",
    status: "present",
    description:
      "Pursuing an MS in Computer Science with a focus on scalable software systems, applied AI, and machine learning.",
    details: [
      "Maintaining a 3.97/4.0 GPA while balancing graduate coursework, software development, and technical support work.",
      "Coursework includes Design and Analysis of Algorithms, Systems Programming, Deep Learning, Computer Vision, and AI-focused subjects.",
      "Building stronger foundations in data structures, optimization, model development, and production-grade engineering.",
    ],
    learned:
      "Graduate school has helped me connect theory with real systems, especially in the space between applied AI and software engineering.",
    skills: [
      "Algorithms",
      "Deep Learning",
      "Computer Vision",
      "Systems",
      "Machine Learning",
      "AI",
    ],
    accent: "cream",
  },
  {
    id: "jpmorgan-forage",
    period: "Nov 2025",
    duration: "1 mo",
    title: "JPMorganChase - Software Engineering Job Simulation",
    organization: "Forage",
    type: "simulation",
    location: "United States",
    mode: "Remote",
    description:
      "Completed a backend-focused software engineering simulation involving Kafka, Spring Boot, transaction processing, and REST API development.",
    details: [
      "Integrated Kafka into a Spring Boot microservice to consume and deserialize transaction messages.",
      "Implemented transaction validation and persistence using Spring Data JPA and an H2 SQL database.",
      "Modeled user records, updated balances, and connected transaction workflows to relational data.",
      "Connected the service to an external REST Incentive API using RestTemplate.",
      "Built a REST endpoint for querying user balances and verified behavior through Maven tests and debugger inspection.",
    ],
    learned:
      "This simulation helped me understand backend service boundaries, message-driven workflows, and how financial transaction systems depend on reliable validation and persistence.",
    skills: [
      "Spring Boot",
      "Kafka",
      "Java",
      "Spring Data JPA",
      "REST APIs",
      "H2 Database",
      "Maven",
    ],
    accent: "lime",
  },
  {
    id: "konze-developer-internship",
    period: "Jun 2024 - Dec 2024",
    duration: "7 mos",
    title: "Developer Internship",
    organization: "KONZE",
    type: "experience",
    location: "Ahmedabad, Gujarat, India",
    mode: "Internship · On-site",
    description:
      "Contributed to KonDesk, a cloud-based CRM platform for education and migration consultants.",
    details: [
      "Built and improved frontend features using React.js.",
      "Integrated backend services through Node.js and Express REST APIs.",
      "Worked on client records, workflow tracking, communication pipelines, and usability improvements.",
      "Focused on responsive UI behavior and cleaner data handling across the platform.",
    ],
    learned:
      "This role strengthened my practical full-stack development experience and showed me how software directly affects business productivity.",
    skills: [
      "React.js",
      "Node.js",
      "Express",
      "REST APIs",
      "Frontend Development",
      "CRM Systems",
    ],
    accent: "gold",
  },
  {
    id: "rushiraj-foundation",
    period: "Jan 2021 - Dec 2024",
    duration: "4 yrs",
    title: "Head Coach and Assistant Manager",
    organization: "RUSHIRAJ FOUNDATION",
    type: "leadership",
    location: "Ahmedabad, Gujarat, India",
    mode: "Full-time · On-site",
    description:
      "Led martial arts training, instructor coordination, student mentorship, and operational support across a large coaching environment.",
    details: [
      "Mentored over 1,000 students in martial arts with a focus on discipline, confidence, and personal growth.",
      "Coordinated training quality and schedules across a team of 25 instructors.",
      "Helped organize large-scale events, community programs, and outreach initiatives.",
      "Contributed to engagement growth by supporting program quality, communication, and event execution.",
    ],
    learned:
      "This role built my leadership foundation. It taught me how to manage people, communicate clearly, take responsibility, and stay consistent over long periods.",
    skills: [
      "Leadership",
      "Team Management",
      "Mentorship",
      "Operations",
      "Communication",
      "Event Planning",
    ],
    accent: "cream",
  },
  {
    id: "edunet-aiml",
    period: "Jan 2024 - Apr 2024",
    duration: "4 mos",
    title: "AI / ML Intern",
    organization: "Edunet Foundation",
    type: "experience",
    location: "Ahmedabad, Gujarat, India",
    mode: "Internship · On-site",
    description:
      "Worked on deep learning models, computer vision workflows, IoT exposure, and AI-driven applications as part of a competitive cohort.",
    details: [
      "Designed and trained models using TensorFlow, Keras, and OpenCV.",
      "Worked on preprocessing, data augmentation, hyperparameter tuning, dropout regularization, and validation monitoring.",
      "Achieved 90%+ model accuracy and ranked among top performers based on evaluation quality.",
      "Contributed to an AI-based communication system by modularizing components and improving training/evaluation flow.",
      "Gained hands-on exposure to Raspberry Pi, sensor interfacing, and real-time data acquisition.",
    ],
    learned:
      "This internship made AI feel practical. I learned how model quality depends on data, tuning, evaluation, and the engineering around the model.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Raspberry Pi",
      "IoT",
    ],
    accent: "lime",
  },
  {
    id: "brainybeam-ml",
    period: "Jun 2023 - Jul 2023",
    duration: "2 mos",
    title: "Machine Learning Intern",
    organization: "BrainyBeam Technologies Pvt. Ltd.",
    type: "experience",
    location: "Ahmedabad, Gujarat, India",
    mode: "Internship · On-site",
    description:
      "Worked on machine learning model development, data preprocessing, feature engineering, experimentation, and evaluation.",
    details: [
      "Cleaned and transformed raw datasets for training pipelines.",
      "Built and trained models using Python-based ML frameworks.",
      "Worked with Scikit-Learn, TensorFlow, Pandas, and NumPy.",
      "Used cross-validation and metric analysis to evaluate model performance and reduce overfitting.",
      "Collaborated with senior engineers to understand business requirements and translate them into technical workflows.",
    ],
    learned:
      "This role helped me understand the full ML workflow from messy data to experimentation, evaluation, and refinement.",
    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-Learn",
      "TensorFlow",
      "Feature Engineering",
    ],
    accent: "gold",
  },
]

export const courses: Course[] = [
  {
    code: "CS 580E",
    title: "Numerical Algorithms",
    semester: "Fall 2025",
    note: "A deeper look at how computational methods behave when math meets real machines.",
  },
  {
    code: "CS 544",
    title: "Deep Learning",
    semester: "Fall 2025",
    note: "Expanded how I think about neural networks beyond simply training a model.",
  },
  {
    code: "CS 551",
    title: "Programming for the Web",
    semester: "Fall 2025",
    note: "Helped connect frontend decisions, backend behavior, and usable product design.",
  },
  {
    code: "CS 565",
    title: "Introduction to AI",
    semester: "Fall 2025",
    note: "Built stronger foundations for reasoning, search, and intelligent systems.",
  },
  {
    code: "CS",
    title: "Design & Analysis of Algorithms",
    semester: "Spring 2025",
    note: "The course that keeps reminding me that elegant code still needs a good algorithm.",
  },
  {
    code: "CS",
    title: "Machine Learning",
    semester: "Spring 2025",
    note: "Learned that model performance starts with the data and the question, not the library.",
  },
  {
    code: "CS",
    title: "Data Mining",
    semester: "Spring 2025",
    note: "Worked through patterns, preprocessing, and the messy reality behind datasets.",
  },
  {
    code: "CS",
    title: "Programming Languages",
    semester: "Spring 2025",
    note: "Made me think more carefully about how languages shape the way we write software.",
  },
]