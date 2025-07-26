import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styles: ``
})
export class Login {

  username = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'user' && this.password === 'user123') {
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/dashboard']); // redirect on success
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }

}
