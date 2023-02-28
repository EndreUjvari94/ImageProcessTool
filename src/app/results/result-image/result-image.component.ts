import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { HttpHelperService } from 'src/app/services/http-helper.service';
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
    private userService: UserService
  ) {}

  ngOnInit() {
    this.httpHelperService.fetchGeneratedImages(this.imgModel.file, this.userService.user).subscribe(res => {
      this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${res}`);
    });
  }
}
