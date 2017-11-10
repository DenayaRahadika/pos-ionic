import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-popover-dep',
  templateUrl: 'popover-dep.html',
})
export class PopoverDepPage {

  constructor(
    public viewCtrl: ViewController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverListPage');
  }

  close(codSucursal) {
    this.viewCtrl.dismiss(codSucursal);
  }

}
