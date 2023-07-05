import { HttpException, HttpStatus } from '@nestjs/common';
import { randomUUID } from 'crypto';

// Descontinuado, pois estamos usando a class criada pelo Prisma
export class User {
  constructor(
    private _name: string,
    private _email: string,
    private _password: string,
    readonly id: string = randomUUID(),
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
