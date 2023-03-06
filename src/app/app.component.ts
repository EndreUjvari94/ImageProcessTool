import { Component } from '@angular/core';
import { ImageService } from './services/image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sales-image-process';
  componentName: string = "settings";

  constructor(public imageService: ImageService) {}

  onChangeView(componentName: string) {
    this.componentName = componentName;
  }
}
