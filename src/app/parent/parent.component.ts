import { Component, OnInit } from "@angular/core";
import { Student } from "./studentModel";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.scss"]
})
export class ParentComponent implements OnInit {
  public student: Student;
  public result: any;
  public studentList = [];
  constructor() {}

  ngOnInit() {
    this.student = new Student();
    this.student.addStudent("naresh", 21, 12345);
    this.studentList.push(this.student.getStudent());
    this.student = new Student();
    this.student.addStudent("naresh", 21, 12345);
    this.studentList.push(this.student.getStudent());
  }
}
