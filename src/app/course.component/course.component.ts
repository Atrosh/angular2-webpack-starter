/**
 * Created by vladr on 30.04.2017.
 */
import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Course } from '../models/Course';
import { User } from '../models/User';
import { Unit } from '../models/Unit';
/**
 * Created by vladr on 21.12.2016.
 */

@Component({
  selector: 'course',
  templateUrl: './course.component.html'
})

export class CourseComponent implements OnInit {

  public editorContent = 'Your text';
  public course = new Course();
  public user = new User(null);

  constructor(private auth: AuthService, private api: ApiService) {

  }

  public ngOnInit() {
    this.api.getCurrentUser().subscribe(
      (data) => {
        this.user = data;
        this.course.organisation = this.user.organisation;
      },
      (error) => console.log(error)
    );
  }

  public createCourse() {
    this.api.createNewCourse(this.course).subscribe(
      (data) => this.course = data,
      (error) => console.log(error)
    );
  }

  public addUnit() {
    this.course.units.push(new Unit(this.course.units.length));
  }

}
