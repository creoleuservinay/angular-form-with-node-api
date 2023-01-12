import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private _http: HttpClient) { }
  url = 'http://localhost:3000/enroll';

  enroll(user: any){
    return this._http.post<any>(this.url, user);
  }
}
