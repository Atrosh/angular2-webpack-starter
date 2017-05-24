/**
 * Created by vladr on 25.05.2017.
 */
import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Course } from '../models/Course';

@Component({
  selector: 'course-details',
  templateUrl: './course-details.component.html'
})

export class CourseDetailsComponent implements OnInit {

  @Input()
  public course: Course;
  public stepsCount: number;
  public passedSteps: number;

  constructor(private api: ApiService) {
  }

  public ngOnInit() {
    this.getCourseProgress(this.course.id);
  }

  private getCourseProgress(id) {
    this.api.getCourseStepCount(id).subscribe(
      (data) => this.stepsCount = data,
      (error) => console.log(error)
    );
    this.api.getCourseProgressCount(id).subscribe(
      (data) => this.passedSteps = data,
      (error) => console.log(error)
    );
  }
}
