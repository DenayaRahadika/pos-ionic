import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class OrdersService {

  orderList: Observable<any[]>;
  orderListRef: AngularFireList<any>;

  constructor(
    public fireDatabase: AngularFireDatabase
  ) {
    console.log('Hello OrdersProvider Provider');
    this.orderList = fireDatabase.list('/orders').valueChanges();
    this.orderListRef = fireDatabase.list('/orders');
  }

  addOrder(orders){
    this.orderListRef.push(orders);
  }
    
  getOrder(id){
    return this.fireDatabase.list('/orders/'+ id + '/products');
  }
  
}