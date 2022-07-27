import React, { useState } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

const booksDummyData: BookType[] = [
  {
    id: 1,
    bookName: 'The Gunslinger',
    author: 'Stephen King',
    description: 'a nice book',
  },
  {
    id: 2,
    bookName: 'Atomic Habits',
    author: 'James Clear',
    description: 'for ppl who want to get s?it done',
  },
  {
    id: 3,
    bookName: 'Bhagavad Gita',
    author: 'Vyasa',
    description: '',
  },
];

const initialValues: FormValues = {
  bookName: '',
  author: '',
  description: '',
};

function App() {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);

  const handleBookFormSubmit = (
    values: BookType,
    setSubmitting: SetSubmitting
  ) => {};

  const selectBook = (book: BookType) => {
    if (book) {
      setFormValues(book);
    }
  };

  return (
    <div className="App">
      <div className="ContentContainer">
        <div className="ContentSection">
          <BookForm
            handleBookFormSubmit={handleBookFormSubmit}
            formValues={formValues}
          />
        </div>
        <div className="ContentSection">
          <BookList books={booksDummyData} selectBook={selectBook} />
        </div>
      </div>
    </div>
  );
}

export default App;
