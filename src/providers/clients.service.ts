import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ClientsService {

  constructor(
    public http: HttpClient
  ) {
    console.log('Hello clientsProvider Provider');
  }

  getData(){
    return this.http.get('assets/json/clients.json')
    .toPromise();
  }

}
