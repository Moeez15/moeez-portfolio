export interface Experience {
  title: string;
  org: string;
  date: string;
  bullets: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    title: "Software Engineer",
    org: "Spirit AI",
    date: "Mar 2026 – Present",
    bullets: [
      "Building backend for companion platform with scalable systems",
      "Enabling real-time interactions and high-availability services",
    ],
  },
  {
    title: "Software Developer",
    org: "Virginia Tech Visionarium Lab",
    date: "Aug – Dec 2025",
    bullets: [
      "Built Node.js microservices with MongoDB and JWT auth",
      "Reduced latency by 15% and implemented automated testing",
    ],
  },
  {
    title: "ML Research Assistant",
    org: "Virginia Tech CS",
    date: "Jan – Aug 2025",
    bullets: [
      "Improved indoor navigation for visually impaired users by 25%",
      "Leveraged YOLOv12 and Python computer vision pipelines",
    ],
  },
  {
    title: "Undergraduate Teaching Assistant",
    org: "Virginia Tech CS",
    date: "Aug – Dec 2025",
    bullets: [
      "Supported 100+ students with DB concepts, ER modeling, and SQL",
    ],
  },
  {
    title: "SWAT Technician",
    org: "Virginia Tech College of Engineering",
    date: "Jan 2024 – Sep 2025",
    bullets: [
      "Resolved 200+ incidents with 95%+ resolution rate",
      "Reduced recurring tickets by 20% through root cause analysis",
    ],
  },
];
