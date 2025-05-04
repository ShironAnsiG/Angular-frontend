import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostBookComponent } from './components/post-book/post-book.component';
import { GetBookComponent } from './components/get-book/get-book.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';

const routes: Routes = [
  {path: 'book', component: PostBookComponent},
  {path: "", component: GetBookComponent},
  {path: "book/:id", component: UpdateBookComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
