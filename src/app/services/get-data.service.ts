import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  params:object = {
    "x-rapidapi-key": "971346fa9fmsh942519ee7e82eb9p1b706ejsn3fd22fc0cd6c",
    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
    "useQueryString": true
  }

  constructor(private http:HttpClient) { }

  getWordInfo(url:string):Observable<object> {
    console.log(url)
    return this.http.get<object>(url, this.params)
  }
}