/**
 * Created by vladr on 20.05.2017.
 */
import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Course } from '../models/Course';
import { User } from '../models/User';
import { ActivatedRoute } from '@angular/router';
import { Unit } from '../models/Unit';

@Component({
  selector: 'course-info',
  templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit {

  public course: Course = new Course();
  public user: User = new User(null);
  public units: Unit[] = [];
  public stepsCount: number;
  public passedSteps: number;

  constructor(public auth: AuthService, private api: ApiService, private route: ActivatedRoute) {
  }

  public ngOnInit() {
    this.api.getCourse(this.route.snapshot.params['id']).subscribe(
      (data) => this.course = data,
      (error) => console.log(error)
    );
    this.getUnits();
    this.getCourseProgress();
  }

  private getUnits() {
    this.api.getUnits(this.route.snapshot.params['id']).subscribe(
      (data) => this.units = data,
      (error) => console.log(error)
    );
  }

  private getCourseProgress() {
    this.api.getCourseStepCount(this.route.snapshot.params['id']).subscribe(
      (data) => this.stepsCount = data,
      (error) => console.log(error)
    );
    this.api.getCourseProgressCount(this.route.snapshot.params['id']).subscribe(
      (data) => this.passedSteps = data,
      (error) => console.log(error)
    );
  }
}
