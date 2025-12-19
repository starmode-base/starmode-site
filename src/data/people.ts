export interface Person {
  name: string;
  role: string;
  website?: string;
}

export const people: Person[] = [
  {
    name: "Mikael Lirbank",
    role: "Founder, maintainer",
    website: "https://www.lirbank.com/",
  },
  {
    name: "Spencer Smith",
    role: "Contributor",
    website: "https://github.com/spencer-g-smith",
  },
];
