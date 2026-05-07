import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-doctor',
  imports: [CommonModule],
  templateUrl: './doctor.html',
  styleUrl: './doctor.css'
})
export class DoctorComponent {

  doctors: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadDoctors();
  }

  loadDoctors() {
    this.api.getDoctors().subscribe({
      next: (res: any) => {
        this.doctors = res;
      },
      error: (err) => {
        alert('Failed to load doctors');
        console.log(err);
      }
    });
  }
}