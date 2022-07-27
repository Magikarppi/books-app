export {};

declare global {
  type SetSubmitting = (isSubmitting: boolean) => void;
  interface BookFormProps {
    handleBookFormSubmit: (values, SetSubmitting) => void;
  }
  interface BookType {
    bookName: string;
    author: string;
    description?: string;
  }
}
