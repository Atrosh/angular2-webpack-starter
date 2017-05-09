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

  constructor(public auth: AuthService, private api: ApiService) {
  }

  public ngOnInit() {
    if (this.auth.loggedIn()) {
      let user = localStorage.getItem('user');
      if (user === null) {
        this.getCurrentUser();
      } else {
        this.user = JSON.parse(user);
      }
    }
  }

  public loggedIn() {
    if (this.auth.loggedIn()) {
      let user = localStorage.getItem('user');
      if (this.user === undefined) {
        this.getCurrentUser();
        return false;
      } else {
        return true;
      }
    }
    return false;
  }

  public logOut() {
    this.user = undefined;
    this.auth.logout();
  }

  private getCurrentUser() {
    this.api.getCurrentUser().subscribe(
      (data) => {
        this.user = data;
        localStorage.setItem('user', JSON.stringify(data));
      },
      (error) => console.log(error)
    );
  }

}
