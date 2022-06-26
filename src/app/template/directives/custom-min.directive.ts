import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  // Debe tener un customMin y NgModel para que funcione la directiva
  selector: '[customMin] [ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomMinDirective,
      multi: true
    },
  ],
})
export class CustomMinDirective implements Validator {
  @Input() minimo!: number;

  constructor() {}
  validate(control: FormControl) {
    // En caso de cumplir la cundición enviamos un error de lo contrario pasa la validación con el NULL
    return (control.value<this.minimo) ? {'customMin': true} : null;
  }
}
