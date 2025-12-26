type ProjectStatus = "alpha" | "beta" | "rc";

export interface Project {
  name: string;
  displayName: string;
  description: string;
  status?: ProjectStatus;
  owner: string;
  github: string;
  npm?: string;
  site?: string;
}

export const projects = {
  Libraries: [
    {
      name: "auth",
      displayName: "@starmode/auth",
      description: "The LLM-friendly auth library. Passkeys + OTP.",
      status: "alpha",
      owner: "Mikael Lirbank",
      github: "https://github.com/starmode-base/auth",
      npm: "https://www.npmjs.com/package/@starmode/auth",
    },
    {
      name: "neon-testing",
      displayName: "neon-testing",
      description: "Vitest utility for integration tests with Neon Postgres.",
      owner: "Mikael Lirbank",
      github: "https://github.com/starmode-base/neon-testing",
      npm: "https://www.npmjs.com/package/neon-testing",
    },
    {
      name: "pimdb",
      displayName: "pimdb",
      description: "Lightweight persisted in-memory database.",
      status: "alpha",
      owner: "Mikael Lirbank",
      github: "https://github.com/lirbank/pimdb",
      npm: "https://www.npmjs.com/package/pimdb",
    },
    {
      name: "google-calendar-url",
      displayName: "google-calendar-url",
      description: "Generate shareable URLs for Google Calendar events.",
      owner: "Mikael Lirbank",
      github: "https://github.com/lirbank/google-calendar-url",
      npm: "https://www.npmjs.com/package/google-calendar-url",
    },
  ],
  Templates: [
    {
      name: "template-tanstack-start",
      displayName: "template-tanstack-start",
      description: "TanStack Start app template with Neon, Drizzle, Vercel.",
      owner: "Mikael Lirbank",
      github: "https://github.com/starmode-base/template-tanstack-start",
      site: "https://template-tanstack-start.vercel.app",
    },
  ],
  Research: [
    {
      name: "expert-system",
      displayName: "Expert System",
      description:
        "Experimental multi-agent system for complex reasoning tasks.",
      owner: "Spencer Smith",
      github: "https://github.com/starmode-base/expert-system",
    },
    {
      name: "touch",
      displayName: "Touch",
      description:
        "A nano CRM with E2EE and Passkeys for independent consultants and founders who value fewer, stronger relationships.",
      status: "alpha",
      owner: "Mikael Lirbank",
      github: "https://github.com/starmode-base/touch",
      site: "https://touch.starmode.dev",
    },
  ],
  Apps: [
    {
      name: "heartbeats",
      displayName: "Heartbeats",
      description:
        "The first humanless bookkeeper. AI-first accounting without humans behind the scenes.",
      status: "alpha",
      owner: "Mikael Lirbank & Spencer Smith",
      github: "https://github.com/starmode-base/heartbeats",
      site: "https://heartbeats.co",
    },
  ],
} as const satisfies Record<string, Project[]>;

export type ProjectCategory = keyof typeof projects;
