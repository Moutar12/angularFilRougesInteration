import { FormGroup } from '@angular/forms';

//validateur personnalisé pour vérifier que deux champs correspondent
export function MustMatch(passwordKey: string, confirmPasswordKey: string) {
  // @ts-ignore
  return (group: ControlGroup): {
    [key: string]: any
  } => {
    // @ts-ignore
    let password = group.controls[passwordKey];
    // @ts-ignore
    let confirmPassword = group.controls[confirmPasswordKey];

    if (password.value !== confirmPassword.value) {
      return {
        mismatchedPasswords: true
      };
    }
  }
}
