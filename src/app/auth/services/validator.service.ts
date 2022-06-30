import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() {}

  noPuedeSerStrider(argumento: FormControl): ValidationErrors | null {
    const value: string = argumento.value?.trim().toLowerCase();
    if (value === 'strider') {
      return {
        noStrider: true,
      };
      //ERROR!!!
    }
    return null;
  }

  camposIguales(campo1: string, campo2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass1 = formGroup.get('password')?.value;
      const pass2 = formGroup.get('password2')?.value;
      if (pass1 == pass2) {
        formGroup.get(campo2)?.setErrors(null);
        return null;
      } else {
        formGroup.get(campo2)?.setErrors({ noIguales: true });
        return {
          noIguales: true,
        };
      }
    };
  }
}
