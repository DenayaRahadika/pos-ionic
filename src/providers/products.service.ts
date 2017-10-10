import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductsService {

  constructor(
    public http: Http
  ) {
    console.log('Hello ProductsProvider Provider');
  }
  
  getData(){
    return this.http.get('assets/json/data.json')
    .map(response => response.json())
    .toPromise();
  }

  getFamily(){
    return this.http.get('assets/json/family.json')
    .map(response => response.json())
    .toPromise();
  }

}
