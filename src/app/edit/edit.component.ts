import { Component, OnInit } from "@angular/core";
import { Person, Address } from "../shared/model";
import { Subscription } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";
import { SearchService } from "../shared/search/search.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"]
})
export class EditComponent implements OnInit {
  person: Person;
  editName: string;
  editPhone: string;
  editAddress: Address;
  sub: Subscription;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: SearchService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      const id = +params["id"];
      this.service.get(id).subscribe((person) => {
        if (person) {
          this.editAddress = person.address;
          this.person = person;
          this.editPhone = person.phone;
          this.editName = person.name;
        } else {
          this.gotoList();
        }
      });
    });
  }
  public gotoList() {
    debugger;
    if (this.person) {

      this.router.navigate(["/search", { term: this.person.name }]);
      debugger;
    } else {
      this.router.navigate(["/search"]);
    }
  }
  public cancel() {
    this.router.navigate(["/search"]);
  }
  public save() {
    this.person.name = this.editName;
    this.person.phone = this.editPhone;
    this.person.address = this.editAddress;
    this.service.save(this.person);
    this.gotoList();
  }
}
