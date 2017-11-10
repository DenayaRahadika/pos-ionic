import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AuthProvider {


  constructor(
    public http: HttpClient,
    public fireDatabase: AngularFireDatabase
  ) {
    console.log('Hello AuthProvider Provider');
  }

}
