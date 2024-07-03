export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface IPrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: IPrintTeacherFunction = (
  firstName: string,
  lastName: string
): string => `${firstName[0]}. ${lastName}`;

export interface IStudentClassConstructor {
  new (firstName: string, lastName: string): IStudentClass;
}

export interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements IStudentClass {
  private firstName!: string;
  private lastName!: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}

export function createStudent(
  cstr: IStudentClassConstructor,
  firstName: string,
  lastName: string
): IStudentClass {
  return new cstr(firstName, lastName);
}
