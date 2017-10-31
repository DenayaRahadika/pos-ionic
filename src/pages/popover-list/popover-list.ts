import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-popover-list',
  templateUrl: 'popover-list.html',
})
export class PopoverListPage {

  constructor(
    public viewCtrl: ViewController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverListPage');
  }

  close(sucursal) {
    this.viewCtrl.dismiss(sucursal);
  }

}
