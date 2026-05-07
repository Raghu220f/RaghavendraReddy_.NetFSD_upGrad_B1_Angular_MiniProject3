import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-appointment',
  imports: [CommonModule, FormsModule],
  templateUrl: './appointment.html',
  styleUrl: './appointment.css'
})
export class AppointmentComponent {
  doctorId = 0;
  date = '';
  minDateTime = '';
  doctors: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadDoctors();
    this.setMinDateTime();
  }

  setMinDateTime() {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    this.minDateTime = now.toISOString().slice(0, 16);
  }

  loadDoctors() {
    this.api.getDoctors().subscribe((res: any) => {
      this.doctors = res;
    });
  }

  book() {
    if (this.doctorId === 0) {
      alert('Please select a doctor');
      return;
    }

    if (!this.date || new Date(this.date) < new Date()) {
      alert('Past date/time is not allowed');
      return;
    }

    this.api.bookAppointment({
      doctorId: this.doctorId,
      appointmentDate: this.date
    }).subscribe({
      next: (res) => {
        alert(res);
        this.doctorId = 0;
        this.date = '';
      },
      error: (err) => {
        alert('Booking failed');
        console.log(err);
      }
    });
  }
}