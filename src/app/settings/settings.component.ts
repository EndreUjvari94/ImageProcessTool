import { Component, Output, EventEmitter } from '@angular/core';
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
  selectedShowroom: string = "";

  constructor(private imageService: ImageService) {}

  onShowroomSelect(event: any) {
    this.selectedShowroom = event.target.name;
    console.log(this.selectedShowroom);
  }

  onCreate() {
    this.changeView.next("results");
    this.imageService.generateImages();
  }
}
