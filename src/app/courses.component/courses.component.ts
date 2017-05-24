/**
 * Created by vladr on 25.05.2017.
 */
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { Course } from '../models/Course';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html'
})

export class CoursesComponent implements OnInit {

  public learningCourses: Course[] = [];
  public teachingCourses: Course[] = [];

  constructor(public auth: AuthService, private api: ApiService) {
  }

  public ngOnInit() {
    this.api.getOrganisationCourses(1).subscribe(
      (data) => this.learningCourses = data,
      (error) => console.log(error)
    );
    this.api.getUserCourses().subscribe(
      (data) => this.teachingCourses = data,
      (error) => console.log(error)
    );
  }

}
