export interface Project {
  name: string;
  description: string;
  liveUrl: string | null;
  githubUrl: string | null;
}

export const PROJECTS: Project[] = [
  {
    name: "onthefly",
    description: "A full-stack travel planning app that lets users create trips, browse destinations, and organize itineraries with real-time collaboration. Features GitHub OAuth authentication and a normalized relational database for managing trip data.",
    liveUrl: null,
    githubUrl: "https://github.com/Moeez15/onthefly",
  },
  {
    name: "FitFindr",
    description: "An AI-powered outfit recommendation agent that searches listings, matches outfits, and generates fit cards from natural language requests. Uses a planning loop that selects tools based on prior results, passing state across calls without user re-entry.",
    liveUrl: null,
    githubUrl: "https://github.com/Moeez15/FitFindr",
  },
  {
    name: "unearthed",
    description: "A community-driven gift discovery platform where users share and curate thoughtful gift ideas, filtered by recipient, occasion, and budget — turning crowdsourced taste into personalized recommendations.",
    liveUrl: null,
    githubUrl: "https://github.com/Moeez15/unearthed",
  },
];
