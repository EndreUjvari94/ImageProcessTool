import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { IvyCarouselModule } from 'angular-responsive-carousel';

import { AppComponent } from './app.component';
import { FileSelectComponent } from './file-select/file-select.component';
import { SettingsComponent } from './settings/settings.component';
import { ResultsComponent } from './results/results.component';
import { ResultImageComponent } from './results/result-image/result-image.component';

@NgModule({
  declarations: [
    AppComponent,
    FileSelectComponent,
    SettingsComponent,
    ResultsComponent,
    ResultImageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgxDropzoneModule,
    HttpClientModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
