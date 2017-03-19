/**
 * Created by vladr on 21.12.2016.
 */
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import any = jasmine.any;
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class ApiService {

  API_URL = 'http://localhost:8080/api/';

  constructor(private http: Http) {
  }

  getCurrentUser() {
    return this.http.get(this.API_URL + 'me', this.getRequestOptions())
      .map(res => res.json());
  }

  getLessons() {
    return this.http.get(this.API_URL + 'lessons', this.getRequestOptions())
      .map(res => res.json());
  }

  getWeek() {
    return this.http.get(this.API_URL + 'week', this.getRequestOptions())
      .map(res => res.json());
  }

  getRequestOptions() {
    let headers = new Headers({
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
      'X-Authorization': 'Bearer ' + localStorage.getItem('id_token'),
      'Cache-Control': 'no-cache'
    });
    return new RequestOptions({headers: headers})
  }

}
