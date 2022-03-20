const concurrently = require('concurrently');
const path = require('path');

concurrently(
  [
    {
      command: 'npm install',
      name: 'locations',
      cwd: path.resolve(__dirname, './subgraph-locations'),
      prefixColor: 'blue',
    },
    {
      command: 'npm install',
      name: 'activities',
      cwd: path.resolve(__dirname, './subgraph-activities'),
      prefixColor: 'magenta',
    },
    {
      command: 'npm install',
      name: 'reviews',
      cwd: path.resolve(__dirname, './subgraph-reviews'),
      prefixColor: 'green',
    },
    {
      command: 'npm install',
      name: 'gateway',
      cwd: path.resolve(__dirname, './gateway'),
      prefixColor: 'yellow',
    },
    {
      command: 'npm install',
      name: 'client',
      cwd: path.resolve(__dirname, './client'),
      prefixColor: 'cyan',
    },
  ],
  {
    prefix: 'name',
    restartTries: 3,
  }
);