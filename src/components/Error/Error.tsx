import styles from './Error.module.scss';

const Error = () => (
  <div className={`container ${styles.error}`}>
    <h2>
      Sorry, Something has gone wrong with the API, please try to refresh the
      page later.
    </h2>
  </div>
);

export default Error;
