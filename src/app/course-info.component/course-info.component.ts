/**
 * Created by vladr on 20.05.2017.
 */
import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Course } from '../models/Course';
import { ActivatedRoute } from '@angular/router';
import { Unit } from '../models/Unit';

@Component({
  selector: 'course-info',
  templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit {

  public course: Course = new Course();
  public units: Unit[] = [];

  constructor(public auth: AuthService, private api: ApiService, private route: ActivatedRoute) {
  }

  public ngOnInit() {
    this.api.getCourse(this.route.snapshot.params['id']).subscribe(
      (data) => this.course = data,
      (error) => console.log(error)
    );
    this.getUnits();
  }

  private getUnits() {
    this.api.getUnits(this.route.snapshot.params['id']).subscribe(
      (data) => this.units = data,
      (error) => console.log(error)
    );
  }

}
