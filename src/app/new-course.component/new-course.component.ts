import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Course } from '../models/Course';
import { User } from '../models/User';
import { Router } from '@angular/router';
/**
 * Created by vladr on 21.12.2016.
 */

@Component({
  selector: 'new-course',
  templateUrl: './new-course.component.html'
})

export class NewCourseComponent implements OnInit {

  public course: Course = new Course();
  public user: User = new User(null);

  constructor(public auth: AuthService, private api: ApiService, private router: Router) {
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
      (data) => {
        this.course = data;
        this.router.navigateByUrl('/edit-course/' + this.course.id);
      },
      (error) => console.log(error)
    );
  }

}
