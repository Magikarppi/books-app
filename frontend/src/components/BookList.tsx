const BookList = ({ books, selectBook }: BookListProps) => {
  return (
    <div className="BookList">
      {books.map((book) => (
        <div
          className="BookBlock"
          key={book.id}
          onClick={() => selectBook(book)}
        >
          <div className="BookElement">{book.bookname}</div>
          <div className="BookElement">{book.author}</div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
