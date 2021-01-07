import StyledSpinner from '../styles/Spinner.style';

const Spinner = ({ textMessage }) => (
  <StyledSpinner>
    <div className='spinner'>
      <div />
      <div />
      <div />
    </div>

    <h2 className='textMessage'>{textMessage}</h2>
  </StyledSpinner>
);

export default Spinner;
