import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetBookComponent } from './components/get-book/get-book.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { LoginComponent } from './login/login.component';
import { adminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'books', component: GetBookComponent },
  { path: 'add', component: BookFormComponent },
   { path: 'add', component: BookFormComponent, canActivate: [adminGuard] },
  { path: 'edit/:id', component: BookFormComponent, canActivate: [adminGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
