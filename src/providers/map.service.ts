import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MapService {

  constructor(
    public http: HttpClient
  ) {
    console.log('Hello MapProvider Provider');
  }

  getData(){
    return this.http.get('assets/json/sucursal.json')
    .toPromise();
  }

  getDepto(){
    return this.http.get('assets/json/depto.json')
    .toPromise();
  }

}
