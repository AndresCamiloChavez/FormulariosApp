import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() {}

  noPuedeSerStrider(argumento: FormControl):ValidationErrors | null {
    const value: string = argumento.value?.trim().toLowerCase();
    if (value === 'strider') {
      return {
        noStrider: true,
      };
      //ERROR!!!
    }
    return null;
  }
}
