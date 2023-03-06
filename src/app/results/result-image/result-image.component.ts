import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { saveAs } from 'file-saver';

import { HttpHelperService } from 'src/app/services/http-helper.service';
import { ImageService } from 'src/app/services/image.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-result-image',
  templateUrl: './result-image.component.html',
  styleUrls: ['./result-image.component.css']
})
export class ResultImageComponent implements OnInit {

  @Input() imgModel: any;
  @Output() imgGenerationCompleted = new EventEmitter<boolean>();

  imageSource: SafeResourceUrl = "";
  imageSourceInBase64: string = "";
  imgAmount: string = "";

  constructor(
    private sanitizer: DomSanitizer, 
    private httpHelperService: HttpHelperService,
    private userService: UserService,
    private imageService: ImageService
  ) {}

  ngOnInit() {

    // Check if user uploaded 1 or more image
    if(this.imageService.imageSourceMap.length > 1) {
      this.imgAmount = "multiple";
    } else {
      this.imgAmount = "single";
    }

    // Get generated image from the API
    this.httpHelperService.fetchGeneratedImages(this.imgModel.file, this.userService.user)
    .subscribe({
      next: (res) => {
        this.imageSourceInBase64 = res;
        this.imageSource = this.sanitizer
        .bypassSecurityTrustResourceUrl(`data:image/jpg;base64, ${res}`);
        this.imageService.generatedImages.push(res);
      },
      error: (e) => {
        console.log(e.message);
      },
      complete: () => {
        this.imageService.generationCompleted++;
        this.imgGenerationCompleted.next(true);
      }
    });
  }

  onDownloadSingleImage() {
    const date = Date.now();
    const blob = this.imageService.b64toBlob(this.imageSourceInBase64, 'image/jpg');
    saveAs(blob, `CarCutterImg_${date}.jpg`);
  }
}
