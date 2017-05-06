import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../models/User';
/**
 * Created by vladr on 21.12.2016.
 */

@Component({
  selector: 'user',
  templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {

  public user: User;

  constructor(private auth: AuthService, private api: ApiService) {
  }

  public ngOnInit() {
    this.getCurrentUser();
  }

  public loggedIn() {
    return this.auth.loggedIn();
  }

  public logout() {
    this.auth.logout();
  }

  private getCurrentUser() {
    this.api.getCurrentUser().subscribe(
      (data) => this.user = data,
      (error) => console.log(error)
    );
  }

}
