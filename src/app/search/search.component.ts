import { Component } from '@angular/core';
import { Data } from '@angular/router';
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
}
