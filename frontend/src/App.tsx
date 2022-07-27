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
];

function App() {
  const handleBookFormSubmit = (
    values: BookType,
    setSubmitting: SetSubmitting
  ) => {};

  return (
    <div className="App">
      <div className="ContentContainer">
        <BookForm handleBookFormSubmit={handleBookFormSubmit} />
        <BookList books={booksDummyData} />
      </div>
    </div>
  );
}

export default App;
