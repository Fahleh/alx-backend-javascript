//A class reporesenting a course.
export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  //Returns the name of the course.
  get name() {
    return this._name;
  }

  //Sets the name of the course.
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  //Returns the length of the course in months.
  get length() {
    return this._length;
  }

  //Sets the length of the course in months.
  set length(length) {
    if (typeof val !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  //Returns the list of students in the course.
  get students() {
    return this._students;
  }

  //Sets the list of students in the course.
  set students(arr) {
    if (!Array.isArray(arr)) {
      throw new TypeError('Students must be an array');
    }
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
    }
    this._students = arr;
  }
}
