import { Component, OnInit } from '@angular/core';

import {GetDataService} from "../../services/get-data.service"


@Component({
  selector: 'app-dictionary-input',
  templateUrl: './dictionary-input.component.html',
  styleUrls: ['./dictionary-input.component.css']
})
export class DictionaryInputComponent implements OnInit {
  input:string = ""
  examples:any[] = []
  themes:any[] = []
  association:any[] = []
  definition:any[] = []

  constructor(private getDataService:GetDataService) { }

  ngOnInit(): void {
  }
  
  // calls the word data on enter
  onEnter() {
    if (this.input.length > 0) {
      this.getDataService.getData(`https://twinword-word-graph-dictionary.p.rapidapi.com/definition/?entry=${this.input.toLowerCase()}`)
      .subscribe(value => this.definition=value.meaning)
      this.getDataService.getData(`https://twinword-word-graph-dictionary.p.rapidapi.com/example/?entry=${this.input.toLowerCase()}`)
      .subscribe(value => this.examples=value.example)
      this.getDataService.getData(`https://twinword-word-graph-dictionary.p.rapidapi.com/theme/?entry=${this.input.toLowerCase()}`)
      .subscribe(value => this.themes = value.theme)
      this.getDataService.getData(`https://twinword-word-graph-dictionary.p.rapidapi.com/association/?entry=${this.input.toLowerCase()}`)
      .subscribe(value => this.association = value.assoc_word_ex)
    }
  }
}
