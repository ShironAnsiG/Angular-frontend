import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { Router } from '@angular/router';

@Component({
  
  selector: 'app-get-book',
  templateUrl: './get-book.component.html',
  styleUrls: ['./get-book.component.css']

})
export class GetBookComponent implements OnInit{

  books: any = [];
  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  updatebook(id: number){
    this.router.navigate(['/book', id]);
  }
  
  goToBook() {
    this.router.navigate(['/book']);
  }

  ngOnInit(): void{
    this.getBook();
    
  }
  getBook(){
    this.bookService.getBook().subscribe((res)=>{
      console.log(res);
      this.books = res;

    })
  }
  deleteBookById(id: number){
    this.bookService.deleteBookById(id).subscribe((res)=>{
      console.log(res);
      this.getBook();

    })
  }

}