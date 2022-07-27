export {};

declare global {
  type SetSubmitting = (isSubmitting: boolean) => void;
  interface BookType {
    id: number;
    bookName: string;
    author: string;
    description: string;
  }

  interface BookFormProps {
    handleBookFormSubmit: (values, SetSubmitting) => void;
    formValues: FormValues;
  }

  interface FormValues {
    bookName: string;
    author: string;
    description: string;
  }

  interface BookListProps {
    books: BookType[];
    selectBook: (book: BookType) => void;
  }
}
