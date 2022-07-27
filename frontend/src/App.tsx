import React from 'react';
import BookForm from './components/BookForm';

function App() {
  const handleBookFormSubmit = (
    values: BookType,
    setSubmitting: SetSubmitting
  ) => {};

  return (
    <div className="App">
      <div className="ContentContainer">
        <BookForm handleBookFormSubmit={handleBookFormSubmit} />
      </div>
    </div>
  );
}

export default App;
