import { Injectable } from '@angular/core';
import { HttpHelperService } from './http-helper.service';
import { Showroom } from './models';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  selectedImages: File[] = [];
  generatedImages: string = "";
  showrooms: Showroom[] = [];

  constructor(private httpHelperService: HttpHelperService) {

    //Get showroom images from the API
    this.httpHelperService.getShowrooms().subscribe((res: any) => {
      this.showrooms = res.response;
    });
  }

  addImages(files: File[]) {
    this.selectedImages = files;
  }

  generateImages() {
    this.httpHelperService.fetchGeneratedImages(this.selectedImages[0])
    .subscribe(res => {
      this.generatedImages = res;
    })
  }
}
