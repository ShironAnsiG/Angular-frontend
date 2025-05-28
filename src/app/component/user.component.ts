import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common'; // ✅ Import this
import { HttpClient } from '@angular/common/http';

export interface Book {
  id: number;
  name: string;
  author: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl:  './user.component.html'
})
export class UserComponent {
  books: Book[] = []; // ✅ Correctly typed

  constructor(private http: HttpClient) {
    this.fetchBooks();
  }

  fetchBooks() {
    this.http.get<Book[]>('http://localhost:8090/book/v1/Books').subscribe(data => {
      this.books = data;
    });
  }
}
