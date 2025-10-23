import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
  //  based on the condition it will show the output ------------
 // return false;

};
