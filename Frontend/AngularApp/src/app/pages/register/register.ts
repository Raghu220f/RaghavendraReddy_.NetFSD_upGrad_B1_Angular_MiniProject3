import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {
  username = '';
  password = '';
  role = 'Patient';

  constructor(private api: ApiService, private router: Router) {}

  register() {
  this.api.register({
    username: this.username,
    password: this.password,
    role: this.role
  }).subscribe((res) => {
    alert(res);

    if (res === 'Patient Registered Successfully') {
      this.router.navigate(['/']);
    }
  });
}

  goLogin() {
    this.router.navigate(['/']);
  }
}