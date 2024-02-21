export type Author = {
  avatar: string;
  name: string;
  image: string;
  age: number;
  birthdate: string;
  description: string;
  arts: {
    image: string;
    name: string;
    description?: string;
    age?: string;
  }[];
};

export const authors: Author[] = [
  {
    avatar: "1h5ZGCj0lbmD-w65r4PVun2iG_F1iLdxN",
    name: "Leonardo Da Vinci",
    image: "1h5ZGCj0lbmD-w65r4PVun2iG_F1iLdxN",
    age: 67,
    birthdate: "15 Aprilie 1452",
    description: "None",
    arts: [
      {
        image: "1h5ZGCj0lbmD-w65r4PVun2iG_F1iLdxN",
        name: "Leonardo Da Vinci",
      },
    ],
  },
  {
    avatar: "1h5ZGCj0lbmD-w65r4PVun2iG_F1iLdxN",
    name: "Michelangelo di Lodovico Buonarroti Simoni",
    image: "1h5ZGCj0lbmD-w65r4PVun2iG_F1iLdxN",
    age: 60,
    birthdate: "6 Martie 1475",
    description: "None",
    arts: [
      {
        image: "1h5ZGCj0lbmD-w65r4PVun2iG_F1iLdxN",
        name: "Michelangelo di Lodovico Buonarroti Simoni",
      },
    ],
  },
  {
    avatar: "1h5ZGCj0lbmD-w65r4PVun2iG_F1iLdxN",
    name: "Raffaello Sanzio",
    image: "1h5ZGCj0lbmD-w65r4PVun2iG_F1iLdxN",
    age: 37,
    birthdate: "6 Aprilie 1483",
    description: "None",
    arts: [
      {
        image: "1h5ZGCj0lbmD-w65r4PVun2iG_F1iLdxN",
        name: "Raffaello Sanzio",
      },
    ],
  },
  {
    avatar: "1jtxxbrYQYQsXTeYqS1J8zIWqB7LtENxW",
    name: "Donato di Niccolò di Betto Bardi",
    image: "1jtxxbrYQYQsXTeYqS1J8zIWqB7LtENxW",
    age: 80,
    birthdate: "1464",
    description: "None",
    arts: [
      {
        image: "1jtxxbrYQYQsXTeYqS1J8zIWqB7LtENxW",
        name: "Donato di Niccolò di Betto Bardi",
      },
      {
        image: "1jtxxbrYQYQsXTeYqS1J8zIWqB7LtENxW",
        name: "Donato di Niccolò di Betto Bardi",
      },
    ],
  },
];
