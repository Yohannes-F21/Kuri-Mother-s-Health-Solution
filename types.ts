export interface Author {
  _id: string;
  name: string;
  email: string;
}
export interface lang {
  english: { title: string; content: string };
  amharic: { title: string; content: string };
}

export interface Blog {
  author: Author;
  lang: lang;
  created: string;
  isPublished: boolean;
  thumbnail: string;
  category: string;
  updated: string;
  __v: number;
  _id: string;
  date: string;
}
