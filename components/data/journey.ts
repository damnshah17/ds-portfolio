export type JourneyItem = {
  id: string
  period: string
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
    "id": "wcac-software-developer",
    "period": "Dec 2025 - Present",
    "title": "Software Engineer",
    "organization": "Watson School of Computing — Binghamton University",
    "type": "experience",
    "location": "Binghamton, New York",
    "mode": "University software engineering",
    "status": "present",
    "description": "Contributing to Watson Tech Talent, the university project marketplace previously described here as the Micro-Internship Platform.",
    "details": [
      "Implemented BM25 applicant ranking and role-based workflows across students, sponsors, and administrators.",
      "Reduced manual outreach by 80% through segmented email and in-app notifications; reduced routine developer intervention by approximately 60% through admin operations tools.",
      "Refactored 80% of the frontend into reusable components, resolved UI defects, and passed WCAG 2.1 accessibility checks.",
      "Standardized PostgreSQL migration workflows and schema consistency, and automated server deployments through GitHub Actions CI/CD.",
      "Collaborated with university IT on infrastructure, integrations, deployment, and operational requirements."
    ],
    "learned": "This role taught me how production-oriented systems need more than working features. Clean architecture, access control, usability, and maintainability matter just as much as shipping quickly.",
    "skills": [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "RBAC",
      "BM25",
      "GitHub Actions"
    ],
    "accent": "lime"
  },
  {
    "id": "konze-developer-internship",
    "period": "Jun 2024 - Dec 2024",
    "title": "Software Engineer Intern",
    "organization": "Konze Pvt Ltd",
    "type": "experience",
    "location": "Ahmedabad, India",
    "mode": "Internship · On-site",
    "description": "Contributed to KonDesk, a cloud-based CRM platform for education and migration consultants.",
    "details": [
      "Contributed to an OCR document-processing pipeline that extracted client-document text and cross-referenced eligibility checklists.",
      "Reproduced and resolved defects across React state, Node.js/Express APIs, and third-party integrations.",
      "Validated fixes through team testing in Git- and Jira-managed Agile sprints."
    ],
    "learned": "This role strengthened my practical full-stack development experience and showed me how software directly affects business productivity.",
    "skills": [
      "React",
      "Node.js",
      "Express",
      "OCR",
      "Git",
      "Jira"
    ],
    "accent": "gold"
  },
  {
    "id": "binghamton-ms",
    "period": "Expected Dec 2026",
    "title": "MS Computer Science — Artificial Intelligence Track",
    "organization": "Binghamton University",
    "type": "education",
    "location": "Binghamton, New York, United States",
    "mode": "Graduate education",
    "status": "present",
    "description": "MS Computer Science, Artificial Intelligence Track. GPA: 3.97/4.0. Expected graduation: December 2026.",
    "details": [
      "Coursework includes systems programming, computer vision, algorithms, deep learning, AI, machine learning, and web programming."
    ],
    "learned": "Graduate school has helped me connect theory with real systems, especially in the space between applied AI and software engineering.",
    "skills": [
      "Algorithms",
      "Deep Learning",
      "Computer Vision",
      "Systems Programming",
      "Machine Learning",
      "AI"
    ],
    "accent": "cream"
  },
  {
    "id": "binghamton-tech-support",
    "period": "Jun 2025 - Present",
    "title": "Tech Support - Student Assistant",
    "organization": "Binghamton University",
    "type": "experience",
    "location": "Binghamton, New York, United States",
    "mode": "Part-time · On-site",
    "status": "present",
    "description": "Provide technical support for campus computing environments across software, account access, authentication, devices, printers, and network issues.",
    "details": [
      "Support campus software, account access, authentication, devices, printers, and network troubleshooting.",
      "Explain technical fixes clearly to students, faculty, and staff."
    ],
    "learned": "This role strengthened my ability to diagnose unfamiliar problems quickly, stay calm under pressure, and explain technical issues without making users feel lost.",
    "skills": [
      "IT Support",
      "Troubleshooting",
      "Windows",
      "Networking",
      "Customer Support",
      "Printers"
    ],
    "accent": "gold"
  },
  {
    "id": "edunet-aiml",
    "period": "Jan 2024 - Apr 2024",
    "title": "AI / ML Intern",
    "organization": "Edunet Foundation",
    "type": "experience",
    "location": "Ahmedabad, Gujarat, India",
    "mode": "Internship · On-site",
    "description": "Worked on model training, preprocessing, and computer vision workflows.",
    "details": [
      "Designed and trained models using TensorFlow, Keras, and OpenCV.",
      "Worked on preprocessing, data augmentation, hyperparameter tuning, dropout regularization, and validation monitoring.",
      "Contributed to an AI-based communication system by modularizing components and improving training/evaluation flow."
    ],
    "learned": "This internship made AI feel practical. I learned how model quality depends on data, tuning, evaluation, and the engineering around the model.",
    "skills": [
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Raspberry Pi",
      "IoT"
    ],
    "accent": "lime"
  },
  {
    "id": "brainybeam-ml",
    "period": "Jun 2023 - Jul 2023",
    "title": "Machine Learning Intern",
    "organization": "BrainyBeam Technologies Pvt. Ltd.",
    "type": "experience",
    "location": "Ahmedabad, Gujarat, India",
    "mode": "Internship · On-site",
    "description": "Worked on machine learning model development, data preprocessing, feature engineering, experimentation, and evaluation.",
    "details": [
      "Cleaned and transformed raw datasets for training pipelines.",
      "Built and trained models using Python-based ML frameworks.",
      "Worked with Scikit-Learn, TensorFlow, Pandas, and NumPy.",
      "Used cross-validation and metric analysis to evaluate model performance and reduce overfitting."
    ],
    "learned": "This role helped me understand the full ML workflow from messy data to experimentation, evaluation, and refinement.",
    "skills": [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-Learn",
      "TensorFlow",
      "Feature Engineering"
    ],
    "accent": "gold"
  },
  {
    "id": "jpmorgan-forage",
    "period": "Nov 2025",
    "title": "JPMorganChase - Software Engineering Job Simulation",
    "organization": "Forage",
    "type": "simulation",
    "location": "United States",
    "mode": "Remote",
    "description": "Completed a backend-focused software engineering simulation involving Kafka, Spring Boot, transaction processing, and REST API development.",
    "details": [
      "Integrated Kafka into a Spring Boot microservice to consume and deserialize transaction messages.",
      "Implemented transaction validation and persistence using Spring Data JPA and an H2 SQL database.",
      "Modeled user records, updated balances, and connected transaction workflows to relational data.",
      "Connected the service to an external REST Incentive API using RestTemplate.",
      "Built a REST endpoint for querying user balances and verified behavior through Maven tests and debugger inspection."
    ],
    "learned": "This simulation helped me understand backend service boundaries, message-driven workflows, and how financial transaction systems depend on reliable validation and persistence.",
    "skills": [
      "Spring Boot",
      "Kafka",
      "Java",
      "Spring Data JPA",
      "REST APIs",
      "H2 Database",
      "Maven"
    ],
    "accent": "lime"
  },
  {
    "id": "rushiraj-foundation",
    "period": "Jan 2021 - Dec 2024",
    "title": "Head Coach and Assistant Manager",
    "organization": "RUSHIRAJ FOUNDATION",
    "type": "leadership",
    "location": "Ahmedabad, Gujarat, India",
    "mode": "Martial arts leadership",
    "description": "Led martial arts training, instructor coordination, student mentorship, and operational support across a large coaching environment.",
    "details": [
      "Mentored martial arts students and coordinated instructor schedules and training quality.",
      "Helped organize events and community programs."
    ],
    "learned": "This role built my leadership foundation. It taught me how to manage people, communicate clearly, take responsibility, and stay consistent over long periods.",
    "skills": [
      "Leadership",
      "Team Management",
      "Mentorship",
      "Operations",
      "Communication",
      "Event Planning"
    ],
    "accent": "cream"
  }
]

