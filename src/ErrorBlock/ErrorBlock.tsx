import styles from './ErrorBlock.module.css';
import { useErrorHandler } from 'bugsplat-react';

export default function ErrorBlock(props: { errors: Error[] }) {
  const handleError = useErrorHandler();

  return (
    <div className={styles.root}>
      <h2>Errors</h2>
      {props.errors.map((error) => (
        <button
          key={error.name}
          className={styles.error}
          onClick={() => handleError(error)}
        >
          <h2>{error.name}</h2>
          <h4>{error.message}</h4>
        </button>
      ))}
    </div>
  );
}
