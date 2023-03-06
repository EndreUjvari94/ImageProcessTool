import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { ResultsComponent } from './results/results.component';
import { ResultImageComponent } from './results/result-image/result-image.component';
import { DropzoneComponent } from './settings/dropzone/dropzone.component';
import { ProgressBarComponent } from './results/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    ResultsComponent,
    ResultImageComponent,
    DropzoneComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgxDropzoneModule,
    HttpClientModule,
    IvyCarouselModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
