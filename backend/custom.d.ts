// customized types

interface BookType {
  id: number;
  bookname: string;
  author: string;
  description: string;
}

declare namespace Express {
  export interface Request {
    book?: any;
  }
}
