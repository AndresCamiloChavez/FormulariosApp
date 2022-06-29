import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  templateMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta:'template/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta:'template/dinamicos'
    },
    {
      texto: 'Switches',
      ruta:'template/switches'
    }
  ];
  reactiveMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta:'reactive/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta:'reactive/dinamicos'
    },
    {
      texto: 'Switches',
      ruta:'reactive/switches'
    }
  ];

  validacionesMenu: MenuItem[] = [
    {
      texto: 'Validacione a login',
      ruta: 'auth/login'
    },
    {
      texto: 'Validacione a registro',
      ruta: 'auth/registro'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

interface MenuItem{
  texto: string;
  ruta: string;
}
