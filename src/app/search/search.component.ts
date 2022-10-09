import { Component } from '@angular/core';
import { DataService } from '../service/get-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  url: string = "./assets/capitals.json";
  rawData: any = [];

  constructor(private service: DataService) {
    this.getDataFromService();
  }

  getDataFromService() {
    this.service.getData(this.url).subscribe((data) => {
      this.rawData = data;
    });
  }

  searchHandler(event: any) {
    console.log(event.target.value);
    console.log(this.rawData);
  }

}
