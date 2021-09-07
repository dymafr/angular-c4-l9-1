import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-enfant',
  
  template: `
    <div *ngFor="let log of changeLog;">{{log}}</div>
  `
})

export class EnfantComponent implements OnChanges {
  
  @Input() prenom;
  @Input() monObj;
  
  public changeLog = [];
  
  constructor() { }

  ngOnChanges(changes) {
    
    for (let prop in changes) {
      let chng = changes[prop];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${prop}: valeurActuelle = ${cur}, valeurPrécédente = ${prev}`);
    }
    
  }

}