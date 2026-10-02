export interface Project {
  name: string;
  category: string;
  description: string;
  // Empty when the stack isn't listed anywhere yet
  stack: string[];
  liveUrl: string | null;
  githubUrl: string | null;
}

export const PROJECTS: Project[] = [
  {
    name: "onthefly",
    category: "Full-Stack",
    description: "A full-stack travel planning app for creating trips, browsing destinations, and organizing itineraries. RESTful Express controllers and routers handle trip management, with GitHub OAuth through Passport.js and a normalized PostgreSQL schema for relational trip data.",
    stack: ["JavaScript", "Node.js", "Express.js", "React", "PostgreSQL"],
    liveUrl: "https://onthefly-ai.up.railway.app/",
    githubUrl: "https://github.com/Moeez15/onthefly",
  },
  {
    name: "FitFindr",
    category: "AI Agent",
    description: "An AI agent that searches listings, matches outfits, and generates fit cards from natural language requests. A planning loop selects tools based on prior results and passes state across calls, with per-tool error handling and fallback messaging for empty or invalid results.",
    stack: ["Python", "Gradio", "Groq API"],
    liveUrl: null,
    githubUrl: "https://github.com/Moeez15/fit_findr",
  },
  {
    name: "rulesBot",
    category: "RAG",
    description: "RulesBot answers natural language questions about board game rules using a RAG pipeline.",
    stack: [],
    liveUrl: null,
    githubUrl: "https://github.com/Moeez15/rulesbot",
  },
  {
    name: "unearthed",
    category: "Web App",
    description: "A community-driven gift discovery platform where users share and curate thoughtful gift ideas, filtered by recipient, occasion, and budget — turning crowdsourced taste into personalized recommendations.",
    stack: [],
    liveUrl: null,
    githubUrl: "https://github.com/Moeez15/unearthed",
  },
  {
    name: "plantAdvisor",
    category: "AI Agent",
    description: "A conversational agent that helps users care for their houseplants.",
    stack: [],
    liveUrl: null,
    githubUrl: "https://github.com/Moeez15/plant-advisor",
  },
];
