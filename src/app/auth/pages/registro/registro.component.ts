import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validator,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  //TODO: TEMPORAL
  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  noPuedeSerStrider(argumento: FormControl) {
    const value: string = argumento.value?.trim().toLowerCase();
    if (value === 'strider') {
      return {
        noStrider: true,
      };
      //ERROR!!!
    }
    return null;
  }

  miFormulario: FormGroup = this.fb.group({
    nombre: [
      '',
      [Validators.required, Validators.pattern(this.nombreApellidoPattern)],
    ],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    username: ['', [Validators.required, this.noPuedeSerStrider]],
    // password: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Andres camilo',
      email: 'andres@email.com',
    });
  }

  campoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }
  guardar() {
    this.miFormulario.markAllAsTouched();
  }
}
