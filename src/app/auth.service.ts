/**
 * Created by vladr on 19.12.2016.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {tokenNotExpired} from "angular2-jwt";
import {Router} from "@angular/router";
import {ApiService} from "./api.service";
import any = jasmine.any;

@Injectable()
export class AuthService {

  public redirectUrl: string = '/home';
  token: string;


  constructor(private http: Http, private router: Router, private api: ApiService) {
  }

  login(credentials) {
    this.api.login(credentials).subscribe(
      data => {
        localStorage.setItem('id_token', data.token);
        this.router.navigateByUrl(this.redirectUrl);
      },
      error => console.log(error)
    );
  }

  logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
    this.router.navigateByUrl('/login');
  }

  loggedIn() {
    return tokenNotExpired();
  }

}
