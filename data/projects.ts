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
    name: "onthefly",
    description: "",
    tech: ["JavaScript", "Node.js", "Express.js", "React", "PostgreSQL", "SQL", "Git"],
    bullets: [
      "Built a full-stack travel planning app enabling users to create trips, browse destinations and organize itineraries",
      "Developed a RESTful Express API with controllers/routers for trip management and browsing destinations",
      "Implemented GitHub OAuth with Passport.js and a normalized PostgreSQL schema to support relational trip data",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/Moeez15/onthefly",
  },
  {
    name: "FitFindr",
    description: "",
    tech: ["Python", "Gradio", "Groq API"],
    bullets: [
      "Built an AI agent that searches listings, matches outfits, and generates fit cards from natural language requests",
      "Designed a planning loop that selects tools based on prior results, passing state across calls without user re-entry",
      "Implemented per-tool error handling and fallback messaging for empty or invalid results for all three tools",
    ],
    liveUrl: null,
    githubUrl: null,
  },
  {
    name: "unearthed",
    description: "A community-driven gift discovery platform where users share and curate thoughtful gift ideas, filtered by recipient, occasion, and budget — turning crowdsourced taste into personalized recommendations.",
    tech: ["JavaScript", "React", "Node.js", "Express.js", "PostgreSQL", "SQL"],
    bullets: [],
    liveUrl: null,
    githubUrl: "https://github.com/Moeez15/unearthed",
  },
  {
    name: "PawPal",
    description: "An AI-powered pet care companion that builds personalized care routines, tracks feeding, grooming, and vet schedules, and uses Claude to answer pet-specific questions in natural language.",
    tech: ["Python", "Streamlit", "pytest", "Claude API"],
    bullets: [],
    liveUrl: null,
    githubUrl: "https://github.com/Moeez15/PawPal",
  },
  {
    name: "DocuBot",
    description: "A retrieval-augmented documentation assistant that ingests user-uploaded project docs and answers technical questions with grounded, source-cited responses — eliminating hallucinations by anchoring every reply to the underlying content.",
    tech: ["Python", "Flask", "React", "RAG", "Gemini API"],
    bullets: [],
    liveUrl: null,
    githubUrl: "https://github.com/Moeez15/DocuBot",
  },
];
