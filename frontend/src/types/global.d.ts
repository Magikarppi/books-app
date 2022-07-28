export {};

declare global {
  type SetSubmitting = (isSubmitting: boolean) => void;
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
    setSubmitting: SetSubmitting;
  }

  interface BookFormProps {
    formValues: FormValues;
    handleFormAction: (
      action: FormActionType,
      values: FormValues,
      setSubmitting: SetSubmitting
    ) => void;
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
