import { Injectable } from '@angular/core';
import { UserModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: UserModel = new UserModel();

  get user(): UserModel {
    return this._user;
  }

  set cutType(cutType: string) {
    this._user.cutType = cutType;
  }

  set email(email: string) {
    this._user.email = email;
  }

  set licensePlateRemoval(licensePlateRemoval: string) {
    this._user.licensePlateRemoval = licensePlateRemoval;
  }

  set name(name: string) {
    this._user.name = name;
  }

  set sceneId(sceneId: string) {
    this._user.sceneId = sceneId;
  }

  set token(token: string) {
    this._user.token = token;
  }
}
