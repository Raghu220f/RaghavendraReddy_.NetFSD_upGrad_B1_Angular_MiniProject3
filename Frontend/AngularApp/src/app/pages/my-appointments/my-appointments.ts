import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-my-appointments',
  imports: [CommonModule],
  templateUrl: './my-appointments.html',
  styleUrl: './my-appointments.css'
})
export class MyAppointmentsComponent {
  appointments: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadAppointments();
  }

  loadAppointments() {
    this.api.getMyAppointments().subscribe((res: any) => {
      this.appointments = res;
    });
  }

  cancel(id: number) {
    this.api.cancelAppointment(id).subscribe((res) => {
      alert(res);
      this.loadAppointments();
    });
  }
}