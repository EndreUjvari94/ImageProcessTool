import { Component, OnInit, Input, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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

  imageSource: SafeResourceUrl = "";

  constructor(
    private sanitizer: DomSanitizer, 
    private httpHelperService: HttpHelperService,
    private userService: UserService,
    private imageService: ImageService
  ) {}

  ngOnInit() {
    this.httpHelperService.fetchGeneratedImages(this.imgModel.file, this.userService.user)
    .subscribe({
      next: (res) => {
        this.imageSource = this.sanitizer
        .bypassSecurityTrustResourceUrl(`data:image/jpg;base64, ${res}`);
        this.imageService.generatedImages.push(res);
      },
      error: (e) => {
        alert(e.message);
      },
      complete: () => {
        this.imageService.generationCompleted++;
      }
    });
  }
}
