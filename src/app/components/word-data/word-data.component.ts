import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-word-data',
  templateUrl: './word-data.component.html',
  styleUrls: ['./word-data.component.css']
})
export class WordDataComponent implements OnInit {
  @Input() definition:any
  @Input() examples:any
  @Input() themes:any
  @Input() input:any
  @Input() association:any

  nouns:string[] = []
  verbs:string[] = []
  nounPlaceholder:number = 0

  constructor() { }

  ngOnInit(): void {
  }

  findNoun() {
    let placeholder:string[] = []
    for (let i:number = this.nounPlaceholder; i<this.definition.noun.length; i++) {
      if (this.definition.noun[i] + this.definition.noun[i + 1] === "(n") {
        for (let j:number = 6; j<this.definition.noun.length; j++) {
          if (this.definition.noun[i+j] + this.definition.noun[i + j + 1] === "(n") {
            this.nounPlaceholder = i+j
            this.nouns.push(placeholder.join(""))
            this.findNoun()
            return
          }
          else {
            placeholder.push(this.definition.noun[i + j])
            if (i + j === this.definition.noun.length) {
              this.nouns.push(placeholder.join(""))
              this.nounPlaceholder = 0
            }
          }
        }
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.nouns, this.nounPlaceholder)

    if (this.definition.noun && !this.nouns[0]) {
      this.findNoun()
    }
  }
}
