const express = require('express');

const app = express();
const PORT = 1245;
const host = '127.0.0.1';

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server listening at http://${host}:${PORT}`);
});

module.exPORTs = app;
