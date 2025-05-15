type AppEnvs = "NEXT_PUBLIC_VAPI_PUBLIC_KEY";

// lib/env-client.ts
export const ensureClientEnv = (key: AppEnvs): string => {
  const value = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY;
  if (!value) {
    throw new Error(`Missing or invalid env: ${key}`);
  }
  return value;
};
