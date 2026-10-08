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
  },
  {
    name: "Sébastien Morel",
    github: "plopix",
  },
  {
    name: "Vincent Chan",
    github: "cvince",
    website: "https://www.vincentchan.vc",
  },
  {
    name: "Tudor Zaharia",
    github: "tdrz",
    website: "https://tudor.zaharia.ch",
  },  
];
