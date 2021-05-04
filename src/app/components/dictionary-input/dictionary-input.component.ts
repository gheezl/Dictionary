import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dictionary-input',
  templateUrl: './dictionary-input.component.html',
  styleUrls: ['./dictionary-input.component.css']
})
export class DictionaryInputComponent implements OnInit {
  input:string = "" 

  constructor() { }

  ngOnInit(): void {
  }
  

}
