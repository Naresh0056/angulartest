import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.scss"]
})
export class ChildComponent implements OnInit {
  @Input("student") studentList;
  public result = [];
  constructor() {}

  ngOnInit() {
    this.studentList.forEach((element) => {
      this.result.push(element);
    });
  }
}
