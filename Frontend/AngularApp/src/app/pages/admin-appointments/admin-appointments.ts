import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-admin-appointments',
  imports: [CommonModule],
  templateUrl: './admin-appointments.html',
  styleUrl: './admin-appointments.css'
})
export class AdminAppointmentsComponent {
  appointments: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.api.getAllAppointments().subscribe((res: any) => {
      this.appointments = res;
    });
  }

  cancel(id: number) {
    this.api.cancelByAdmin(id).subscribe((res) => {
      alert(res);
      this.load();
    });
  }
}