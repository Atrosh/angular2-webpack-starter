import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../models/User';
import { Organisation } from '../models/Organisation';
/**
 * Created by vladr on 21.12.2016.
 */

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html'
})

export class AdminComponent implements OnInit {

  private users: User[];
  private roles = [];
  private organisations: Organisation[];
  private newUser = new User([{role: 'ROLE_USER'}]);

  constructor(private auth: AuthService, private api: ApiService) {
  }

  public ngOnInit() {
    this.getAllUsers();
    this.getAllRoles();
    this.getAllOrganisations();
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

  public getAllOrganisations() {
    this.api.getOrganisations().subscribe(
      (data) => {
        this.organisations = data;
        this.newUser.organisation = this.organisations[0];
      },
      (error) => console.log(error)
    );
  }

  public createUser() {
    this.api.createNewUser(this.newUser).subscribe(
      (data) => this.users.push(data),
      (error) => console.log(error)
    );
  }

  public deleteUser(id) {
    this.api.deleteUser(id).subscribe();
    this.users = this.users.filter((user) => user.id !== id);
  }

}
