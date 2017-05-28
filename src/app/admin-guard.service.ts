/**
 * Created by vladr on 09.05.2017.
 */
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {
  }

  public canActivate() {
    if (this.auth.isAdmin() || this.auth.isModer()) {
      return true;
    } else {
      this.router.navigateByUrl('/');
      return false;
    }
  }

}
