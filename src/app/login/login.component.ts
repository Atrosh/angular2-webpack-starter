/**
 * Created by vladr on 19.12.2016.
 */
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Credentials } from '../models/Credentials';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  public credentials = new Credentials('', '');

  constructor(private auth: AuthService, private router: Router) {
  }

  public ngOnInit() {
    if (this.auth.loggedIn()) {
      this.router.navigateByUrl('/');
    }
  }

  public onLogin() {
    this.auth.login(this.credentials);
  }
  
}
