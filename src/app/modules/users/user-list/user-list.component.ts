import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/service/user/user.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser() {
    this.userService.getAllUser();
  }

  editUser(user: User) {
    this.userService.currentUser = Object.assign({}, user);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      (data) => {
        this.getAllUser();
      });
  }
}
