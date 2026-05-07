import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {

  constructor(public auth: AuthService, private router: Router) {}

  get role() {
    return this.auth.getRole();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}