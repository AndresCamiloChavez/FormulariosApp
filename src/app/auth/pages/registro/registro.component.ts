import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  nombreApellidoPattern,
  noPuedeSerStrider,
} from 'src/app/shared/validator/validaciones';
import { ValidatorService } from '../../services/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) {}

  miFormulario: FormGroup = this.fb.group(
    {
      nombre: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.nombreApellidoPattern),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.emailPattern),
        ],[this.emailValidator]
      ],
      username: [
        '',
        [Validators.required, this.validatorService.noPuedeSerStrider],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    },
    {
      validators: [
        this.validatorService.camposIguales('password', 'password2'),
      ],
    }
  );

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Andres camilo',
      email: 'andres@email.com',
      username: 'Andrescz8',
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
  emailRequired(){  
    return (
      this.miFormulario.get('email')?.hasError('required') && this.miFormulario.get('email')?.touched );
  }
  emailPattern(){  
    return (
      this.miFormulario.get('email')?.hasError('pattern') && this.miFormulario.get('email')?.touched );
  }
  emailTomato(){  
    return (
      this.miFormulario.get('email')?.hasError('emailExiste') && this.miFormulario.get('email')?.touched );
  }
}
