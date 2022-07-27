import { ErrorMessage, Field, Form, Formik } from 'formik';

const ErrorComponent = () => <div style={{ color: 'red' }} />;
interface ErrorObject {
  bookName?: string;
  author?: string;
}

const BookForm = ({ handleBookFormSubmit }: BookFormProps) => {
  const initialValues: BookType = {
    bookName: '',
    author: '',
    description: '',
  };

  const validate = (values: BookType) => {
    const { bookName, author } = values;
    let errors: ErrorObject = {};

    if (!bookName) {
      errors.bookName = 'Book name is required';
    } else if (bookName.length > 60) {
      errors.bookName = 'Max length is 60 characters';
    }

    if (!author) {
      errors.author = 'Author is required';
    } else if (author.length > 60) {
      errors.author = 'Max length is 60 characters';
    }

    return errors;
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={(values) => validate(values)}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleBookFormSubmit(values, setSubmitting);
          resetForm();
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <div className="Input">
              <Field type="bookName" name="bookName" placeholder="Book name" />
              <ErrorMessage name="bookName" component={ErrorComponent} />
            </div>
            <div className="Input">
              <Field type="author" name="author" placeholder="Author" />
              <ErrorMessage name="author" component={ErrorComponent} />
            </div>
            <div className="Input">
              <Field
                type="description"
                name="description"
                placeholder="Description"
              />
              <ErrorMessage name="description" component={ErrorComponent} />
            </div>
            <div className="SubmitButtonsContainer">
              <button type="submit">Save New</button>
              <button type="submit">Save</button>
              <button type="submit">Delete</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default BookForm;
