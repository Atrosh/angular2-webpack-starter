/**
 * Created by vladr on 21.12.2016.
 */
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  private API_URL = 'api/';

  constructor(private http: Http) {
  }

  public login(credentials) {
    return this.http.post(this.API_URL + 'auth/login', credentials, this.getRequestOptions())
      .map((res) => res.json());
  }

  public deleteUser(id) {
    return this.http.delete(this.API_URL + 'user/' + id, this.getRequestOptions());
  }

  public deleteOrganisation(id) {
    return this.http.delete(this.API_URL + 'organisation/' + id, this.getRequestOptions());
  }

  public createNewUser(user) {
    return this.http.post(this.API_URL + 'user', user, this.getRequestOptions())
      .map((res) => res.json());
  }

  public createNewCourse(course) {
    return this.http.post(this.API_URL + 'course', course, this.getRequestOptions())
      .map((res) => res.json());
  }

  public updateCourse(course) {
    return this.http.put(this.API_URL + 'course', course, this.getRequestOptions())
      .map((res) => res.json());
  }

  public getCourse(id) {
    return this.http.get(this.API_URL + 'course/' + id, this.getRequestOptions())
      .map((res) => res.json());
  }

  public getUnits(id) {
    return this.http.get(this.API_URL + 'unit/' + id, this.getRequestOptions())
      .map((res) => res.json());
  }

  public saveUnits(units) {
    return this.http.post(this.API_URL + 'unit', units, this.getRequestOptions())
      .map((res) => res.json());
  }

  public getCurrentUser() {
    return this.http.get(this.API_URL + 'me', this.getRequestOptions())
      .map((res) => res.json());
  }

  public getAllUsers() {
    return this.http.get(this.API_URL + 'user/all', this.getRequestOptions())
      .map((res) => res.json());
  }

  public getLessons() {
    return this.http.get(this.API_URL + 'lessons', this.getRequestOptions())
      .map((res) => res.json());
  }

  public getWeek() {
    return this.http.get(this.API_URL + 'week', this.getRequestOptions())
      .map((res) => res.json());
  }

  public getRoles() {
    return this.http.get(this.API_URL + 'role', this.getRequestOptions())
      .map((res) => res.json());
  }

  public getOrganisations() {
    return this.http.get(this.API_URL + 'organisation', this.getRequestOptions())
      .map((res) => res.json());
  }

  public getCourses() {
    return this.http.get(this.API_URL + 'course', this.getRequestOptions())
      .map((res) => res.json());
  }

  public createOrganisation(organisation) {
    return this.http.post(this.API_URL + 'organisation', organisation, this.getRequestOptions())
      .map((res) => res.json());
  }

  public createLessons(lessons) {
    return this.http.post(this.API_URL + 'lesson', lessons, this.getRequestOptions())
      .map((res) => res.json());
  }

  public getRequestOptions() {
    let headers = new Headers({
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
      'X-Authorization': 'Bearer ' + localStorage.getItem('id_token'),
      'Cache-Control': 'no-cache'
    });
    return new RequestOptions({headers});
  }

}
