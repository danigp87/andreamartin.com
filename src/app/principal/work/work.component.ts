import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { work } from '@app/interfaces';
import emailjs from 'emailjs-com';
import { EMAILJS_SERVICE_ID } from './emailjs-config';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.less']
})

export class WorkComponent {

  constructor(private fb: FormBuilder) { }
  get f() { return this.presuForm.controls }
  trabajos: string[] = ["CONCEPT ART", "TATTOO", "ILUSTRACIÓN"]
  opcion: string | undefined;
  presu: work[] = []

  public presuForm: FormGroup = this.fb.group({
    trabajo: ['', Validators.required],
    nombre: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)]],
    mail: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
    tlf: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern(/^\d{9}$/)]],
    descripcion: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]]
  })

  public camposInvalidos: { [key: string]: boolean } = {
    trabajo: false,
    nombre: false,
    mail: false,
    tlf: false,
    descripcion: false
  };

  enviar() {
    if (this.presuForm.valid) {
      const nuevoPresu = {
        Trabajo: this.presuForm.controls['trabajo'].value,
        Nombre: this.presuForm.controls['nombre'].value,
        Mail: this.presuForm.controls['mail'].value,
        Teléfono: this.presuForm.controls['tlf'].value,
        Descripción: this.presuForm.controls['descripcion'].value
      };

      emailjs.send(EMAILJS_SERVICE_ID, 'template_ug0evrq', nuevoPresu)
        .then((response) => {
          console.log('Correo electrónico enviado:', response);
        })
        .catch((error) => {
          console.error('Error al enviar el correo electrónico:', error);
        });

      this.presuForm.reset();
      console.log(this.presu)
    }

    else {
      this.camposInvalidos = {
        trabajo: !this.presuForm.get('trabajo')?.valid,
        nombre: !this.presuForm.get('nombre')?.valid,
        mail: !this.presuForm.get('mail')?.valid,
        tlf: !this.presuForm.get('tlf')?.valid,
        descripcion: !this.presuForm.get('descripcion')?.valid
      };
    }
  }
}
