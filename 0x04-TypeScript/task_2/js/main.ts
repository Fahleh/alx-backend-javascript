interface DirectorInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workDirectorTasks: () => string;
}

interface TeacherInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workTeacherTasks: () => string;
}

export class Director implements DirectorInterface {
  workFromHome = (): string => 'Working from home';

  getCoffeeBreak = (): string => 'Getting a coffee break';

  workDirectorTasks = (): string => 'Getting to director tasks';
}

export class Teacher implements TeacherInterface {
  workFromHome = (): string => 'Cannot work from home';
  
  getCoffeeBreak = (): string => 'Cannot have a break';

  workTeacherTasks = (): string => 'Getting to work';

}

export const createEmployee = (salary: number | string): Teacher | Director => {
  if (typeof salary === 'number' && salary < 500) return new Teacher();

  return new Director();
};

export function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
  return employee instanceof Director;
}

export function executeWork(employee: DirectorInterface | TeacherInterface): string {
  return (isDirector(employee))
  ? employee.workDirectorTasks()
  : employee.workTeacherTasks();
}

type Subjects = "Math" | "History";


export function teachClass(todayClass: Subjects): string  {
  return (todayClass === 'Math') ? 'Teaching Math' : 'Teaching History';
}
