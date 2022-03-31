const concurrently = require('concurrently');
const path = require('path');

concurrently(
  [
    {
      command: 'npm start',
      name: 'locations',
      cwd: path.resolve(__dirname, '../subgraph-locations'),
      prefixColor: 'blue',
    },
    {
      command: 'npm start',
      name: 'activities',
      cwd: path.resolve(__dirname, '../subgraph-activities'),
      prefixColor: 'magenta',
    },
    {
      command: 'npm start',
      name: 'reviews',
      cwd: path.resolve(__dirname, '../subgraph-reviews'),
      prefixColor: 'green',
    },
  ],
  {
    prefix: 'name',
    restartTries: 3,
  }
);