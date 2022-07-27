import { ErrorMessage, Field, Form, Formik } from 'formik';

const ErrorComponent = () => <div style={{ color: 'red' }} />;
interface ErrorObject {
  bookName?: string;
  author?: string;
}

const BookForm = ({
  handleBookFormSubmit,
  formValues,
  handleFormAction,
}: BookFormProps) => {
  console.log('formValues: ', formValues);

  const validate = (values: FormValues) => {
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
      <div className="BookForm">
        <Formik
          initialValues={formValues}
          enableReinitialize={true}
          validate={(values) => validate(values)}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            handleBookFormSubmit(values, setSubmitting);
            resetForm();
          }}
        >
          {({ isSubmitting, errors, values }) => (
            <Form style={{ height: '70%', width: '80%' }}>
              <div className="FormInput">
                <label htmlFor="firstName">Book name</label>
                <Field type="bookName" name="bookName" />
                <ErrorMessage name="bookName" component={ErrorComponent} />
              </div>
              <div className="FormInput">
                <label htmlFor="firstName">Author</label>
                <Field type="author" name="author" />
                <ErrorMessage name="author" component={ErrorComponent} />
              </div>
              <div className="FormInput">
                <label htmlFor="firstName">Description</label>
                <Field type="description" name="description" />
                <ErrorMessage name="description" component={ErrorComponent} />
              </div>
              <div className="SubmitButtonsContainer">
                <button onClick={() => handleFormAction('save-new', values)}>
                  Save New
                </button>
                <button onClick={() => handleFormAction('save', values)}>
                  Save
                </button>
                <button onClick={() => handleFormAction('delete', values)}>
                  Delete
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default BookForm;
