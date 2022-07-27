import React from 'react';
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
    description: 'Epic classic',
  },
];

function App() {
  const handleBookFormSubmit = (
    values: BookType,
    setSubmitting: SetSubmitting
  ) => {};

  const selectBook = (book: BookType) => {};

  return (
    <div className="App">
      <div className="ContentContainer">
        <div className="ContentSection">
          <BookForm handleBookFormSubmit={handleBookFormSubmit} />
        </div>
        <div className="ContentSection">
          <BookList books={booksDummyData} selectBook={selectBook} />
        </div>
      </div>
    </div>
  );
}

export default App;
