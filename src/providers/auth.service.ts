import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AuthProvider {


  constructor(
    public http: Http,
    public fireDatabase: AngularFireDatabase
  ) {
    console.log('Hello AuthProvider Provider');
  }

}
