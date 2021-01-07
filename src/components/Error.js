import StyledError from '../styles/Error.style.';

const Error = () => (
  <StyledError className='container'>
    <h2>
      Sorry, Something has gone wrong with the API, please try to refresh the
      page later.
    </h2>
  </StyledError>
);

export default Error;
