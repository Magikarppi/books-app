import { ErrorMessage, Field, Form, Formik } from 'formik';

const ErrorComponent = () => <div style={{ color: 'red' }} />;
interface ErrorObject {
  bookname?: string;
  author?: string;
}

const BookForm = ({
  handleBookFormSubmit,
  formValues,
  handleFormAction,
}: BookFormProps) => {
  console.log('formValues: ', formValues);

  const validate = (values: FormValues) => {
    const { bookname, author } = values;
    let errors: ErrorObject = {};

    if (!bookname) {
      errors.bookname = 'Book name is required';
    } else if (bookname.length > 60) {
      errors.bookname = 'Max length is 60 characters';
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
          {({ isSubmitting, errors, values, submitForm }) => (
            <Form style={{ height: '70%', width: '80%' }}>
              <div className="FormInput">
                <label htmlFor="bookname">Book name</label>
                <Field type="bookname" name="bookname" />
                <ErrorMessage name="bookname" component={ErrorComponent} />
              </div>
              <div className="FormInput">
                <label htmlFor="author">Author</label>
                <Field type="author" name="author" />
                <ErrorMessage name="author" component={ErrorComponent} />
              </div>
              <div className="FormInput">
                <label htmlFor="description">Description</label>
                <Field type="description" name="description" />
                <ErrorMessage name="description" component={ErrorComponent} />
              </div>
              <div className="SubmitButtonsContainer">
                <button
                  type="button"
                  onClick={() => {
                    handleFormAction('save-new', values);
                    submitForm();
                  }}
                >
                  Save New
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleFormAction('save', values);
                    submitForm();
                  }}
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleFormAction('delete', values);
                    submitForm();
                  }}
                >
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
