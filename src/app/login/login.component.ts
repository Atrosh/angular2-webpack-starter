/**
 * Created by vladr on 19.12.2016.
 */
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Credentials } from '../models/Credentials';
import { ApiService } from '../api.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  public credentials = new Credentials('', '');
  public error: string;

  constructor(private auth: AuthService, private router: Router, private api: ApiService) {
  }

  public ngOnInit() {
    if (this.auth.loggedIn()) {
      this.router.navigateByUrl('/');
    }
  }

  public onLogin() {
    this.api.login(this.credentials).subscribe(
      (data) => {
        localStorage.setItem('id_token', data.token);
        this.auth.login(data.token);
        this.router.navigateByUrl('/');
      },
      (error) => this.error = error
    );
  }

}
