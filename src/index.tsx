import React from 'react';
import ReactDOM from 'react-dom';
import { BugSplat, BugSplatProvider } from 'bugsplat-react';
import App from './App';
import './index.css';
import pkg from '../package.json';

const database = process.env.REACT_APP_DATABASE;

if (!database) {
  throw new Error('REACT_APP_DATABASE environment variable must be set');
}

const bugsplat = new BugSplat(database, pkg.name, pkg.version);
bugsplat.setDefaultAppKey('key!');
bugsplat.setDefaultDescription('description!');
bugsplat.setDefaultEmail('fred@bugsplat.com');

window.addEventListener('unhandledrejection', async (rejection) => {
  await bugsplat.post(rejection.reason);
});

// window.addEventListener('error', async (event) => {
//   if (event.error) {
//     await bugsplat.post(event.error);
//   }
// });

ReactDOM.render(
  <React.StrictMode>
    <BugSplatProvider value={bugsplat}>
      <App />
    </BugSplatProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
