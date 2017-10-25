import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MapService {

  constructor(
    public http: Http
  ) {
    console.log('Hello MapProvider Provider');
  }

}
