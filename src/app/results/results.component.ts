import { Component, EventEmitter, Output } from '@angular/core';
import { ImageService } from '../services/image.service';
import { UserService } from '../services/user.service';
import { saveAs } from 'file-saver';

import * as JSZip from 'jszip';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  @Output() changeView = new EventEmitter<string>();

  user = this.userService.user;

  constructor(
    public imageService: ImageService,
    public userService: UserService,

  ) {}

  onDownload() {
    const date = Date.now()
    const jszip = new JSZip();
    let num = 0;

    // Looping through the Base64 images, convert them to Blob 
    // so we can save them as files
    this.imageService.generatedImages.forEach((img: string) => {
      const b64toBlob = require('b64-to-blob');
      const blob = b64toBlob(img, 'image/png');
      jszip.file(`CarCutterImg_${date}${num++}.jpg`, blob);
    });

    // Creating the ZIP file
    jszip.generateAsync({ type: 'blob' })
    .then((content) => {
      saveAs(content, `CarCutterImgPack_${date}.zip`);
    });
  }

  onBack() {
    this.changeView.next("settings");
  }

  onCancel() {
    window.location.reload();
  }
}
