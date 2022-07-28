import React, { useEffect, useState } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import { create, getBooks, remove, update } from './services/bookService';
import { fetchWithTimeout } from './utils/utilFuncs';

const booksDummyData: BookType[] = [
  {
    id: 1,
    bookname: 'The Gunslinger',
    author: 'Stephen King',
    description: 'a nice book',
  },
  {
    id: 2,
    bookname: 'Atomic Habits',
    author: 'James Clear',
    description: 'for ppl who want to get s?it done',
  },
  {
    id: 3,
    bookname: 'Bhagavad Gita',
    author: 'Vyasa',
    description: '',
  },
];

const initialValues: FormValues = {
  bookname: '',
  author: '',
  description: '',
};

function App() {
  const [books, setBooks] = useState<BookType[]>([]);
  const [formValues, setFormValues] = useState<FormValues>(initialValues);

  useEffect(() => {
    const getAndSetBooks = async () => {
      const fetchedBooks = await getBooks();
      if (fetchedBooks) {
        setBooks(fetchedBooks);
      }
    };

    getAndSetBooks();
  }, []);

  const selectBook = (book: BookType) => {
    if (book) {
      setFormValues(book);
    }
  };

  const handleFormAction = (
    action: FormActionType,
    values: FormValues,
    setSubmitting: SetSubmitting
  ) => {
    switch (action) {
      case 'save-new':
        const newBook = { ...values };
        if (newBook.id) {
          delete newBook.id;
        }
        create(newBook);
        setSubmitting(false);
        break;
      case 'save':
        if (values.id) {
          update(values);
        }
        break;
      case 'delete':
        if (values.id) {
          remove(values.id);
        }
        setSubmitting(false);
        break;

      default:
        setSubmitting(false);
        break;
    }
  };

  return (
    <div className="App">
      <div className="ContentContainer">
        <div className="ContentSection">
          <BookForm
            handleFormAction={handleFormAction}
            formValues={formValues}
          />
        </div>
        <div className="ContentSection">
          <BookList books={books} selectBook={selectBook} />
        </div>
      </div>
    </div>
  );
}

export default App;
