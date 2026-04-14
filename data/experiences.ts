export interface Experience {
  title: string;
  org: string;
  date: string;
  bullets: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    title: "Software Developer",
    org: "Virginia Tech Visionarium Lab",
    date: "Aug – Dec 2025",
    bullets: [
      "Developed RESTful backend APIs for an aquaponics simulation web application using Node.js and Express.js, enabling dynamic interactions between fish, plant, and water systems and supporting seamless frontend integration",
      "Designed and optimized relational database schemas in PostgreSQL, improving query efficiency by 15% and ensuring reliable storage and retrieval of simulation data under concurrent usage",
      "Conducted end-to-end testing of API endpoints using automated validation scripts, improving backend reliability and ensuring consistent performance across multiple user sessions",
    ],
  },
  {
    title: "ML Research Assistant",
    org: "Virginia Tech CS",
    date: "Jan – Aug 2025",
    bullets: [
      "Improved indoor navigation for visually impaired users by 25% via SmartGuide, integrating semantic segmentation, depth estimation, and feature tracking to build a computer vision pipeline trained on 50,000 images",
      "Trained a YOLOv12 object detection model in PyTorch on the large-scale dataset, focusing on detecting dynamic indoor objects such as furniture, obstacles, and people, while improving inference speed for real-time applications",
      "Achieved a 12% increase in precision and 21% improvement in recall, significantly boosting model accuracy and reliability for real-time navigation in complex indoor environments",
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
