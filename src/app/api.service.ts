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

  public deleteCourse(id) {
    return this.http.delete(this.API_URL + 'course/' + id, this.getRequestOptions());
  }

  public deleteUnit(id) {
    return this.http.delete(this.API_URL + 'unit/' + id, this.getRequestOptions());
  }

  public deleteParagraph(id) {
    return this.http.delete(this.API_URL + 'paragraph/' + id, this.getRequestOptions());
  }

  public deleteStep(id) {
    return this.http.delete(this.API_URL + 'step/' + id, this.getRequestOptions());
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

  public createOrganisation(organisation) {
    return this.http.post(this.API_URL + 'organisation', organisation, this.getRequestOptions())
      .map((res) => res.json());
  }

  public createLessons(lessons) {
    return this.http.post(this.API_URL + 'lesson', lessons, this.getRequestOptions())
      .map((res) => res.json());
  }

  public saveUnits(units) {
    return this.http.post(this.API_URL + 'unit', units, this.getRequestOptions());
  }

  public saveSteps(steps) {
    return this.http.post(this.API_URL + 'step', steps, this.getRequestOptions());
  }

  public saveParagraphs(units) {
    return this.http.post(this.API_URL + 'paragraph', units, this.getRequestOptions());
  }

  public saveProgress(progress) {
    return this.http.post(this.API_URL + 'progress', progress, this.getRequestOptions())
      .map((res) => res.json());
  }

  public updateCourse(course) {
    return this.http.put(this.API_URL + 'course', course, this.getRequestOptions())
      .map((res) => res.json());
  }

  public updateUnit(unit) {
    return this.http.put(this.API_URL + 'unit', unit, this.getRequestOptions())
      .map((res) => res.json());
  }

  public updateParagraph(paragraph) {
    return this.http.put(this.API_URL + 'paragraph', paragraph, this.getRequestOptions())
      .map((res) => res.json());
  }

  public getOrganisationCourses(id) {
    return this.http.get(this.API_URL + 'course/organisation/' + id, this.getRequestOptions())
      .map((res) => res.json());
  }

  public getCourse(id) {
    return this.http.get(this.API_URL + 'course/' + id, this.getRequestOptions())
      .map((res) => res.json());
  }

  public getUnit(id) {
    return this.http.get(this.API_URL + 'unit/' + id, this.getRequestOptions())
      .map((res) => res.json());
  }

  public getUnits(id) {
    return this.http.get(this.API_URL + 'unit/course/' + id, this.getRequestOptions())
      .map((res) => res.json());
  }

  public getParagraph(id) {
    return this.http.get(this.API_URL + 'paragraph/' + id, this.getRequestOptions())
      .map((res) => res.json());
  }

  public getParagraphs(id) {
    return this.http.get(this.API_URL + 'paragraph/unit/' + id, this.getRequestOptions())
      .map((res) => res.json());
  }

  public getStep(id) {
    return this.http.get(this.API_URL + 'step/' + id, this.getRequestOptions())
      .map((res) => res.json());
  }

  public getSteps(id) {
    return this.http.get(this.API_URL + 'step/paragraph/' + id, this.getRequestOptions())
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

  public getCourseSteps(courseId) {
    return this.http.get(this.API_URL + 'step/course/' + courseId, this.getRequestOptions())
      .map((res) => res.json());
  }

  public getCourseProgress(courseId) {
    return this.http.get(this.API_URL + 'progress/course/' + courseId, this.getRequestOptions())
      .map((res) => res.json());
  }

  public getCourseStepCount(courseId) {
    return this.http.get(this.API_URL + 'step/count/course/' + courseId, this.getRequestOptions())
      .map((res) => res.json());
  }

  public getCourseProgressCount(id) {
    return this.http.get(this.API_URL + 'progress/count/course/' + id, this.getRequestOptions())
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
