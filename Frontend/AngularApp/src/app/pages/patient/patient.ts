import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-patient',
  imports: [CommonModule, FormsModule],
  templateUrl: './patient.html',
  styleUrl: './patient.css'
})
export class PatientComponent {
  name = '';
  age = 0;
  profile: any = null;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadProfile();
  }

  createProfile() {
    this.api.createPatient({
      name: this.name,
      age: this.age
    }).subscribe({
      next: (res) => {
        alert(res);
        this.loadProfile();
      },
      error: (err) => {
        alert('Failed to create profile');
        console.log(err);
      }
    });
  }

  loadProfile() {
    this.api.getMyProfile().subscribe({
      next: (res: any) => {
        this.profile = res;
      },
      error: () => {
        this.profile = null;
      }
    });
  }
}