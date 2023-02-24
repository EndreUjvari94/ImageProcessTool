import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Showroom } from './models';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {

  constructor(private http: HttpClient) {}

  getShowrooms(): Observable<Object> {

    //Headers settings
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${environment.adminToken}`
    });
    return this.http.get<Showroom[]>(environment.host + "admin/config/user/showrooms", {headers: headers});
  }

  fetchGeneratedImages(file: File) {

    //Headers settings
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${environment.testToken}`
    });

    //Body settings
    const formData = new FormData();
    formData.append("image", file);

    return this.http.post(
      environment.host + "vehicle/composition/single-segment", 
      formData, 
      {headers: headers, responseType: "text"}
    );
  }
}
