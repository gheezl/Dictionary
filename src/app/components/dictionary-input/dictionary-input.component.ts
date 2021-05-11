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
  related_terms:string = ""
  id:object = {
    'border': 'none',
    'border-bottom': '2px lightgray solid',
    'border-radius': '10px',
    'width': '250px',
    'padding': '10px',
    'text-align': 'center',
    'transition': "2s"
  }

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
      this.getDataService.getData(`https://twinword-word-graph-dictionary.p.rapidapi.com/reference/?entry=${this.input.toLowerCase()}`)
      .subscribe(value => this.related_terms = value.relation && value.relation.related_terms)
    }
  }

  // changes the styling of the input when it is clicked
  onClick() {
    this.id = {
      'border': 'none',
      'border-bottom': '2px blue solid',
      'border-radius': '10px',
      'width': '250px',
      'padding': '10px',
      'text-align': 'center',
      'transition': "2s"
    }
  }

  // changes the styling of the input when it is blured
  onBlur() {
    this.id = {
      'border': 'none',
      'border-bottom': '2px lightgray solid',
      'border-radius': '10px',
      'width': '250px',
      'padding': '10px',
      'text-align': 'center',
      'transition': "2s"
    }
  }
}
