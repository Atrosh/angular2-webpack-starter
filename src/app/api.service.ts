/**
 * Created by vladr on 21.12.2016.
 */
import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions} from "@angular/http";
import "rxjs/add/operator/map";
import any = jasmine.any;

@Injectable()
export class ApiService {

  API_URL = 'api/';

  constructor(private http: Http) {
  }

  login(credentials) {
    return this.http.post(this.API_URL + 'auth/login', credentials, this.getRequestOptions())
      .map(res => res.json());
  }

  deleteUser(id) {
    return this.http.delete(this.API_URL + 'user/' + id, this.getRequestOptions());
  }

  createNewUser(user) {
    return this.http.post(this.API_URL + 'user', user, this.getRequestOptions())
      .map(res => res.json());
  }

  getCurrentUser() {
    return this.http.get(this.API_URL + 'me', this.getRequestOptions())
      .map(res => res.json());
  }

  getAllUsers() {
    return this.http.get(this.API_URL + 'user/all', this.getRequestOptions())
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

  getRoles() {
    return this.http.get(this.API_URL + 'role', this.getRequestOptions())
      .map(res => res.json());
  }

  getOrganisations() {
    return this.http.get(this.API_URL + 'organisation', this.getRequestOptions())
      .map(res => res.json());
  }

  createOrganisations(organisation) {
    return this.http.post(this.API_URL + 'organisation', organisation, this.getRequestOptions())
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
