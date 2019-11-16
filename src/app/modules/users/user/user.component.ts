import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/service/user/user.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  createUser(currentUser: User) {
    if (currentUser.id === null) {
      console.log('Create');
      this.userService.createUser(currentUser).subscribe(
        (data) => {
          this.userService.getAllUser();
        });
    } else {
      console.log('Update');
      this.userService.updateUser(currentUser).subscribe(
        (data) => {
          this.userService.getAllUser();
        });
    }
  }

  clearUser(currentUser: User) {
    this.userService.currentUser = {
    id: null, 
    name: '',
    lastname: '' ,
    email: '',
    phone: null,
    age: null
   
    }
  }
}
