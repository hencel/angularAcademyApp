import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataModel } from '../search/dataModel';

@Injectable({
  providedIn: 'any',
})
export class DataService {
  
  constructor(private http: HttpClient) { }

  getData(url: string) {
    return this.http.get<DataModel>(url)
  }

}