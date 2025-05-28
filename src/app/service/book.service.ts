import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASIC_URL = "http://localhost:8090";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  
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

  updateBookById(id: number, book: any): Observable<any>{
    return this.http.put(BASIC_URL+"/book/v1/updateBook/" + id, book);
  }

  deleteBookById(id: number): Observable<any>{
    return this.http.delete(BASIC_URL+"/book/v1/deleteBook/" + id);
  }

}
