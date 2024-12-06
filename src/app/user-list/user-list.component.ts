import { Component } from '@angular/core';
import { TuserData, UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  users: TuserData[] = [];
  err: String | null = null;

  constructor(private _UserService: UserService) {
    this.users = _UserService.getUsers();
  }

  deleteUser(username: string) {
    const { status, error } = this._UserService.removeUser(username);
    if (status) {
      this.err = null;
    } else this.err = error as string;
  }
}
