import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/service/shared.module';
import { UserService } from '../shared/service/user/user.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    UserComponent,
    UserListComponent
  ],
  exports: [
    UserComponent,
    UserListComponent
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
