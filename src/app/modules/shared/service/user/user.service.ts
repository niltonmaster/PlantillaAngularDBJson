import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  mockUrl: string = 'http://localhost:3000/Users';
  allUser: User[];

  currentUser: User = {
    // id: null,
    // firstName: '',
    // lastName: '',
    // code: '',
    // contactNumber: null,
    // address: ''
    id: null,
    name: '',
    lastname: '' ,
    email: '',
    phone: null,
    age: null
  }

  constructor(
    private http: HttpClient
  ) { }

  getAllUser() {
    return this.http.get(this.mockUrl).subscribe(
      (data: User[]) => {
        this.allUser = data;
        console.table(this.allUser);
      });
  }

  deleteUser(id: Number): Observable<User> {
    return this.http.delete<User>(this.mockUrl + '/' + id, headerOption);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.mockUrl, user, headerOption);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.mockUrl + '/' + user.id, user, headerOption);
  }
}
