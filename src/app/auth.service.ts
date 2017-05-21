/**
 * Created by vladr on 19.12.2016.
 */
import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable()
export class AuthService implements OnInit {

  public static decodeToken(token: string) {
    let h = new JwtHelper();
    return h.decodeToken(token);
  }

  public redirectUrl: string = '/home';
  private token: any;

  constructor(private http: Http, private router: Router, private api: ApiService) {
  }

  public ngOnInit() {
    let token = localStorage.getItem('id_token');
    if (token !== null) {
      this.token = AuthService.decodeToken(token);
    }
  }

  public login(token: string) {
    this.token = AuthService.decodeToken(token);
  }

  public logout() {
    this.token = undefined;
    localStorage.removeItem('user');
    localStorage.removeItem('id_token');
    this.router.navigateByUrl('/login');
  }

  public loggedIn() {
    return tokenNotExpired('id_token');
  }

  public isAdmin() {
    if (this.loggedIn() && this.token !== undefined) {
      return this.token.scopes.indexOf('ROLE_ADMIN') > -1;
    }
    return false;
  }

  public isModer() {
    if (this.loggedIn() && this.token !== undefined) {
      return this.token.scopes.indexOf('ROLE_MODERATOR') > -1;
    }
    return false;
  }

}
