import { Component, Output, EventEmitter } from '@angular/core';
import { HttpHelperService } from '../http-helper.service';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  @Output() changeView = new EventEmitter<string>();

  imageSourceMap = this.imageService.imageSourceMap;
  showroomImages = this.imageService.showrooms;
  isShowroomSelectionActive = false;
  
  constructor(
    private imageService: ImageService,
    private httpHelperService: HttpHelperService
  ) {}

  onShowroomSelect(event: any) {
    this.httpHelperService.setSelectedShowroom(event.target.name);
  }

  onCreate() {
    this.changeView.next("results");
  }

  toggleShowroomSelection() {
    this.isShowroomSelectionActive = !this.isShowroomSelectionActive;
  }
}
