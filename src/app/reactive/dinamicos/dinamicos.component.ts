import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css'],
})
export class DinamicosComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.formBuilder.array([
      ['Manzana', Validators.required],
      ['Pera',Validators.required],
    ], Validators.required),
  });

  nuevoFavorito: FormControl = this.formBuilder.control('', [Validators.required])


  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }
  ngOnInit(): void {}

  validaroNombre(control: string) {
    return (
      this.miFormulario.controls[control].errors &&
      this.miFormulario.controls[control].touched
    );
  }

  guardar() {
    this.miFormulario.markAllAsTouched();
    if (this.miFormulario.invalid) {
      return;
    }
    console.log('Valor de formulario');
    this.miFormulario.reset();
  }
  agregar(){
    if(this.nuevoFavorito.invalid){
      return;
    }
    this.favoritosArr.push(this.formBuilder.control(this.nuevoFavorito.value ));
    this.nuevoFavorito.reset();
  }
  eliminarFavorito(index: any) {
    this.favoritosArr.removeAt(index);
  }
}
