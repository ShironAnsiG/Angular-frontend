import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const role = localStorage.getItem('role');
  if (role === 'ADMIN') {
    return true;
  } else {
    alert('Access denied. Admins only.');
    return false;
  }
};