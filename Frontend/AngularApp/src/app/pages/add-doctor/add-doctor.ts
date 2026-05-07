import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-doctor',
  imports: [FormsModule],
  templateUrl: './add-doctor.html',
  styleUrl: './add-doctor.css'
})
export class AddDoctorComponent {

  name = '';
  specialization = '';

  constructor(private api: ApiService, private router: Router) {}

  addDoctor() {
    this.api.addDoctor({
      name: this.name,
      specialization: this.specialization
    }).subscribe({
      next: () => {
        alert('Doctor Added Successfully');
        this.router.navigate(['/doctors']);
      },
      error: (err) => {
        alert('Failed to add doctor');
        console.log(err);
      }
    });
  }
}