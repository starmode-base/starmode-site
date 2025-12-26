export interface Partner {
  name: string;
  description: string;
  logo: string;
  url: string;
}

export const partners: Partner[] = [
  {
    name: "Neon",
    description: "Serverless Postgres",
    logo: "/partners/neon-logo.svg",
    url: "https://neon.tech/?utm_source=starmode",
  },
];
