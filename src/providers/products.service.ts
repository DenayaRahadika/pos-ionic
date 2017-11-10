import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {

  constructor(
    public http: HttpClient
  ) {
    console.log('Hello ProductsProvider Provider');
  }

  getData(){
    return this.http.get('assets/json/data.json')
    .toPromise();
  }

  getLines(){
    return this.http.get('assets/json/lines.json')
    .toPromise();
  }

  getFamily(){
    return this.http.get('assets/json/family.json')
    .toPromise();
  }

  getSucursal()
  {
    return this.http.get('assets/json/sucursal.json')
    .toPromise();
  }
}
