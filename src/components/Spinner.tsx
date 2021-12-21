import styles from '~/styles/components/spinner.module.scss';

interface SpinnerProps {
  textMessage: string;
}

const Spinner = ({ textMessage }: SpinnerProps) => (
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
