import { ErrorMessage, Field, Form, Formik } from 'formik';

const ErrorComponent = () => <div style={{ color: 'red' }} />;

const BookForm = ({ handleBookFormSubmit }: BookFormProps) => {
  const initialValues: BookType = {
    bookName: '',
    author: '',
    description: '',
  };

  const validate = (values: BookType) => {};

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
