import React from 'react';
import ReactDOM from 'react-dom';
import { BugSplat, BugSplatProvider } from 'bugsplat-react';
import App from './App';
import './index.css';
import packageJson from '../package.json';

const bugsplat = new BugSplat(
  packageJson.database,
  packageJson.name,
  packageJson.version
);
bugsplat.setDefaultAppKey('key!');
bugsplat.setDefaultDescription('description!');
bugsplat.setDefaultEmail('fred@bugsplat.com');
bugsplat.setDefaultUser('Fred');

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
    <BugSplatProvider bugSplat={bugsplat}>
      <App />
    </BugSplatProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
