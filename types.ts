export interface Author {
  _id: string;
  name: string;
  email: string;
}

export interface Blog {
  author: Author;
  content: string;
  created: string;
  isPublished: boolean;
  thumbnail: string;
  title: string;
  updated: string;
  __v: number;
  _id: string;
  date: string;
}
