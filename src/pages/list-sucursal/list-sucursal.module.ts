import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListSucursalPage } from './list-sucursal';

@NgModule({
  declarations: [
    ListSucursalPage,
  ],
  imports: [
    IonicPageModule.forChild(ListSucursalPage),
  ],
})
export class ListSucursalPageModule {}
