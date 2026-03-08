export interface Project {
  name: string;
  tech: string[];
  bullets: string[];
  liveUrl: string | null;
  githubUrl: string | null;
}

export const PROJECTS: Project[] = [
  {
    name: "InvestQuest",
    tech: ["Python", "FastAPI", "MySQL", "scikit-learn", "Keras", "Docker"],
    bullets: [
      "AI-powered investment analysis platform",
      "ML models for portfolio optimization and risk assessment",
      "Containerized microservices architecture",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/Moeez15/InvestQuest",
  },
  {
    name: "TravelMate",
    tech: ["Node.js", "Express.js", "React.js", "GPT-4", "LangChain"],
    bullets: [
      "AI travel planning assistant with itinerary generation",
      "LangChain-powered multi-step reasoning for personalized recommendations",
      "Full-stack web application with real-time chat interface",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/Moeez15/TravelMate",
  },
];
