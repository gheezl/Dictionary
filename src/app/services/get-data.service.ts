import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  
  
  constructor(private http:HttpClient) { }

  getWordInfo(url:string):Observable<any> {
    const opts = {
      headers: new HttpHeaders({
        "x-rapidapi-key": "971346fa9fmsh942519ee7e82eb9p1b706ejsn3fd22fc0cd6c",
        "x-rapidapi-host": "twinword-word-graph-dictionary.p.rapidapi.com",
        "useQueryString": "true"
      })
    }
    console.log(url, opts.headers.get("x-rapidapi-key"))
    return this.http.get<any>(url, opts)
  }
}