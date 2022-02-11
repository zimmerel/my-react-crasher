import { FallbackProps, useBugSplat } from 'bugsplat-react';
import styles from './Fallback.module.css';

const CrashLink = (props: { crashId: number; database: string }) => {
  const { crashId, database } = props;

  const url = `https://app.bugsplat.com/v2/crash?database=${database}&id=${crashId}`;

  return (
    <a href={url}>
      Crash {crashId} in database {database}
    </a>
  );
};

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
          <CrashLink crashId={crashId} database={database} />
        </p>
      )}
      <button className={styles.reset} onClick={resetErrorBoundary}>
        <h2>Reset</h2>
      </button>
    </div>
  );
}
