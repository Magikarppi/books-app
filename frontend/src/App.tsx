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
  const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);

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

  const handleFormAction = async (
    action: FormActionType,
    values: FormValues
  ) => {
    switch (action) {
      case 'save-new':
        setFormValues(initialValues);
        const newBook = { ...values };
        if (newBook.id) {
          delete newBook.id;
        }
        const responseData = await create(newBook);
        setBooks([...books, responseData]);
        setIsFormSubmitting(false);
        break;
      case 'save':
        if (values.id) {
          setFormValues(initialValues);
          const responseData = await update(values);

          const updatedBooks = books.map((book) => {
            const bookCopy = { ...book };

            if (bookCopy.id !== responseData.id) {
              return bookCopy;
            } else {
              return responseData;
            }
          });
          setBooks(updatedBooks);
          setIsFormSubmitting(false);
        }
        break;
      case 'delete':
        setFormValues(initialValues);
        if (values.id) {
          await remove(values.id);
          const updatedBooks = books.filter((book) => book.id !== values.id);
          setBooks(updatedBooks);
        }
        setIsFormSubmitting(false);
        break;

      default:
        setIsFormSubmitting(false);
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
            isFormSubmitting={isFormSubmitting}
            setIsFormSubmitting={setIsFormSubmitting}
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
