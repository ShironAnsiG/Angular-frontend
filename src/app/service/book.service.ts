import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASIC_URL = "http://localhost:8090";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  updateBook(bookData: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  postBook(book: any): Observable<any>{
    return this.http.post(BASIC_URL+"/book/v1/addBook",book);
  }

  getBook(): Observable<any>{
    return this.http.get(BASIC_URL+"/book/v1/Books");
  }

  getBookById(id: number): Observable<any>{
    return this.http.get(BASIC_URL+"/book/v1/getBook/" + id);
  }

  deleteBookById(id: number): Observable<any>{
    return this.http.delete(BASIC_URL+"/book/v1/deleteBook/" + id);
  }

}
