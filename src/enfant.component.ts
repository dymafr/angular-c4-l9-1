import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-enfant',

  template: `
    <div *ngFor="let log of changeLog">{{ log }}</div>
  `
})
export class EnfantComponent implements OnChanges {
  @Input() prenom?: string;
  @Input() monObj?: { prenom: string };

  public changeLog = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    for (const prop in changes) {
      const chng = changes[prop];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(
        `${prop}: valeurActuelle = ${cur}, valeurPrécédente = ${prev}`
      );
    }
  }
}
