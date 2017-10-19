import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClientsService {

  constructor(
    public http: Http
  ) {
    console.log('Hello clientsProvider Provider');
  }

  getData(){
    return this.http.get('assets/json/clients.json')
    .map(response => response.json())
    .toPromise();
  }

}