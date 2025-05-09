import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetBookComponent } from './components/get-book/get-book.component';
import { BookFormComponent } from './components/book-form/book-form.component';

const routes: Routes = [
  { path: 'books', component: GetBookComponent },
  { path: 'add', component: BookFormComponent },         
  { path: 'edit/:id', component: BookFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
