import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  id:object = {
    'opacity': '1',
    'cursor': 'pointer'
  }

  constructor() { }

  ngOnInit(): void {
  }

  onHover() {
    this.id = {
      'opacity': '0.50',
      'cursor': 'pointer'
    }
  }

  onExit() {
    this.id = {
      'opacity': '1',
      'cursor': 'pointer'
    }
  }

}
