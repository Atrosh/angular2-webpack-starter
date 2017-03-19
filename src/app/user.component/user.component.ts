import {AuthService} from "../auth.service";
import {Component} from '@angular/core';
import {ApiService} from "../api.service";
/**
 * Created by vladr on 21.12.2016.
 */

@Component({
  selector: 'user',
  templateUrl: './user.component.html'
})

export class UserComponent {

  user: any;

  constructor(private auth: AuthService, private api: ApiService) {
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  loggedIn() {
    //this.getCurrentUser();
    return this.auth.loggedIn();
  }

  logout() {
    this.auth.logout();
  }

  getCurrentUser() {
    this.api.getCurrentUser().subscribe(
      data => this.user = data,
      error => console.log(error)
    );
  }

}
