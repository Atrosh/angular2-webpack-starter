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
  public roles = [];
  public newUser = new User([{role: 'ROLE_USER'}]);

  constructor(public auth: AuthService, private api: ApiService) {
  }

  public ngOnInit() {
    this.getAllUsers();
    this.getAllRoles();
  }

  public getAllUsers() {
    this.api.getAllUsers().subscribe(
      (data) => this.users = data,
      (error) => console.log(error)
    );
  }

  public getAllRoles() {
    this.api.getRoles().subscribe(
      (data) => this.roles = data,
      (error) => console.log(error)
    );
  }

  public createUser() {
    this.api.createNewUser(this.newUser).subscribe(
      (data) => this.users.push(data),
      (error) => console.log(error)
    );
    this.newUser = new User([{role: 'ROLE_USER'}]);
  }

  public deleteUser(id) {
    this.api.deleteUser(id).subscribe();
    this.users = this.users.filter((user) => user.id !== id);
  }
}
