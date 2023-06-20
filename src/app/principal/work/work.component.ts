import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { work } from '@app/interfaces';
import { EmailService } from './email.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.less']
})
export class WorkComponent {

  trabajos: string[] = ["Concept Art", "Tattoo", "Ilustración"]
  opcion: string | undefined;

  presu: work[] = []

  public presuForm: FormGroup = this.fb.group({
    trabajo: ['', Validators.required],
    nombre: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)]],
    mail: ['', [Validators.required, Validators.email]],
    tlf: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    descripcion: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)]]
  })

  constructor(private fb: FormBuilder, private emailService: EmailService) { }
  /* get f() { return this.presuForm.controls } */


  enviar() {
    const trabajo = this.presuForm.controls['trabajo'].value
    const nombre = this.presuForm.controls['nombre'].value
    const mail = this.presuForm.controls['mail'].value
    const tlf = this.presuForm.controls['tlf'].value
    const descripcion = this.presuForm.controls['descripcion'].value

    this.emailService.sendEmail(trabajo, nombre, mail, tlf, descripcion).subscribe({
      next: response => {
        console.log('Correo electrónico enviado correctamente');
      },
      error: error => {
        console.log('Error al enviar el correo electrónico:', error);
      }
    });

    const nuevoPresu = {trabajo, nombre, mail, tlf, descripcion }
    this.presu.push(nuevoPresu)
    console.log(this.presu)
  }


  /* showConcept: boolean = false
  concept() {
    this.showConcept = !this.showConcept
    this.showTattoo = false
    this.showIlustration = false
  }
  showTattoo: boolean = false
  tattoo() {
    this.showTattoo = !this.showTattoo
    this.showConcept = false
    this.showIlustration = false
  }
  showIlustration: boolean = false
  ilustration() {
    this.showIlustration = !this.showIlustration
    this.showConcept = false
    this.showTattoo = false
  } */

}
