import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-doctor-appointments',
  imports: [CommonModule],
  templateUrl: './doctor-appointments.html',
  styleUrl: './doctor-appointments.css'
})
export class DoctorAppointmentsComponent {

  appointments: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.api.getDoctorAppointments().subscribe((res: any) => {
      this.appointments = res;
    });
  }

  complete(id: number) {
    this.api.completeAppointment(id).subscribe(res => {
      alert(res);
      this.load();
    });
  }

  cancel(id: number) {
    this.api.cancelByDoctor(id).subscribe(res => {
      alert(res);
      this.load();
    });
  }
}