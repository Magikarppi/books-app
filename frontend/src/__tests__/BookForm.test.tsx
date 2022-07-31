import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import BookForm from '../components/BookForm';

test('Shows values in form', async () => {
  const values: FormValues = {
    author: 'Stephen King',
    bookname: 'Black Tower',
    description: 'Finale of an epic saga',
  };

  render(
    <BookForm
      formValues={values}
      handleFormAction={() => {}}
      isFormSubmitting={false}
      setIsFormSubmitting={() => {}}
    />
  );

  const bookName = screen.getByDisplayValue(values.bookname);
  const author = screen.getByDisplayValue(values.author);
  const description = screen.getByDisplayValue(values.description);

  expect(author).toBeDefined();
  expect(bookName).toBeDefined();
  expect(description).toBeDefined();
});
