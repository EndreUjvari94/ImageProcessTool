import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { HttpHelperService } from './http-helper.service';
import { Showroom, ImageModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  showrooms: Showroom[] = [];
  isShowroomFetchFinished: boolean = false;
  imageSourceMap: ImageModel[] = [];
  generatedImages: string[] = [];
  generationCompletedSubject = new BehaviorSubject(0);

  constructor(private httpHelperService: HttpHelperService) {

    //Get showroom images from the API
    this.httpHelperService.getShowrooms()
    .subscribe({
      next: (res: any) => {
        this.showrooms = res.response;
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        this.isShowroomFetchFinished = true;
      }
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

  b64toBlob(data: string, contentType: string = '', sliceSize: number = 512): Blob {
    const byteCharacters = atob(data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }
}
