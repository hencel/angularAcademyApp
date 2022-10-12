import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {

  @Input() items: string[] = [];
  @Output() clickedValue = new EventEmitter<string>();

  constructor() { }

  chooseValue() {
    this.clickedValue.emit(this.items[0]);
  }

}
