import { Component, OnInit } from '@angular/core';

import {GetDataService} from "../../services/get-data.service"


@Component({
  selector: 'app-dictionary-input',
  templateUrl: './dictionary-input.component.html',
  styleUrls: ['./dictionary-input.component.css']
})
export class DictionaryInputComponent implements OnInit {
  input:string = ""
  wordData:Object = {}

  constructor(private getDataService:GetDataService) { }

  ngOnInit(): void {
  }
  
  // calls the word data on enter
  onEnter() {
    if (this.input.length > 0) {
      this.getDataService.getWordInfo(`https://twinword-word-graph-dictionary.p.rapidapi.com/example/?entry=${this.input.toLowerCase()}`).subscribe(value => this.wordData=value.example)
    }
  }
}
