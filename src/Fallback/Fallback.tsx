import { FallbackProps, useBugSplat } from 'bugsplat-react';
import styles from './Fallback.module.css';

const BASE_CRASH_URL = 'https://app.bugsplat.com/v2/crash';

export default function Fallback({
  resetErrorBoundary,
  response,
}: FallbackProps) {
  const bugSplat = useBugSplat();
  const database = bugSplat?.database;

  const crashId =
    response?.error === null ? response.response.crash_id : undefined;

  return (
    <div className={styles.root}>
      {crashId && database && (
        <p>
          <a href={`${BASE_CRASH_URL}?database=${database}&id=${crashId}`}>
            Crash {crashId} in database {database}
          </a>
        </p>
      )}
      <button className={styles.reset} onClick={resetErrorBoundary}>
        <h2>Reset</h2>
      </button>
    </div>
  );
}
