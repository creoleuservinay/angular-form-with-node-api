import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private httpService: HttpClient
  ) { }

  returnBooks(){
    let bookUrl = environment.APIBASEURL + '/books';
    return this.httpService.get<any>(bookUrl)
  }
}


