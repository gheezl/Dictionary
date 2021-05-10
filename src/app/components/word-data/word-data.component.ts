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
  @Input() related_terms:any

  nouns:string[] = []
  verbs:string[] = []
  relatedTerms:string[] = []
  nounPlaceholder:number = 0
  verbPlaceholder:number = 0
  relatedPlaceholder:number = 0

  constructor() {}
  ngOnInit(): void {}

  // finds the sentences with in the string of nouns received from the definition variable
  findNoun() {
    let placeholder:string[] = []
    for (let i:number = this.nounPlaceholder; i<this.definition.noun.length; i++) {
      if (this.definition.noun[i] + this.definition.noun[i + 1] === "(n") {
        for (let j:number = 6; j<this.definition.noun.length - i; j++) {
          if (this.definition.noun[i + j] + this.definition.noun[i + j + 1] === "(n") {
            this.nounPlaceholder = i + j
            this.nouns.push(placeholder.join(""))
            this.findNoun()
            return
          }
          else {
            placeholder.push(this.definition.noun[i + j])
            if (i + j === this.definition.noun.length || i + j === this.definition.noun.length - 1) {
              this.nouns.push(placeholder.join(""))
              this.nounPlaceholder = 0
              return
            }
          }
        }
      }
    }
  }

  // finds the sentences with in the string of verbs received from the definition variable
  findVerb() {
    let placeholder:string[] = []
    for (let i:number = this.verbPlaceholder; i<this.definition.verb.length; i++) {
      if (this.definition.verb[i] + this.definition.verb[i + 1] === "(v") {
        for (let j:number = 6; j<this.definition.verb.length - i; j++) {
          if (this.definition.verb[i + j] + this.definition.verb[i + j + 1] === "(v") {
            this.verbPlaceholder = i + j
            this.verbs.push(placeholder.join(""))
            this.findVerb()
            return
          }
          else {
            placeholder.push(this.definition.verb[i + j])
            if (i + j === this.definition.verb.length || i + j === this.definition.verb.length - 1) {
              this.verbs.push(placeholder.join(""))
              this.verbPlaceholder = 0
              return
            }
          }
        }
      }
    }
  }

  // finds the related terms with in the string of related terms
  getRelatedTerms() {
    let placeholder:string[] = []
    for (let i:number = this.relatedPlaceholder; i < this.related_terms.length; i++) {
      if (this.related_terms[i] == ",") {
        this.relatedTerms.push(placeholder.join(""))
        this.relatedPlaceholder = i + 1
        this.getRelatedTerms()
        return
      }
      else {
        placeholder.push(this.related_terms[i])
        if (i == this.related_terms.length - 1) {
          this.relatedTerms.push(placeholder.join(""))
          this.relatedPlaceholder = 0
          return
        }
      }  
    }
  }

  determineColumns() {

  }

  // runs the respective functions on change and resets some values
  ngOnChanges(changes: SimpleChanges) {
    this.nouns = []
    this.verbs = []
    this.relatedTerms = []

    console.log(this.relatedTerms)

    if (this.definition.noun) {
      this.findNoun()
    }
    if (this.definition.verb) {
      this.findVerb()
    }
    if (this.related_terms) {
      this.getRelatedTerms()
    }

    this.determineColumns()
  }
}