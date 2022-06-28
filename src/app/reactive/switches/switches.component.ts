import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css'],
})
export class SwitchesComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  miFormulario: FormGroup = this.formBuilder.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue],
  });
  persona = {
    genero: 'F',
    notificaciones: true,
  };

  ngOnInit(): void {
    this.miFormulario.reset({
      genero: this.persona.genero,
      notificaciones: this.persona.notificaciones,
    });

    this.miFormulario.get('genero')?.valueChanges.subscribe( genero => {
      // valor reactivo del control
    });

    this.miFormulario.valueChanges.subscribe( ({data, ...rest})  =>{

      this.persona  = rest;
      console.log('Valor de la suscripción ', data);
      this.persona.genero = data.genero; 
      
    });
  }

  guardar() {
    const formValue = {...this.miFormulario.value};
    delete formValue.condiciones; 
    console.log('Valor del formulario ', formValue);
    
    
  }
}
