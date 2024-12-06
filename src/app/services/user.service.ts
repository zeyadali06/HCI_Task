import { Injectable } from '@angular/core';

export type TuserData = { userName: string; password: string };
type TcheckExist = { isExist: Boolean; idx?: number };
type Tresponse = { status: Boolean; error?: string };

@Injectable()
export class UserService {
  private users: TuserData[] = [];

  addUser(userName: string, password: string): Tresponse {
    if (this._checkUserExist(userName).isExist)
      return { status: false, error: 'user with this name is already exist' };

    this.users.push({ userName, password });
    console.log(this.users);
    return { status: true };
  }

  getUsers(): TuserData[] {
    return this.users;
  }

  removeUser(userName: string): Tresponse {
    const { isExist, idx } = this._checkUserExist(userName);
    if (!isExist) return { status: false, error: 'username not found' };

    this.users.splice(idx as number, 1);
    return { status: true };
  }

  private _checkUserExist(userName: string): TcheckExist {
    for (const [idx, user] of this.users.entries()) {
      if (user.userName == userName) return { isExist: true, idx };
    }
    return { isExist: false };
  }
}
