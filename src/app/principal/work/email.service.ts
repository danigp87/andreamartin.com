import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})

export class EmailService {
  
  constructor() {
    emailjs.init('service_c4tbxzw');
  }
  
}