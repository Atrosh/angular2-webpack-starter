/**
 * Created by vladr on 19.12.2016.
 */
import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
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
    this.http.post(this.api.API_URL + 'auth/login', credentials, this.getHeaders())
      .map(res => res.json())
      .subscribe(
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

  getHeaders() {
    let headers = new Headers({
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    return new RequestOptions({headers: headers});
  }
}
