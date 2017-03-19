/**
 * Created by vladr on 19.12.2016.
 */
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {CanActivate} from '@angular/router';
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate() {
    if (this.auth.loggedIn()) {
      return true;
    } else {
      //console.log(this.router.);
      //this.auth.redirectUrl = this.state.url;
      this.router.navigateByUrl('/login');
      return false;
    }
  }

}
