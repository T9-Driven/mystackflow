import { HttpException, HttpStatus } from '@nestjs/common';

export class User {
  constructor(
    private _name: string,
    private _email: string,
    private _password: string,
  ) {}

  set name(name: string) {
    if (name.length < 3)
      throw new HttpException('Invalid Name', HttpStatus.UNPROCESSABLE_ENTITY);
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set email(email: string) {
    this._email = email;
  }

  get email() {
    return this._email;
  }

  set password(password: string) {
    this._password = password;
  }

  get password() {
    return this._password;
  }
}
