import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import BookList from '../components/BookList';

test('renders books', () => {
  const books: BookType[] = [
    {
      id: 1,
      author: 'Robert Sapolsky',
      bookname: 'Behave',
      description: 'About human behaviour',
    },
    {
      id: 2,
      author: 'Matthew Walker',
      bookname: 'Why We Sleep',
      description: 'About the importance of sleep',
    },
  ];

  render(<BookList books={books} selectBook={() => {}} />);

  const element1 = screen.getByText(books[0].bookname);
  const element2 = screen.getByText(books[1].author);
  expect(element1).toBeDefined();
  expect(element2).toBeDefined();
});
