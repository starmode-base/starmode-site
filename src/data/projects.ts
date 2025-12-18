export type ProjectType = "library" | "app" | "template";
export type ProjectStatus = "pre-alpha";

export interface Project {
  name: string;
  displayName: string;
  description: string;
  type: ProjectType;
  status?: ProjectStatus;
  github: string;
  npm?: string;
  site?: string;
}

export const projects: Project[] = [
  // Libraries
  {
    name: "auth",
    displayName: "@starmode/auth",
    description: "The LLM-friendly auth library. Passkeys + OTP.",
    type: "library",
    status: "pre-alpha",
    github: "https://github.com/starmode-base/auth",
    npm: "https://www.npmjs.com/package/@starmode/auth",
  },
  {
    name: "neon-testing",
    displayName: "neon-testing",
    description: "Vitest utility for integration tests with Neon Postgres.",
    type: "library",
    github: "https://github.com/starmode-base/neon-testing",
    npm: "https://www.npmjs.com/package/neon-testing",
  },
  {
    name: "pimdb",
    displayName: "pimdb",
    description: "Lightweight persisted in-memory database.",
    type: "library",
    github: "https://github.com/lirbank/pimdb",
    npm: "https://www.npmjs.com/package/pimdb",
  },
  {
    name: "google-calendar-url",
    displayName: "google-calendar-url",
    description: "Generate shareable URLs for Google Calendar events.",
    type: "library",
    github: "https://github.com/lirbank/google-calendar-url",
    npm: "https://www.npmjs.com/package/google-calendar-url",
  },

  // Apps
  {
    name: "touch",
    displayName: "Touch",
    description:
      "A nano CRM for independent consultants and founders who value fewer, stronger relationships.",
    type: "app",
    status: "pre-alpha",
    github: "https://github.com/starmode-base/touch",
    site: "https://touch.starmode.dev",
  },
  {
    name: "heartbeats",
    displayName: "Heartbeats",
    description:
      "The first humanless bookkeeper. AI-first accounting without humans behind the scenes.",
    type: "app",
    status: "pre-alpha",
    github: "https://github.com/starmode-base/heartbeats",
    site: "https://heartbeats.co",
  },

  // Templates
  {
    name: "template-tanstack-start",
    displayName: "template-tanstack-start",
    description: "TanStack Start app template with Neon, Drizzle, Vercel.",
    type: "template",
    github: "https://github.com/starmode-base/template-tanstack-start",
    site: "https://template-tanstack-start.vercel.app",
  },
];

export const libraries = projects.filter((p) => p.type === "library");
export const apps = projects.filter((p) => p.type === "app");
export const templates = projects.filter((p) => p.type === "template");
