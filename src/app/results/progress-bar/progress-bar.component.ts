import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit, OnDestroy{

  imageCount: number = 0;
  progress: number = 0;
  subscription: any;

  constructor (public imageService: ImageService) {}

  ngOnInit(): void {
    const all = this.imageService.imageSourceMap.length;
    this.subscription = this.imageService.generationCompletedSubject.subscribe(() => {
      this.progress = this.imageCount/all * 100;
      this.imageCount++;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
