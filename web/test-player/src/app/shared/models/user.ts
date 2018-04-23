export interface UserType {
  username: string;
  password: string;
  accessToken?: string;
}

export class User implements UserType{
  username: string;
  password: string;

  constructor() {
    this.username = "";
    this.password = "";
  }
}