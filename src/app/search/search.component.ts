import { Component } from '@angular/core';
import { DataService } from '../service/get-data.service';
import { DataModel } from './dataModel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  url: string = "./assets/capitals.json";
  capitals: string[] = [];
  list: string[] = [];
  choosenValue: string = '';
  inputElement: string = '';

  constructor(private service: DataService) {
    this.getDataFromService();
  }

  getDataFromService() {
    this.service.getData(this.url).subscribe((data: DataModel) => {
      this.capitals = data.capitals;
    });
  }

  searchHandler(event: any) {
    this.list = this.capitals.filter((val) => {
      return val.toLowerCase().includes(event.target.value.toLowerCase())
    });
    event.target.value.length == 0 ? this.list = [] : ''
  }

  getChoosenValue(choosenValue: string) {
    this.choosenValue = choosenValue;
    this.list = [];
  }

  makeSearch(value: string) {
    let url = `https://www.google.com/search?q=${value}`;
    window.open(url, '_blank')
  }
}
