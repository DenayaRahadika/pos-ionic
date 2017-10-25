import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { ProductsService } from '../providers/products.service';
import { ClientsService } from '../providers/clients.service';
import { OrdersService } from '../providers/orders.service';
import { MapService } from '../providers/map.service';

import { HttpModule } from '@angular/http';
import { AuthProvider } from '../providers/auth.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { IonicStorageModule } from '@ionic/storage';

import { Geolocation } from '@ionic-native/geolocation';
// import { GoogleMaps } from '@ionic-native/google-maps';

const configFirebase = {
  apiKey: "AIzaSyCNpCgHH43amuKWOSeE2VciLO_dTTAgY_4",
  authDomain: "storeexpress-96317.firebaseapp.com",
  databaseURL: "https://storeexpress-96317.firebaseio.com",
  projectId: "storeexpress-96317",
  storageBucket: "storeexpress-96317.appspot.com",
  messagingSenderId: "121943709428"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp( configFirebase ),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    Geolocation,
    // GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductsService,
    ClientsService,
    AuthProvider,
    OrdersService,
    MapService
  ]
})
export class AppModule {}
