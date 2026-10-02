export interface Experience {
  title: string;
  org: string;
  location: string;
  date: string;
  stack: string[];
  bullets: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    title: "Software Engineer",
    org: "Stealth Startup",
    location: "Remote",
    date: "Feb 2026 – Present",
    stack: ["Backend APIs", "Authentication", "Database Optimization"],
    bullets: [
      "Built and maintained backend APIs supporting core application functionality and product workflows across 15+ production endpoints, implementing core business logic",
      "Implemented secure authentication and authorization for user access and protected API endpoints",
      "Optimized database queries, indexes, and schema structure, reducing query latency by 30% and improving overall database performance by 20%",
    ],
  },
  {
    title: "Software Engineer",
    org: "South Asian Business Council Of Virginia",
    location: "Herndon, VA",
    date: "May 2026 – Jul 2026",
    stack: ["LangGraph", "LangChain", "Pinecone", "RAG"],
    bullets: [
      "Architected an AI admin platform using RAG and a 4-agent orchestration in LangGraph, automating workflows",
      "Built a RAG pipeline with LangChain and Pinecone across 100+ internal documents, reducing search time by 70%",
      "Developed agents for meeting summaries, email drafting, and social media content generation, saving 5+ hrs/week",
    ],
  },
  {
    title: "Software Engineer",
    org: "Virginia Tech's Visionarium Lab",
    location: "Blacksburg, VA",
    date: "Aug 2025 – Dec 2025",
    stack: ["Node.js", "Express.js", "PostgreSQL", "Jest"],
    bullets: [
      "Developed RESTful backend APIs using Node.js and Express.js for an aquaponics app, serving data to frontend",
      "Optimized PostgreSQL database schemas with normalization and indexing, reducing query response time by 15%",
      "Implemented automated API tests using Jest, achieving 95% endpoint coverage and improving backend reliability",
    ],
  },
  {
    title: "Machine Learning Research Assistant",
    org: "Virginia Tech Department of Computer Science",
    location: "Blacksburg, VA",
    date: "Jan 2025 – Aug 2025",
    stack: ["PyTorch", "YOLOv12", "Computer Vision"],
    bullets: [
      "Improved indoor obstacle-detection reliability by 25% in complex environments by fine-tuning a YOLOv12 object detection model in PyTorch, achieving a 12% increase in precision and 21% improvement in recall",
      "Built SmartGuide, a real-time computer vision pipeline achieving 60ms inference latency on obstacle detection, leveraging depth estimation for spatial awareness in navigation",
      "Collected and cleaned a 10,000-image indoor dataset covering 12 obstacle classes, improving model generalization and cutting false negatives by 15% during real-world testing",
    ],
  },
  {
    title: "Undergraduate Teaching Assistant",
    org: "Virginia Tech Department of Computer Science",
    location: "Blacksburg, VA",
    date: "Aug 2025 – Dec 2025",
    stack: ["SQL", "ER Modeling", "Relational Design"],
    bullets: [
      "Supported 100+ students in learning database concepts such as ER modeling, relational design, and SQL querying",
      "Led discussion and debugging sessions to resolve SQL and database management issues",
      "Guided students through complex database design and implementation challenges during office hours",
    ],
  },
];
