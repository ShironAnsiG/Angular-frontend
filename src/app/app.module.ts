import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostBookComponent } from './components/post-book/post-book.component';

import { UpdateBookComponent } from './components/update-book/update-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { GetBookComponent } from './components/get-book/get-book.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PostBookComponent,
    UpdateBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    GetBookComponent,
    RouterModule,
    CommonModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