export const courses: Course[] = [
  {
    "code": "CS 535",
    "title": "Introduction to Data Mining",
    "semester": "Spring 2025",
    "note": "Worked with data patterns, preprocessing, mining techniques, and the practical messiness behind real datasets."
  },
  {
    "code": "CS 536",
    "title": "Introduction to Machine Learning",
    "semester": "Spring 2025",
    "note": "Built stronger foundations in supervised learning, model evaluation, feature engineering, and applied ML workflows."
  },
  {
    "code": "CS 571",
    "title": "Programming Languages",
    "semester": "Spring 2025",
    "note": "Studied how language design, semantics, and programming models shape the way software is written."
  },
  {
    "code": "CS 575",
    "title": "Design & Analysis of Computer Algorithms",
    "semester": "Spring 2025",
    "note": "Strengthened algorithmic thinking through complexity analysis, design strategies, and proof-based reasoning."
  },
  {
    "code": "CS 544",
    "title": "Programming for the Web",
    "semester": "Fall 2025",
    "note": "Connected frontend behavior, backend design, web architecture, and product-oriented development."
  },
  {
    "code": "CS 551",
    "title": "Systems Programming",
    "semester": "Fall 2025",
    "note": "Worked closer to operating-system-level concepts, low-level programming behavior, and system design fundamentals."
  },
  {
    "code": "CS 565",
    "title": "Introduction to Artificial Intelligence",
    "semester": "Fall 2025",
    "note": "Built foundations in search, reasoning, intelligent agents, and classical AI problem-solving techniques."
  },
  {
    "code": "CS 580E",
    "title": "Introduction to Deep Learning",
    "semester": "Fall 2025",
    "note": "Expanded my understanding of neural networks, deep learning architectures, training behavior, and model evaluation."
  },
  {
    "code": "CS 556",
    "title": "Introduction to Computer Vision",
    "semester": "Spring 2026",
    "note": "Worked with image processing, feature detection, homography, tracking, and visual recognition foundations."
  },
  {
    "code": "CS 595",
    "title": "Termination Project",
    "semester": "Fall 2026",
    "note": "Final project requirement for the MS Computer Science program."
  }
]
