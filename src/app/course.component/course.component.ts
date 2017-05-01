/**
 * Created by vladr on 30.04.2017.
 */
import {AuthService} from "../auth.service";
import {Component} from "@angular/core";
import {ApiService} from "../api.service";
import {Course} from "../models/Course";
import {User} from "../models/User";
import {Unit} from "../models/Unit";
/**
 * Created by vladr on 21.12.2016.
 */

@Component({
  selector: 'course',
  templateUrl: './course.component.html'
})

export class CourseComponent {

  editorContent = "Your text";
  course = new Course();
  user = new User();

  constructor(private auth: AuthService, private api: ApiService) {

  }

  ngOnInit() {
    this.api.getCurrentUser().subscribe(
      data => {this.user = data; this.course.organisation = this.user.organisation},
      error => console.log(error)
    )
  }

  createCourse(){
    this.api.createNewCourse(this.course).subscribe(
      data => this.course = data,
      error => console.log(error)
    );
  }

  addUnit(){
    this.course.units.push(new Unit());
  }

}
