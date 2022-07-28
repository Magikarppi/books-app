import { ErrorMessage, Field, Form, Formik } from 'formik';
import { LoadingOutlined } from '@ant-design/icons';

const ErrorComponent = () => <div className="FormError" />;
interface ErrorObject {
  bookname?: string;
  author?: string;
}

const BookForm = ({
  formValues,
  handleFormAction,
  isFormSubmitting,
  setIsFormSubmitting,
}: BookFormProps) => {
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
          onSubmit={(values, { resetForm }) => {
            const buttonPressed = document.activeElement?.id;
            switch (buttonPressed) {
              case 'save-new':
                handleFormAction('save-new', values);
                setIsFormSubmitting(true);
                break;
              case 'save':
                handleFormAction('save', values);
                setIsFormSubmitting(true);
                break;
              case 'delete':
                handleFormAction('delete', values);
                setIsFormSubmitting(true);
                break;

              default:
                break;
            }
            resetForm();
          }}
        >
          {({ errors, submitForm }) => (
            <Form style={{ height: '70%', width: '80%' }}>
              <div className="FormInput">
                <label htmlFor="bookname">Book name</label>
                <Field type="bookname" name="bookname" />
                <ErrorMessage name="bookname">
                  {(msg) => <div className="FormError">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="FormInput">
                <label htmlFor="author">Author</label>
                <Field type="author" name="author" />
                <ErrorMessage name="author">
                  {(msg) => <div className="FormError">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="FormInput">
                <label htmlFor="description">Description</label>
                <Field type="description" name="description" />
                <ErrorMessage name="description" component={ErrorComponent} />
              </div>
              <div className="SubmitButtonsContainer">
                {isFormSubmitting ? (
                  <LoadingOutlined spin className="loading" />
                ) : (
                  <>
                    <button
                      type="button"
                      id="save-new"
                      onClick={() => {
                        submitForm();
                      }}
                    >
                      Save New
                    </button>
                    <button
                      type="button"
                      id="save"
                      onClick={() => {
                        submitForm();
                      }}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      id="delete"
                      onClick={() => {
                        submitForm();
                      }}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default BookForm;
