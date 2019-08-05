import { Component, OnInit, OnDestroy } from "@angular/core";
import { Person } from "../shared/model";
import { SearchService } from "../shared/search/search.service";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit, OnDestroy {
  public query: string;
  public searchResults: Array<Person>;
  sub: Subscription;
  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params);
      debugger;
      if (params["term"]) {
        this.query = decodeURIComponent(params["term"]);
        debugger;
        this.search();
      }
    });
  }
  search(): void {
    this.searchService.search(this.query).subscribe(
      (data: any) => {
        this.searchResults = data;
      },
      (error) => console.log(error)
    );
  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
