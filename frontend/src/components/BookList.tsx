const BookList = ({ books }: BookListProps) => {
  return (
    <div className="BookListContainer">
      {books.map((book) => (
        <div className="BookBlock" key={book.id}>
          <div className="BookElement">{book.bookName}</div>
          <div className="BookElement">{book.author}</div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
