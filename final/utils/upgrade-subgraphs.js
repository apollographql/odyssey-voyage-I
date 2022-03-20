const concurrently = require('concurrently');
const path = require('path');

concurrently(
  [
    {
      command: 'npm install @apollo/subgraph@latest-2',
      name: 'locations',
      cwd: path.resolve(__dirname, './subgraph-locations'),
      prefixColor: 'blue',
    },
    {
      command: 'npm install @apollo/subgraph@latest-2',
      name: 'activities',
      cwd: path.resolve(__dirname, './subgraph-activities'),
      prefixColor: 'magenta',
    },
    {
      command: 'npm install @apollo/subgraph@latest-2',
      name: 'reviews',
      cwd: path.resolve(__dirname, './subgraph-reviews'),
      prefixColor: 'green',
    },
  ],
  {
    prefix: 'name',
    restartTries: 3,
  }
);