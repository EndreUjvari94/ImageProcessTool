import { Component } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  selectedImages = this.imageService.selectedImages;

  constructor(private imageService: ImageService) {}

}
