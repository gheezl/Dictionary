import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-data',
  templateUrl: './word-data.component.html',
  styleUrls: ['./word-data.component.css']
})
export class WordDataComponent implements OnInit {
  @Input() examples:any
  @Input() themes:any
  @Input() input:any

  constructor() { }

  ngOnInit(): void {
  }

}
