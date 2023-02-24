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

  selectedImages = this.imageService.selectedImages;
  showroomImages = this.imageService.showrooms;
  

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
}
