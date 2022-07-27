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
  ) => {
    console.log('values: ', values);
  };

  const selectBook = (book: BookType) => {
    if (book) {
      setFormValues(book);
    }
  };

  const handleFormAction = (action: FormActionType) => {
    switch (action) {
      case 'save-new':
        // call server
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
          <BookList books={booksDummyData} selectBook={selectBook} />
        </div>
      </div>
    </div>
  );
}

export default App;
