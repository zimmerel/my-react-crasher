import { ErrorBoundary, useErrorHandler } from 'bugsplat-react';
import logo from '../assets/bugsplat-logo.png';
import styles from './App.module.css';
import Fallback from '../Fallback';
import { useState } from 'react';

const BUGSPLAT_URL = 'https://www.bugsplat.com/';
const DOCS_REACT_URL =
  'https://docs.bugsplat.com/introduction/getting-started/integrations/web/react';
const LINKS = {
  bugsplat: <a href={BUGSPLAT_URL}>BugSplat</a>,
  react: <a href={DOCS_REACT_URL}>React</a>,
};

const ERRORS: Error[] = [
  TypeError('Bug.Splat is not a function'),
  URIError('Malformed URI sequence'),
  SyntaxError("Invalid character: '@'"),
  RangeError('The argument must be between -500 and 500'),
];

function ThrowOnError(props: { error: Error | null }) {
  useErrorHandler(props.error);
  return null;
}

function App() {
  const [error, setError] = useState<Error | null>(null);

  return (
    <div className={styles.root}>
      <a href={BUGSPLAT_URL}>
        <img alt="BugSplat Logo" className={styles.logo} src={logo} />
      </a>
      <div className={styles.content}>
        <h1>Welcome to my-react-crasher</h1>
        <p>
          This is a sample application that demonstrates {LINKS.bugsplat} error
          reporting for {LINKS.react} applications built with JavaScript or
          TypeScript.
        </p>
        <ErrorBoundary
          fallback={(props) => <Fallback {...props} />}
          onReset={() => setError(null)}
          resetKeys={[error]}
        >
          <ThrowOnError error={error} />
        </ErrorBoundary>
        <div className={styles.errors}>
          <h2>Errors</h2>
          {ERRORS.map((error) => (
            <button
              key={error.name}
              className={styles.error}
              onClick={() => setError(error)}
            >
              <h2>{error.name}</h2>
              <h4>{error.message}</h4>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
