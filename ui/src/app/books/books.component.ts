import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http'; 

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  private url = 'http://localhost:5000/api/v1/resources/books/all';
  private booksStringify;
  private books;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData(): void {
    this.http.get(this.url)
      .subscribe((res: Response) => {
        console.log(res);
        this.booksStringify = JSON.stringify(res);
        this.books = res;
      });
  }
}
