import { Component, Output, EventEmitter } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.css']
})
export class DropzoneComponent {

  @Output() imageSelected = new EventEmitter<boolean>();

  constructor(private imageService: ImageService) {}

  onSelect(event: any) {
    this.imageService.createImageSourceMap(event.addedFiles);
    this.imageSelected.next(true);
  }
}
