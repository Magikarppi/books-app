export {};

declare global {
  interface BookType {
    id: number;
    bookname: string;
    author: string;
    description: string;
  }

  type FormActionType = 'save-new' | 'save' | 'delete';
  interface HandleFormActionProps {
    action: FormActionType;
    values: FormValues;
  }

  interface BookFormProps {
    formValues: FormValues;
    handleFormAction: (action: FormActionType, values: FormValues) => void;
    isFormSubmitting: boolean;
    setIsFormSubmitting: (state: boolean) => void;
  }

  interface FormValues {
    id?: number;
    bookname: string;
    author: string;
    description: string;
  }

  interface BookListProps {
    books: BookType[];
    selectBook: (book: BookType) => void;
  }
}
