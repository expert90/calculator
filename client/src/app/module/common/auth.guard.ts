import {Injectable} from 'angular2/core';
import {Router, CanActivate} from 'angular2/router';
import {tokenNotExpired} from 'angular2-jwt';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    if (tokenNotExpired()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}