export interface Experience {
  title: string;
  org: string;
  date: string;
  bullets: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    title: "Software Engineer",
    org: "South Asian Business Council Of Virginia",
    date: "May 2026 – Present",
    bullets: [
      "Architected an AI admin platform with RAG and 4-agent orchestration in LangGraph to automate workflows",
      "Built a RAG pipeline with LangChain and Pinecone across 100+ internal documents, reducing search time by 70%",
      "Developed agents for meeting summaries, email drafting, and social media content generation, saving 5+ hrs/week",
    ],
  },
  {
    title: "Software Engineer",
    org: "Virginia Tech Visionarium Lab",
    date: "Aug – Dec 2025",
    bullets: [
      "Developed RESTful backend APIs using Node.js and Express.js for an aquaponics app, serving data to frontend",
      "Optimized PostgreSQL database schemas with normalization and indexing, reducing query response time by 15%",
      "Implemented automated API tests using Jest, achieving 95% endpoint coverage and improving backend reliability",
    ],
  },
  {
    title: "Machine Learning Research Assistant",
    org: "Virginia Tech CS",
    date: "Jan – Aug 2025",
    bullets: [
      "Improved indoor obstacle-detection reliability by 25% in complex environments by fine-tuning a YOLOv12 object detection model in PyTorch, achieving a 12% increase in precision and 21% improvement in recall",
      "Built SmartGuide, a real-time computer vision pipeline achieving 60ms inference latency on obstacle detection, leveraging depth estimation for spatial awareness in navigation",
      "Collected and cleaned a 10,000-image indoor dataset covering 12 obstacle classes, improving model generalization and cutting false negatives by 15% during real-world testing",
    ],
  },
  {
    title: "Undergraduate Teaching Assistant",
    org: "Virginia Tech CS",
    date: "Aug – Dec 2025",
    bullets: [
      "Supported 100+ students to learn database concepts, including ER modeling, relational design, and SQL querying",
      "Led discussions and debugging sessions to resolve SQL and database management issues",
      "Guided students through complex database design and implementation challenges during office hours",
    ],
  },
  {
    title: "SWAT Technician",
    org: "Virginia Tech College of Engineering",
    date: "Jan 2024 – Sep 2025",
    bullets: [
      "Resolved 200+ software issues for faculty and students, ensuring high system uptime",
      "Used ServiceNow to handle IT tickets with a 95%+ resolution rate for network and OS problems",
      "Improved troubleshooting workflows, reducing recurring software-related tickets by 20%",
    ],
  },
];
