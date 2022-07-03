import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'section2-2';
  results: any = null;
  dataArr: any = null;
  filterStr = '';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getApi();
  }

  getApi() {
    this.http
      .get('https://api.publicapis.org/categories ')
      .subscribe((data: any) => {
        this.results = data.categories;

        this.searchCategories();
      });
  }

  searchCategories() {
    this.dataArr = this.results;
    if (this.filterStr) {
      this.dataArr = this.dataArr.filter((val: any) => {
        return val.includes(this.filterStr);
      });
    }
  }
}
