type AppEnvs = "NEXT_PUBLIC_VAPI_PUBLIC_KEY";

// lib/env-client.ts
export const ensureClientEnv = (key: AppEnvs): string => {
  const value = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY;
  if (!value) {
    throw new Error(`Missing or invalid env: ${key}`);
  }
  return value;
};

const rawEnv = {
  /**
   * Application environment variables
   */
  CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
  DATABASE_URL: process.env.DATABASE_URL,
  DATABASE_URL_UNPOOLED: process.env.DATABASE_URL_UNPOOLED,
  ABLY_API_KEY: process.env.ABLY_API_KEY,
  API_NINJA: process.env.API_NINJA,
  VAPI_SECRET: process.env.VAPI_SECRET,
  VAPI_PUBLIC_KEY: process.env.VAPI_PUBLIC_KEY,

  /**
   * Platform environment variables
   */
  // https://nextjs.org/docs/app/building-your-application/configuring/environment-variables#test-environment-variables
  // https://nextjs.org/docs/app/building-your-application/configuring/environment-variables#good-to-know
  NODE_ENV: process.env.NODE_ENV,

  // https://vercel.com/docs/environment-variables/system-environment-variables#VERCEL_ENV
  // https://vercel.com/docs/environment-variables/framework-environment-variables#VITE_VERCEL_ENV
  VERCEL_ENV: process.env.VITE_VERCEL_ENV ?? "development",
};

export function ensureEnv(name: keyof typeof rawEnv): string {
  const val = rawEnv[name];

  if (typeof val !== "string" || !val) {
    throw new Error(`Missing env var: "${name}"`);
  }

  return val;
}
