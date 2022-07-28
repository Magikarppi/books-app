const BookList = ({ books, selectBook }: BookListProps) => {
  return (
    <div className="BookList">
      {books.map((book) => (
        <div
          className="BookBlock"
          key={book.id}
          onClick={() => selectBook(book)}
        >
          <div className="BookElement" id="Author">
            {book.author}
          </div>
          <div className="BookElement" id="BookName">
            {book.bookname}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
