import { MouseEvent } from 'react';
import { BugSplat, ErrorBoundary } from 'bugsplat-react';
import logo from '../assets/bugsplat-logo.png';
import styles from './App.module.css';
import { useState } from 'react';
import ErrorBlock from '../ErrorBlock';
import Fallback from '../Fallback';

const TITLE = 'my-react-crasher';
const BUGSPLAT_URL = 'https://www.bugsplat.com/';
const LINKS = {
  bugsplat: <a href={BUGSPLAT_URL}>BugSplat</a>,
  react: (
    <a href="https://docs.bugsplat.com/introduction/getting-started/integrations/web/react">
      React
    </a>
  ),
};
const ERRORS: Error[] = [
  TypeError('Bug.Splat is not a function'),
  URIError('Malformed URI sequence'),
  SyntaxError("Invalid character: '@'"),
  RangeError('The argument must be between -500 and 500'),
];

function App() {
  return (
    <div className={styles.root}>
      <a href={BUGSPLAT_URL}>
        <img alt="BugSplat Logo" className={styles.logo} src={logo} />
      </a>
      <div className={styles.content}>
        <h1>Welcome to {TITLE}</h1>
        <p>
          This is a sample application that demonstrates {LINKS.bugsplat} error
          reporting for {LINKS.react} applications built with JavaScript or
          TypeScript.
        </p>
        <ErrorBoundary fallback={Fallback}>
          <ErrorBlock errors={ERRORS} />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
