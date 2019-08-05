import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, from } from "rxjs";
import { map } from "rxjs/operators";
import { Person } from "../model";
@Injectable({
  providedIn: "root"
})
export class SearchService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get("assets/data/demoData.json");
  }
  search(query: string): Observable<any> {
    if (!query || query === "*") {
      query = " ";
    } else {
      debugger;
      query = query.toLocaleLowerCase();
    }
    return this.getData().pipe(
      map((data: any) =>
        data
          .map((item) =>
            !!localStorage["person" + item.id]
              ? JSON.parse(localStorage["person" + item.id])
              : item
          )
          .filter((item) =>
            JSON.stringify(item)
              .toLowerCase()
              .includes(query)
          )
      )
    );
  }
  public get(id: number) {
    return this.getData().pipe(
      map((all: any) => {
        if (localStorage["person" + id]) {
          return JSON.parse(localStorage["person" + id]);
        }
        return all.find((e) => e.id === id);
      })
    );
  }
  save(person: Person) {
    localStorage["person" + person.id] = JSON.stringify(person);
  }
}
