import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  opts:Object = {
    headers: new HttpHeaders({
      "x-rapidapi-key": "971346fa9fmsh942519ee7e82eb9p1b706ejsn3fd22fc0cd6c",
      "x-rapidapi-host": "twinword-word-graph-dictionary.p.rapidapi.com",
      "useQueryString": "true"
    })
  }

  constructor(private http:HttpClient) { }

  getExamples(url:string):Observable<any> {
    return this.http.get<any>(url, this.opts)
  }
}