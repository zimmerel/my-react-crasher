import { FallbackProps } from 'bugsplat-react';
import styles from './Fallback.module.css';

const Stack = ({ error }: { error: Error }) => (
  <div className={styles.stack}>
    <h4>Stack Trace</h4>
    {error.stack?.split('\n').map((line, i) => (
      <div key={i}>{line}</div>
    ))}
  </div>
);

export default function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className={styles.root}>
      <h3>Oops. An error has occurred.</h3>
      <h4>
        {error.name}: <small>{error.message}</small>
      </h4>

      <Stack error={error} />
      <button className={styles.reset} onClick={resetErrorBoundary}>
        <h2>Reset</h2>
      </button>
    </div>
  );
}
