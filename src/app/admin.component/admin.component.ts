import {AuthService} from "../auth.service";
import {Component} from "@angular/core";
import {ApiService} from "../api.service";
/**
 * Created by vladr on 21.12.2016.
 */

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html'
})

export class AdminComponent {

  users = [];
  roles = [];
  organisations = [];
  newUser = {username: "", password: "", firstName: "", lastName: "", info: "", roles: [{role:"ROLE_USER"}], organisation: {}};

  constructor(private auth: AuthService, private api: ApiService) {
  }

  ngOnInit() {
    this.getAllUsers();
    this.getAllRoles();
    this.getAllOrganisations();

  }

  getAllUsers() {
    this.api.getAllUsers().subscribe(
      data => this.users = data,
      error => console.log(error)
    );
  }

  getAllRoles() {
    this.api.getRoles().subscribe(
      data => this.roles = data,
      error => console.log(error)
    );
  }

  getAllOrganisations() {
    this.api.getOrganisations().subscribe(
      data => this.organisations = data,
      error => console.log(error)
    );
  }

  createUser() {
    this.api.createNewUser(this.newUser).subscribe(
      data => this.users.push(data),
      error => console.log(error)
    );
  }

  deleteUser(id) {
    this.api.deleteUser(id).subscribe();
    this.users = this.users.filter(user => user.id != id);
  }

}
