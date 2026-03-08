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
      "Building and maintaining the backend of Spirit AI, an emotionally intelligent companion platform",
      "Implementing secure user authentication and efficient database management",
      "Enhancing Spirit AI's ability to connect with users through personality modeling and conversational intelligence",
    ],
  },
  {
    title: "Software Developer",
    org: "Virginia Tech Visionarium Lab",
    date: "Aug – Dec 2025",
    bullets: [
      "Architected scalable backend microservices in Node.js with MongoDB for an aquaponics simulation, enabling 10+ concurrent game mechanics and dynamic interactions between fish, plants, and water systems",
      "Optimized MongoDB schemas and JWT authentication, reducing database query latency by 15%, improving user session security, and supporting seamless progression tracking across multiple gameplay sessions",
      "Automated frontend UI and REST API testing with end-to-end validation scripts, improving deployment reliability and ensuring consistent gameplay under concurrent loads",
    ],
  },
  {
    title: "ML Research Assistant",
    org: "Virginia Tech CS",
    date: "Jan – Aug 2025",
    bullets: [
      "Improved indoor navigation for visually impaired users by 25% via SmartGuide on smart glasses, applying Python computer vision semantic segmentation, depth estimation, feature tracking on 50,000-image dataset",
      "Trained a YOLOv12 object detection model in PyTorch on indoor dataset, focusing on detecting dynamic indoor objects such as furniture, obstacles, and people, improving inference speed for real-time applications",
      "Achieved a 12% increase in precision and 21% improvement in recall, significantly boosting model accuracy and reliability for real-time navigation in complex indoor environments",
    ],
  },
  {
    title: "Undergraduate Teaching Assistant",
    org: "Virginia Tech CS",
    date: "Aug – Dec 2025",
    bullets: [
      "Supported 100+ students in database concepts, including ER modeling, relational design, and SQL querying",
      "Lead discussions and debugging sessions to resolve SQL and database management issues",
      "Guided students through complex database design and implementation challenges during office hours",
    ],
  },
  {
    title: "SWAT Technician",
    org: "Virginia Tech College of Engineering",
    date: "Jan 2024 – Sep 2025",
    bullets: [
      "Resolved 200+ software incidents, maintaining a high-uptime environment for university faculty and students",
      "Streamlined IT service delivery via ServiceNow, maintaining a 95%+ resolution rate for network and OS issues",
      "Engineered troubleshooting workflows that reduced recurring software ticket volume by 20%",
    ],
  },
];
