/**
 * Created by vladr on 19.12.2016.
 */
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Credentials } from '../models/Credentials';
import { ApiService } from '../api.service';
import { User } from '../models/User';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html'
})

export class RegistrationComponent implements OnInit {

  public credentials = new Credentials('', '');
  public newUser: User = new User();
  public error: string;
  public confirmPassword: string;

  constructor(private auth: AuthService, private router: Router, private api: ApiService) {
  }

  public ngOnInit() {
    if (this.auth.loggedIn()) {
      this.router.navigateByUrl('/');
    }
  }

  public createUser() {
    let tmp = this.newUser;
    localStorage.removeItem('id_token');
    this.api.createNewUser(this.newUser).subscribe(
      (data) => {
        this.credentials.password = tmp.password;
        this.credentials.username = tmp.username;
        this.login(this.credentials);
      },
      (error) => console.log(error)
    );
  }

  private login(credentials) {
    this.api.login(credentials).subscribe(
      (data) => {
        localStorage.setItem('id_token', data.token);
        this.auth.login(data.token);
        this.router.navigateByUrl('/');
      },
      (error) => this.error = error
    );
  }

}
