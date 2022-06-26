import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}
interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css'],
})
export class DinamicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  persona: Persona = {
    nombre: 'Andres',
    favoritos: [
      {id: 1,nombre: 'Manzana'},
      {id: 2,nombre: 'Peras'},
    ],
  };
  nombreNuevoFavorito = '';

  constructor() {}

  ngOnInit(): void {}

  guardar() {
    console.log('Formulario posteado');
  }

  validacionNombre() {
    return (
      this.miFormulario?.controls['nombre']?.value.length <= 0 &&
      this.miFormulario?.controls['nombre']?.touched
    );
  }
  deleteFavorito(favorito: Favorito){
    this.persona.favoritos = this.persona.favoritos.filter(element => element.id != favorito.id);
  }
  deleteByIndexFavorito(index: any){
    this.persona.favoritos.splice(index, 1);
  }
  agregarFavorito(){
    const mfavorito = {
      id: this.persona.favoritos.length,
      nombre: this.nombreNuevoFavorito
    }
    this.persona.favoritos.push({...mfavorito});
    this.nombreNuevoFavorito = '';
  }
}
