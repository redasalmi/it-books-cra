import { FaGithub } from 'react-icons/fa';
import StyledFooter from '../styles/Footer.style';

const Footer = () => (
  <StyledFooter className='footer'>
    <div className='container'>
      <p>
        All of these books and information are brought to you by the{' '}
        <a
          target='_blank'
          rel='noreferrer noopener'
          href='https://api.itbook.store/'
        >
          IT Bookstore API
        </a>
      </p>

      <a
        target='_blank'
        rel='noreferrer noopener'
        aria-label='reda salmi github account'
        href='https://github.com/redasalmi/it-books'
      >
        <FaGithub className='text-white navTitle' size='3em' />
      </a>
    </div>
  </StyledFooter>
);

export default Footer;
