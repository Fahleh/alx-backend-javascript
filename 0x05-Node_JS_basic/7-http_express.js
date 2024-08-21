const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const DATA = process.argv.length > 2 ? process.argv[2] : '';
const ERROR = 'Cannot load the database';

function countStudents(path) {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error(ERROR));
    }

    fs.readFile(path, (err, data) => {
      if (err) {
        reject(new Error(ERROR));
      }
      if (!data) {
        return;
      }

      const reports = [];
      const lines = data.toString('utf-8').trim().split('\n');
      const groups = {};
      const fieldNames = lines[0].split(',');
      const studentNames = fieldNames.slice(0, fieldNames.length - 1);

      for (const line of lines.slice(1)) {
        const studentRecord = line.split(',');
        const studentValues = studentRecord.slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];
        if (!Object.keys(groups).includes(field)) {
          groups[field] = [];
        }
        const entries = studentNames.map((propName, idx) => [
          propName,
          studentValues[idx],
        ]);
        groups[field].push(Object.fromEntries(entries));
      }

      const total = Object.values(groups).reduce(
        (pre, cur) => (pre || []).length + cur.length
      );
      reports.push(`Number of students: ${total}`);
      for (const [field, group] of Object.entries(groups)) {
        reports.push(
          [
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' ')
        );
      }
      resolve(reports.join('\n'));
    });
  });
}

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const responses = ['This is the list of our students'];

  countStudents(DATA)
    .then((report) => {
      responses.push(report);
      const responseMsg = responses.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseMsg.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseMsg));
    })
    .catch((err) => {
      responses.push(err instanceof Error ? err.message : err.toString());
      const responseMsg = responses.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseMsg.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseMsg));
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
