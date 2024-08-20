const fs = require('fs');

const countStudents = (path) => {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, results) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = results.split('\n');
        let i = 0;
        let countStudents = 0;
        let meessage = '';
        const fieldObj = {};

        const parseLines = () => {
          for (const line of lines) {
            if (line.trim() !== '' && i > 0) {
              countStudents += 1;
              const [firstName, LastName, age, field] = line.split(','); // eslint-disable-line
              if (!fieldObj[field]) {
                fieldObj[field] = {
                  count: 1,
                  students: [firstName],
                };
              } else {
                const newCount = fieldObj[field].count + 1;
                const studentsList = fieldObj[field].students.concat(firstName);
                fieldObj[field] = {
                  count: newCount,
                  students: studentsList,
                };
              }
            }
            i += 1;
          }
        };

        const display = async () => {
          parseLines();
          console.log(`Number of students: ${countStudents}`);
          meessage += `Number of students: ${countStudents}\n`;
          for (const field of Object.keys(fieldObj)) {
            const n = fieldObj[field].count;
            const names = fieldObj[field].students.join(', ');
            console.log(`Number of students in ${field}: ${n}. List: ${names}`);
            meessage += `Number of students in ${field}: ${n}. List: ${names}\n`;
          }
          meessage = meessage.slice(0, -1);
        };

        display();
        resolve(meessage);
      }
    });
  });

  return promise;
};

module.exports = countStudents;
