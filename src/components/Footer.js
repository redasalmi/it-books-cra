import { FaGithub } from 'react-icons/fa';

const Footer = () => (
  <footer className='bg-dark text-white text-center footer mt-5'>
    <div className='container p-2'>
      <div className='row d-flex align-items-center'>
        <div className='col-9'>
          <p className='m-0 p-0'>
            All of these books and information are brought to you by the
            <a
              href='https://api.itbook.store/'
              target='_blank'
              rel='noreferrer noopener'
              className='apiLink'
            >
              {' '}
              IT Bookstore API
            </a>
          </p>
        </div>
        <div className='col-3'>
          <a
            href='https://github.com/redasalmi/it-books'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='github repository'
          >
            <FaGithub className='text-white navTitle' size='3em' />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
