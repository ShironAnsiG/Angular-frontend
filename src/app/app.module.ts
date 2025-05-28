import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetBookComponent } from './components/get-book/get-book.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookFormComponent } from './components/book-form/book-form.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './component/user.component';
import { AdminComponent } from './component/admin.component';
import { HomeComponent } from './component/home.component';
import { BookService } from './service/book.service';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    GetBookComponent,
    RouterModule,
    CommonModule,
    BookFormComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    HomeComponent
],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
