import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { HttpHelperService } from 'src/app/http-helper.service';

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
    private httpHelperService: HttpHelperService
  ) {}

  ngOnInit() {
    this.httpHelperService.fetchGeneratedImages(this.imgModel.file).subscribe(res => {
      this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${res}`);
    });
  }
}
