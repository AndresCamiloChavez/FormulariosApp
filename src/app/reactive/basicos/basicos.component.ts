import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   'nombre'      : new FormControl('Andrés'),
  //   'precio'      : new FormControl(1500),
  //   'existencias' : new FormControl(30),
  // });
  constructor(private formBuilder: FormBuilder) { }

  miFormulario: FormGroup = this.formBuilder.group({
    'nombre': [, [Validators.required, Validators.minLength(3)]],
    'precio': [, [Validators.required, Validators.min(0)]],
    'existencias': [,[Validators.required, Validators.min(10)]],
  });


  ngOnInit(): void {
    this.miFormulario.setValue({
      nombre: 'Andres',
      precio: 0,
      existencias: 0
    });

    this.miFormulario.get('nombre')?.setValue('Camilo');
  }

  campoEsValido(campo: any){
    return this.miFormulario.controls[campo]?.errors && this.miFormulario.controls[campo].touched
  }
  guardar(){
    if(!this.miFormulario.invalid){
      return;
    }
    // this.miFormulario.markAllAsTouched();
    this.miFormulario.reset();
    console.log('miFormulario', this.miFormulario.value);
    
  }

}
