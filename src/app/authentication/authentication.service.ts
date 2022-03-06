import { Injectable } from '@angular/core';
import { AuthenticationModule } from './authentication.module';
import * as bcrypt from 'bcryptjs';
import { User } from '../shared/models/UserModels';
@Injectable()
export class AuthenticationService {
  public USERS: User[] = [];
  salt: string = '';
  constructor() {
    this.salt = bcrypt.genSaltSync(10);
  }

  hashUserCredentials(
    username: string,
    password: string
  ): Promise<[string, string]> {
    const promise1 = bcrypt.hash(username, this.salt);
    const promise2 = bcrypt.hash(password, this.salt);
    return Promise.all([promise1, promise2]);
  }
  addUser(user: User) {
    this.USERS.push(user);
    console.log("current user array ", this.USERS);

  }
  isUserCredentialsValid(username: string, passowrd: string) {
    console.log("userCredentials value ",this.USERS);

    const user = this.USERS.find(
      ({ userCredentials }) => userCredentials.username == username
    );
    if (user && user.userCredentials.password === passowrd) return true;
    return false;
  }
}
