export {};

declare global {
  interface BookType {
    bookName: string;
    author: string;
    description?: string;
  }
}
