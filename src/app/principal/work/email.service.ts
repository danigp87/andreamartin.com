import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private emailUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  sendEmail(trabajo: string, nombre: string, mail: string, tlf:number, descripcion: string) {
    const data = {
      work: trabajo,
      name: nombre,
      email: mail,
      phone: tlf,
      message: descripcion
    };
    return this.http.post(this.emailUrl, data);
  }

}