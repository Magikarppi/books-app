import React, { useEffect, useState } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import { create, getBooks } from './services/bookService';
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

  const handleBookFormSubmit = (
    values: BookType,
    setSubmitting: SetSubmitting
  ) => {
    console.log('values: ', values);
  };

  const selectBook = (book: BookType) => {
    if (book) {
      setFormValues(book);
    }
  };

  const handleFormAction = (action: FormActionType, values: FormValues) => {
    switch (action) {
      case 'save-new':
        const newBook = { ...values };
        if (newBook.id) {
          delete newBook.id;
        }
        create(newBook);
        break;
      case 'save':
        // call server
        break;
      case 'delete':
        // call server
        break;

      default:
        break;
    }
  };

  return (
    <div className="App">
      <div className="ContentContainer">
        <div className="ContentSection">
          <BookForm
            handleBookFormSubmit={handleBookFormSubmit}
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
