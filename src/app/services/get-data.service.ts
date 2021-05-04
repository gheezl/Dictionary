import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor() { }

  getWordInfo(url:string) {
    console.log(url)
  }
}
