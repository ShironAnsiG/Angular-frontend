import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetBookComponent } from './components/get-book/get-book.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './component/home.component';
import { AdminComponent } from './component/admin.component';
import { UserComponent } from './component/user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'books', component: GetBookComponent },
  { path: 'add', component: BookFormComponent },
  { path: 'edit/:id', component: BookFormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserComponent },
 
  { path: '', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
