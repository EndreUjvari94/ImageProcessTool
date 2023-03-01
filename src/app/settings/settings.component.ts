import { Component, Output, EventEmitter } from '@angular/core';
import { ImageService } from '../services/image.service';
import { CUT_TYPE, BLURRING_LICENSE_PLATE } from '../globals';
import { UserService } from '../services/user.service';
import { Showroom } from '../models';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  @Output() changeView = new EventEmitter<string>();

  isShowroomSelectionActive = false;
  showroomImage: Showroom = this.imageService.showrooms[0];

  
  constructor(
    public imageService: ImageService,
    public userService: UserService
  ) {}

  onShowroomSelect(event: any) {
    this.userService.sceneId = event.target.name;
    this.isShowroomSelectionActive = false;
  }

  getCutTypeModel() {
    return CUT_TYPE;
  }

  getBlurringLicensePlateModel() {
    return BLURRING_LICENSE_PLATE;
  }

  setShowroomImage(event: any) {
    this.showroomImage = <Showroom>this.imageService.showrooms
    .find(x => x.name === event.target.name);
  }

  onGenerate() {
    this.userService.getUserSettings();
    this.changeView.next("results");
  }
}
