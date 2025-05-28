import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';




@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
  imports: [ CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule]
})
export class BookFormComponent implements OnInit {
  bookForm!: FormGroup;
  id!: number;
  isEditMode: boolean = false;
  isAdmin: boolean = false;
  bookService: any;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,

  ) {}

  ngOnInit() {
     
    this.bookForm = this.fb.group({
      title: [null, Validators.required],
      author: [null, Validators.required],
      genre: [null, Validators.required]
    });

    this.id = +this.activatedRoute.snapshot.params["id"];
    if (this.id) {
      this.isEditMode = true;
      this.getBookById();
    }
  }

  getBookById() {
    this.bookService.getBookById(this.id).subscribe((res: { [key: string]: any; }) => {
      console.log("Fetched book:", res);
      this.bookForm.patchValue(res);
    });
  }

  submitForm() {
    if (this.isEditMode) {
      this.updateBook();
    } else {
      this.addBook();
    }
  }

  addBook() {
    console.log(this.bookForm.value);
    this.bookService.postBook(this.bookForm.value).subscribe({
      next: (res: any) => {
      console.log(res);
      alert('Book added successfully!');
      this.router.navigateByUrl('books'); 
      }
    });
  }

  updateBook() {
    console.log(this.bookForm.value);
    this.bookService.updateBookById(this.id, this.bookForm.value).subscribe((res: any) => {
      console.log(res);
      this.router.navigateByUrl('books'); 
    });
  }
}