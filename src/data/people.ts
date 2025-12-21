export interface Person {
  name: string;
  github: string;
  website?: string;
}

export const people: Person[] = [
  {
    name: "Mikael Lirbank",
    github: "lirbank",
    website: "https://www.lirbank.com/",
  },
  {
    name: "Spencer Smith",
    github: "spencer-g-smith",
    website: "https://github.com/spencer-g-smith",
  },
];
