import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../service/book.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-book',
  standalone: false,
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  updateBookForm!: FormGroup;
  id!: number;
  bookService: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: BookService,
    private fb: FormBuilder) {}

  ngOnInit() {
    this.updateBookForm = this.fb.group({
      title: [null,Validators.required],
      author:[null,Validators.required],
      genre: [null,Validators.required]

    })
    this.id = +this.activatedRoute.snapshot.params["id"];
    if (isNaN(this.id)) {
      console.error("Invalid ID provided in route!");
      return;
    }
    this.getBookById();
  }

  getBookById() {
    this.service.getBookById(this.id).subscribe((res) => {
      console.log("Fetched book:", res);
      this.updateBookForm.patchValue(res);
    });
  }

  deleteBookById(id:number){
    this.bookService.deleteBookById(id).subscribe((res: any) =>{
      console.log(res);
    })
  }
}