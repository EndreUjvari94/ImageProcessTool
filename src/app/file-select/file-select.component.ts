import { Component, Output, EventEmitter } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-file-select',
  templateUrl: './file-select.component.html',
  styleUrls: ['./file-select.component.css']
})
export class FileSelectComponent {

  @Output() changeView = new EventEmitter<string>();

  constructor(private imageService: ImageService) {}

  onSelect(event: any) {
    this.imageService.createImageSourceMap(event.addedFiles);
    this.changeView.next("settings");
  }
}
