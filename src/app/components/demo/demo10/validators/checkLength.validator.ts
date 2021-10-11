import { AbstractControl, ValidatorFn } from '@angular/forms';

export function CheckLength(min: number, max: number): ValidatorFn {
  return (control: AbstractControl) => {
    let valueOf = control.value;
    // let nameOf = control.get[0]?.name;

    if (valueOf == null) return null;
    if (valueOf.length < min || valueOf.length > max)
      return {
        errorFieldLength: `Le champs doit être entre ${min} et ${max}`,
      };

    return null;
  };
}
