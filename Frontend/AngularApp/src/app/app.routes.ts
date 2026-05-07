import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { DoctorComponent } from './pages/doctor/doctor';
import { AddDoctorComponent } from './pages/add-doctor/add-doctor';
import { PatientComponent } from './pages/patient/patient';
import { AppointmentComponent } from './pages/appointment/appointment';
import { MyAppointmentsComponent } from './pages/my-appointments/my-appointments';
import { DoctorAppointmentsComponent } from './pages/doctor-appointments/doctor-appointments';
import { AdminAppointmentsComponent } from './pages/admin-appointments/admin-appointments';

export const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'doctors', component: DoctorComponent },
  { path: 'add-doctor', component: AddDoctorComponent },
  { path: 'patient-profile', component: PatientComponent },
  { path: 'book-appointment', component: AppointmentComponent },
  { path: 'my-appointments', component: MyAppointmentsComponent },
  { path: 'doctor-appointments', component: DoctorAppointmentsComponent },
  { path: 'admin-appointments', component: AdminAppointmentsComponent },
  { path: '**', redirectTo: '' }
];