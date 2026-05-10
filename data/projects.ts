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
    description: "A full-stack travel planner that turns scattered trip ideas into structured itineraries — letting users map out destinations, build day-by-day plans, and keep every booking, note, and stop in one place.",
    tech: ["Node.js", "Express.js", "React", "PostgreSQL", "SQL"],
    bullets: [],
    liveUrl: null,
    githubUrl: "https://github.com/Moeez15/onthefly",
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
