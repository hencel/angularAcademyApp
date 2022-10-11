import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  @Input() items: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
