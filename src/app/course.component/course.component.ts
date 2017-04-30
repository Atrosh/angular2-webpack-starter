/**
 * Created by vladr on 30.04.2017.
 */
import {AuthService} from "../auth.service";
import {Component} from "@angular/core";
import {ApiService} from "../api.service";
/**
 * Created by vladr on 21.12.2016.
 */

@Component({
  selector: 'course',
  templateUrl: './course.component.html'
})

export class CourseComponent {

  editorContent = "Your text";

  constructor(private auth: AuthService, private api: ApiService) {
  }

  ngOnInit() {
  }

}
