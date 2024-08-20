const fs = require("fs");

const readDatabase = (path) =>
  new Promise((resolve, reject) => {
    fs.readFile(path, (error, csvData) => {
      if (error) {
        reject(Error("Cannot load the database"));
      }
      if (!csvData) {
        return;
      }
      const fieldsObj = {};
      const response = {};
      let data = csvData.toString().split("\n");
      data = data.filter((element) => element.length > 0);

      data.shift();
      data.forEach((element) => {
        if (element.length > 0) {
          const row = element.split(",");
          if (row[3] in fieldsObj) {
            fieldsObj[row[3]].push(row[0]);
          } else {
            fieldsObj[row[3]] = [row[0]];
          }
        }
      });
      for (const field in fieldsObj) {
        if (field) {
          const list = fieldsObj[field];
          response[field] = {
            list: `List: ${list.toString().replace(/,/g, ", ")}`,
            number: list.length,
          };
        }
      }

      resolve(response);
    });
  });

module.exports = readDatabase;
