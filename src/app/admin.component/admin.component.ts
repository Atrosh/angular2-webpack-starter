import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../models/User';
import { Organisation } from '../models/Organisation';
import { LessonDto } from '../models/LessonsDto';
import { Course } from '../models/Course';
/**
 * Created by vladr on 21.12.2016.
 */

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html'
})

export class AdminComponent implements OnInit {

  public users: User[];

  constructor(public auth: AuthService, private api: ApiService) {
  }

  public ngOnInit() {
    this.getAllUsers();
  }

  public getAllUsers() {
    this.api.getAllUsers().subscribe(
      (data) => this.users = data,
      (error) => console.log(error)
    );
  }

  public deleteUser(id) {
    this.api.deleteUser(id).subscribe();
    this.users = this.users.filter((user) => user.id !== id);
  }
}
