import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private _http: HttpClient) { }

  enroll(user: any){
    let url =  environment.APIBASEURL + '/enroll';
    return this._http.post<any>(url, user);
  }
}
