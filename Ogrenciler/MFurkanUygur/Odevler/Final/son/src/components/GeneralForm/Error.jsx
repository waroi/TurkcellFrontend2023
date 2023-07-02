/* eslint-disable react/prop-types */
import { ErrorMessage } from 'formik';

const Error = ({ name }) => {
  return (
  <>
        <ErrorMessage name={name} className='main-error'>
          {errorMessage => (
            <div className="error-message">
              <img src="../src/assets/error.png" alt="Error Icon" />
              <span>{errorMessage}</span>
            </div>
          )}
        </ErrorMessage>
  </>
  );
};

export default Error;
