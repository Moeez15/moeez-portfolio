export interface Project {
  name: string;
  description?: string;
  tech: string[];
  bullets: string[];
  liveUrl: string | null;
  githubUrl: string | null;
}

export const PROJECTS: Project[] = [
  {
    name: "InvestQuest",
    description: "A gamified stock-market learning app that lets users simulate trading with quests and leveling to boost engagement. Integrated machine learning models for real-time trend and risk predictions, and interactive visualizations for quick portfolio insights.",
    tech: ["Python", "FastAPI", "MySQL", "scikit-learn", "Keras", "Docker"],
    bullets: [
      "Built a gamified stock-market learning app with Python, FastAPI, and MySQL, enabling simulated trading and boosting user engagement by 30% through quests and leveling features",
      "Integrated ML models (Random Forest + LSTM) using scikit-learn and Keras to provide real-time trend and risk predictions, improving accuracy by 18%",
      "Implemented interactive data visualizations with Matplotlib and pandas to display portfolio performance and risk insights, reducing user analysis time by 40%",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/Moeez15/InvestQuest",
  },
  {
    name: "TravelMate",
    description: "An AI travel assistant that translates 20+ languages in real-time and delivers personalized restaurant, attraction, and activity recommendations, reducing trip planning time by 30%.",
    tech: ["Node.js", "Express.js", "React.js", "GPT-4", "LangChain"],
    bullets: [
      "Built an AI travel assistant translating 20+ languages in real-time, enabling seamless communication abroad",
      "Delivered personalized restaurant, attraction, and activity recommendations for 1000+ users using local data",
      "Integrated AI models and APIs to create a responsive web experience, reducing planning time by 30%",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/Moeez15/TravelMate",
  },
];
