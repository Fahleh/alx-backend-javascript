const fs = require('fs');

function countStudents(path) {
  try {
    const fileData = fs.readFileSync(path, { encoding: 'utf8' }).split(/\r?\n/);
    const fileLines = fileData;
    let i = 0;
    let countStudents = 0;
    const fieldsObj = {};

    for (const ln of fileLines) {
      if (ln.trim() !== '' && i > 0) {
        countStudents += 1;
        const [firstName, lastName, age, field] = ln.split(','); // eslint-disable-line
        if (!fieldsObj[field]) {
          fieldsObj[field] = {
            count: 1,
            students: [firstName],
          };
        } else {
          const newCount = fieldsObj[field].count + 1;
          const studentsList = fieldsObj[field].students.concat(firstName);
          fieldsObj[field] = {
            count: newCount,
            students: studentsList,
          };
        }
      }
      i += 1;
    }

    console.log(`Number of students: ${countStudents}`);
    for (const field of Object.keys(fieldsObj)) {
      const len = fieldsObj[field].count;
      const studentNames = fieldsObj[field].students.join(', ');
      console.log(
        `Number of students in ${field}: ${len}. List: ${studentNames}`,
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
