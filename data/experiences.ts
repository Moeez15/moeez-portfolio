export interface Experience {
  title: string;
  org: string;
  date: string;
  bullets: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    title: "Product Manager",
    org: "Wakao Technologies",
    date: "May 2026 – Present",
    bullets: [
      "Developing AI agents to automate B2B outreach and CRM workflows targeting businesses and community",
      "Running growth experiments and tracking CRM metrics to optimize user acquisition and outreach conversion rates",
      "Collaborating with leadership to build scalable growth systems and delivering weekly reports on results and insights",
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
      "Built SmartGuide, a real-time computer vision pipeline for indoor navigation for visually impaired users, combining semantic segmentation, depth estimation, and feature tracking across a 50,000-image dataset",
      "Trained and fine-tuned a YOLOv12 object detection model in PyTorch to detect indoor obstacles in real time",
      "Achieved a 12% increase in precision and 21% improvement in recall, reducing missed obstacle detections and improving navigation reliability by 25% in complex indoor environments",
    ],
  },
  {
    title: "Undergraduate Teaching Assistant",
    org: "Virginia Tech CS",
    date: "Aug – Dec 2025",
    bullets: [
      "Supported 100+ students in database concepts, including ER modeling, relational design, and SQL querying",
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
