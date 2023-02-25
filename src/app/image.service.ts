import { Injectable } from '@angular/core';

import { HttpHelperService } from './http-helper.service';
import { Showroom, ImageModel } from './models';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  // selectedImages: File[] = [];
  // selectedImagesAsDataURL: string = "";
  // generatedImages: File[] = [];
  showrooms: Showroom[] = [];
  imageSourceMap: ImageModel[] = [];

  constructor(private httpHelperService: HttpHelperService) {

    //Get showroom images from the API
    this.httpHelperService.getShowrooms().subscribe((res: any) => {
      this.showrooms = res.response;
    });
  }

  createImageSourceMap(files: File[]) {
    Array.from(files).forEach((file: File) => {
      
      //To display images on the template we convert them to DataURL
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        let imageModel: ImageModel = {
          name: file.name,
          dataUrl: String(reader.result),
          file: file
        };
        this.imageSourceMap.push(imageModel);
      }
    });

  }

  // addImages(files: File[]) {
  //   this.selectedImages = files;
  //   files.forEach(img => {
  //     console.log(img);
  //     this.convertImageToDataURL(img);
      
  //   });
  // }

  
  // convertImageToDataURL(img: File) {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(img);
  //   reader.onloadend = () => {
  //     console.log(reader.result);
  //   }
  // }
}
