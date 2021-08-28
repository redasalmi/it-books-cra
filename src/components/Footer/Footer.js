import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={`footer ${styles.footer}`}>
    <div className={`container ${styles.content}`}>
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
        <GithubIcon />
      </a>
    </div>
  </footer>
);

export default Footer;
