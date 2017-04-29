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
  newUser = {username: "", password: "", firstName: "", lastName: "", info: ""};

  constructor(private auth: AuthService, private api: ApiService) {
  }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.api.getAllUsers().subscribe(
      data => this.users = data,
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
