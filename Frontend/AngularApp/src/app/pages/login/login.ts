import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMsg = '';
  loading = false;

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) {}

  login() {
  this.errorMsg = '';
  this.loading = true;

  this.api.login({
    username: this.username,
    password: this.password
  }).subscribe({
    next: (res: any) => {
      this.loading = false;

      if (!res || !res.token) {
        this.errorMsg = 'Invalid username or password';
        return;
      }

      this.auth.setToken(res.token);
      this.router.navigate(['/dashboard']);
    },
    error: () => {
      this.loading = false;
      this.errorMsg = 'Invalid username or password';
    }
  });
}
}