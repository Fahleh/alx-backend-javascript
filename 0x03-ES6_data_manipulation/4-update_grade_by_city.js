// Returns an array of students for a specific city with their new grade
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((person) => {
        const grades = newGrades.filter((el) => el.studentId === person.id);
        const grade = grades.length ? grades[0].grade : 'N/A';
        return {
          ...person,
          grade,
        };
      });
  }
  return [];
}
