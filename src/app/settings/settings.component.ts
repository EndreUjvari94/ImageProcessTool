import { Component, Output, EventEmitter } from '@angular/core';
import { ImageService } from '../services/image.service';
import { CUT_TYPE, BLURRING_LICENSE_PLATE } from '../globals';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  @Output() changeView = new EventEmitter<string>();

  isShowroomSelectionActive = false;
  
  constructor(
    public imageService: ImageService,
    public userService: UserService
  ) {}

  onShowroomSelect(event: any) {
    this.userService.sceneId = event.target.name;
  }

  toggleShowroomSelection() {
    this.isShowroomSelectionActive = !this.isShowroomSelectionActive;
  }

  getCutTypeModel() {
    return CUT_TYPE;
  }

  getBlurringLicensePlateModel() {
    return BLURRING_LICENSE_PLATE;
  }

  onGenerate() {
    this.changeView.next("results");
  }
}
