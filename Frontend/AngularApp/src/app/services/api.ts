import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  private headers() {
    const token = localStorage.getItem('token') ?? '';

    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  login(data: any) {
    return this.http.post(`${this.baseUrl}/users/login`, data);
  }

  getDoctors() {
    return this.http.get(`${this.baseUrl}/doctors`, {
      headers: this.headers()
    });
  }

  addDoctor(data: any) {
    return this.http.post(`${this.baseUrl}/doctors`, data, {
      headers: this.headers(),
      responseType: 'text'
    });
  }

  createPatient(data: any) {
  return this.http.post(`${this.baseUrl}/patients`, data, {
    headers: this.headers(),
    responseType: 'text'
  });
}

getMyProfile() {
  return this.http.get(`${this.baseUrl}/patients/me`, {
    headers: this.headers()
  });
}

bookAppointment(data: any) {
  return this.http.post(`${this.baseUrl}/appointments`, data, {
    headers: this.headers(),
    responseType: 'text'
  });
}

getMyAppointments() {
  return this.http.get(`${this.baseUrl}/appointments/my`, {
    headers: this.headers()
  });
}

cancelAppointment(id: number) {
  return this.http.put(`${this.baseUrl}/appointments/cancel/patient/${id}`, {}, {
    headers: this.headers(),
    responseType: 'text'
  });
}

getDoctorAppointments() {
  return this.http.get(`${this.baseUrl}/appointments/doctor`, {
    headers: this.headers()
  });
}

completeAppointment(id: number) {
  return this.http.put(`${this.baseUrl}/appointments/complete/${id}`, {}, {
    headers: this.headers(),
    responseType: 'text'
  });
}

cancelByDoctor(id: number) {
  return this.http.put(`${this.baseUrl}/appointments/cancel/doctor/${id}`, {}, {
    headers: this.headers(),
    responseType: 'text'
  });
}

register(data: any) {
  return this.http.post(`${this.baseUrl}/users/register`, data, {
    responseType: 'text'
  });
}

getAllAppointments() {
  return this.http.get(`${this.baseUrl}/appointments/all`, {
    headers: this.headers()
  });
}

cancelByAdmin(id: number) {
  return this.http.put(`${this.baseUrl}/appointments/cancel/admin/${id}`, {}, {
    headers: this.headers(),
    responseType: 'text'
  });
}
}