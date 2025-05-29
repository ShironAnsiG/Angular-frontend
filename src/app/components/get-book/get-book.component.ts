import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { Router, RouterModule } from '@angular/router';
import { switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  
  selector: 'app-get-book',
  templateUrl: './get-book.component.html',
  styleUrls: ['./get-book.component.css'],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule, 
    RouterModule  
  ]

})
export class GetBookComponent implements OnInit{

  books: any = [];
  role: string = '';
  constructor(
    private bookService: BookService,
    private router: Router
  ) {}



  ngOnInit(): void{
    this.role = localStorage.getItem('role') || '';
    this.getBook();
    
  }
   isAdmin(): boolean {
    return this.role === 'ADMIN';
  } 

   updatebook(id: number){
    this.router.navigate(['/edit', id]);
  }
  
  goToBook() {
    this.router.navigate(['/add']);

  }


  getBook(){
    this.bookService.getBook().subscribe((res)=>{
      console.log(res);
      this.books = res;

    })
  }
  deleteBookById(id: number) {
    this.bookService.deleteBookById(id).pipe(
      switchMap(() => this.bookService.getBook())
    ).subscribe((res) => {
      this.books = res;
    });
  }

}