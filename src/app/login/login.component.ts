import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  loading = false;

  constructor(private http: HttpClient, private router: Router) {}

  login() {
  this.errorMessage = '';  
  this.loading = true;     

 
  const basicAuth = 'Basic ' + btoa(this.username + ':' + this.password);
  console.log('Authorization Header:', basicAuth);  

 
  this.http.post<any>('http://localhost:8090/api/auth/login', {}, {
    headers: new HttpHeaders({
      'Authorization': basicAuth
    })
  }).subscribe({
    next: (res) => {
      this.loading = false;
      console.log('Login successful:', res);
      localStorage.setItem('role', res.role);  

      
      if (res.role === 'ADMIN') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/user']);
      }
    },
    error: (err) => {
  this.loading = false;
  console.error('Login failed', err);

  
  console.log('Error Response:', err);

 
  if (err.status === 401) {
    this.errorMessage = 'Invalid username or password. Please try again.';
  } else if (err.status === 0) {
    this.errorMessage = 'Network error. Please check your internet connection.';
  } else {
    this.errorMessage = `Error: ${err.statusText || 'An unexpected error occurred'}`;
  }
}

  });
}

}
