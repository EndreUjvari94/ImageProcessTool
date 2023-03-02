import { Injectable } from '@angular/core';
import { UserModel } from '../models';
import { HttpHelperService } from './http-helper.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: UserModel = new UserModel();

  get user(): UserModel {
    return this._user;
  }

  set cloudLink(cloudLink: string) {
    this._user.cloudLink = cloudLink;
  }

  set creditsAmount(creditsAmount: number) {
    this._user.creditsAmount = creditsAmount;
  }

  set cutType(cutType: string) {
    this._user.cutType = cutType;
  }

  set email(email: string) {
    this._user.email = email;
  }

  set guidelines(guidelines: any) {
    this._user.guidelines = guidelines;
  }

  set licensePlateRemoval(licensePlateRemoval: string) {
    this._user.licensePlateRemoval = licensePlateRemoval;
  }

  set locations(locations: any) {
    this._user.locations = locations;
  }

  set name(name: string) {
    this._user.name = name;
  }

  set overlayImage(overlayImage: any) {
    this._user.overlayImage = overlayImage;
  }

  set paddingId(paddingId: string) {
    this._user.paddingId = paddingId;
  }

  set resolution(resolution: string) {
    this._user.resolution = resolution;
  }

  set sceneId(sceneId: string) {
    this._user.sceneId = sceneId;
  }

  set sceneIdInShowrooms(sceneIdInShowrooms: boolean) {
    this._user.sceneIdInShowrooms = sceneIdInShowrooms;
  }

  set token(token: string) {
    this._user.token = token;
  }

  isGetUserSettingsFinished = false;
  errorMessage = ""

  constructor(private httpHelperService: HttpHelperService) {}

  getUserSettings() {
    this.httpHelperService.getUserSettings(this._user)
    .subscribe({
      next: (res: any) => {
        this._user.cloudLink = res.cloud_link;
        this._user.creditsAmount = res.credits_amount;
        this._user.email = res.email;
        this._user.guidelines = res.guidelines;
        this._user.locations = res.locations;
        this._user.name = res.name;
        this._user.overlayImage = res.overlay_imagemage;
        this._user.paddingId = res.padding_id;
        this._user.resolution = res.resolution;
        this._user.sceneIdInShowrooms = res.scene_id_in_showrooms;
      },
      error: (e: any) => {
        console.log(e);
        this.errorMessage = e.message;
        this.isGetUserSettingsFinished = true;
      },
      complete: () => {
        this.isGetUserSettingsFinished = true;
      }
    });
  }
}
