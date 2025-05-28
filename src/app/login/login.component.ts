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
  this.errorMessage = '';   // Clear any previous error message
  this.loading = true;      // Set loading to true while processing

  // Basic Auth: Base64 encode the username and password
  const basicAuth = 'Basic ' + btoa(this.username + ':' + this.password);
  console.log('Authorization Header:', basicAuth);  // Log the Authorization header to ensure it's correct

  // Make the POST request with the Authorization header
  this.http.post<any>('http://localhost:8090/api/auth/login', {}, {
    headers: new HttpHeaders({
      'Authorization': basicAuth
    })
  }).subscribe({
    next: (res) => {
      this.loading = false;
      console.log('Login successful:', res);
      localStorage.setItem('role', res.role);  // Save the role in localStorage

      // Redirect based on user role
      if (res.role === 'ADMIN') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/user']);
      }
    },
    error: (err) => {
      this.loading = false;
      console.error('Login failed', err);

      // Show appropriate error message based on the error
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
