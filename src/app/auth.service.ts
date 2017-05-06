/**
 * Created by vladr on 19.12.2016.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable()
export class AuthService {

  public redirectUrl: string = '/home';
  private token: string;

  constructor(private http: Http, private router: Router, private api: ApiService) {
  }

  public login(credentials) {
    this.api.login(credentials).subscribe(
      (data) => {
        localStorage.setItem('id_token', data.token);
        this.router.navigateByUrl(this.redirectUrl);
      },
      (error) => console.log(error)
    );
  }

  public logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
    this.router.navigateByUrl('/login');
  }

  public loggedIn() {
    return tokenNotExpired();
  }

}
