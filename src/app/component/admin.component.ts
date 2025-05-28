import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // ✅ Import this

@Component({
  selector: 'app-admin',
  standalone: true, // ✅ Needed for standalone components
  imports: [CommonModule], // ✅ Include CommonModule here
  template: `
    <h2>Admin Page</h2>
    <button (click)="loadBooks()">Load All Books</button>
    <ul>
      <li *ngFor="let book of books">{{ book.name }}</li>
    </ul>
  `
})
export class AdminComponent implements OnInit {
  books: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  loadBooks() {
    this.http.get<any[]>('http://localhost:8090/book/v1/Books')
      .subscribe(data => this.books = data);
  }
}
