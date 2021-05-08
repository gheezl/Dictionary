import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  id:object = {
    'display': 'flex',
    'justify-content': 'center',
    'padding': '25px',
    'border-bottom': '5px solid lightgray',
    'transition': '2s'
  }

  constructor() { }

  ngOnInit(): void {
  }

  onHover() {
    this.id = {
      'display': 'flex',
      'justify-content': 'center',
      'padding': '25px',
      'border-bottom': '5px solid blue',
      'transition': '2s'
    }
  }

  onExit() {
    this.id = {
      'display': 'flex',
      'justify-content': 'center',
      'padding': '25px',
      'border-bottom': '5px solid lightgray',
      'transition': '2s'
    }
  }

}
