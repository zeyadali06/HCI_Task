import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  username = '';
  password = '';
  error: string | null = null;

  constructor(private userService: UserService) {}

  signUp() {
    const { status, error } = this.userService.addUser(
      this.username,
      this.password
    );
    if (status) {
      this.username = '';
      this.password = '';
      this.error = null;
    } else {
      this.error = error as string;
    }
  }
}
