import { AbstractControl } from "@angular/forms";

export function checkIfEndDateAfterStartDate(control: AbstractControl): { [key: string]: any } | null {
  if (!control.get('confirmPassword')?.value || control.get('confirmPassword')?.errors?.['pattern']) {
    return null;
  }
  if (control.get('password')?.value === control.get('confirmPassword')?.value) {
    control.get('confirmPassword')?.setErrors(null);
  }
  else {
    control.get('confirmPassword')?.setErrors({ isPasswordInvalid: true });
  }
  return null;
}
