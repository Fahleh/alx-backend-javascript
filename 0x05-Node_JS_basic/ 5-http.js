const http = require('http');
const countStudents = require('./3-read_file_async');

const host = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    let studentData = 'This is the list of our students\n';
    await countStudents(process.argv[2])
      .then((msg) => {
        studentData += msg;
        res.end(studentData);
      })
      .catch((err) => {
        studentData += err.message;
        res.end(studentData);
      });
  }
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});

module.exports = app;
