import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-book',
  standalone: false,
  templateUrl: './post-book.component.html',
  styleUrls: ['./post-book.component.css']
})
export class PostBookComponent implements OnInit {

  postBookForm!: FormGroup;
  book : any;

  constructor(
    private bookService: BookService,
    private fb: FormBuilder,
    private router: Router){ }

    ngOnInit() {  
      this.postBookForm = this.fb.group({
        title: [null,Validators.required],
        author: [null,Validators.required],
        genre: [null,Validators.required]
      });
  
  }

  postBook() {
    console.log(this.postBookForm.value);
    this.bookService.postBook(this.postBookForm.value).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl("");
    })
    
  }
}
