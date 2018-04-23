import { Injectable } from '@angular/core';
import {UserType} from "../../models/user";
import {LocalStorageService} from "ngx-webstorage";

@Injectable()
export class StorageService {

  user: UserType;


  constructor(private localStorage: LocalStorageService) {
    this.user = this.localStorage.retrieve('user')
  }

  setSession(user: UserType) {
    this.user = user;
    this.localStorage.store('user', user);
  }

  getSession(user: UserType) {
    return this.user;
  }

  destroySession() {
    this.localStorage.clear('user');
  }

}
