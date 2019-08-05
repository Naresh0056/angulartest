export class Student {
  public name: string;
  public age: number;
  public phone_number: number;
  public addStudent(name, age, phone_number) {
    this.name = name;
    this.age = age;
    this.phone_number = phone_number;
  }
  public getStudent() {
    let student = {
      name: this.name,
      age: this.age,
      phone_number: this.phone_number
    };
    return student;
  }
}
