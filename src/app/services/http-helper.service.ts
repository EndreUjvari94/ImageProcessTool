import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Showroom, UserModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {

  constructor(private http: HttpClient) {}

  getShowrooms(): Observable<Object> {
    return this.http.get<Showroom[]>(
      environment.host + "admin/config/user/showrooms", 
      {headers: this.setHeadersFor(environment.adminToken)}
    );
  }

  setHeadersFor(token: string): HttpHeaders {
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`
    })
    return headers;
  }

  fetchGeneratedImages(file: File, user: UserModel) {

    //Body settings
    const formData = new FormData();
    formData.append("cut_type", user.cutType);
    formData.append("blurring_license_plate", user.licensePlateRemoval);
    formData.append("image", file);
    formData.append("scene_id", user.sceneId ? user.sceneId : "");

    return this.http.post(
      environment.host + "vehicle/composition/single-segment", 
      formData, 
      {headers: this.setHeadersFor(user.token), responseType: "text"}
    );
  }
}
