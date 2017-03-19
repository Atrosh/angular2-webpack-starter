/**
 * Created by vladr on 19.12.2016.
 */
import {Component} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent {

  username: string;
  password: string;

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
    if (this.auth.loggedIn()) {
      this.router.navigateByUrl('/home');
    }
  }

  onLogin() {
    this.auth.login({'username': this.username, 'password': this.password});
  }
}
