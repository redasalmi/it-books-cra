import styles from './Spinner.module.scss';

const Spinner = ({ textMessage }) => (
  <div>
    <div className={styles.spinner}>
      <div />
      <div />
      <div />
    </div>

    <h2 className={styles.textMessage}>{textMessage}</h2>
  </div>
);

export default Spinner;
