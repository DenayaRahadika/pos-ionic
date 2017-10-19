import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductsService } from '../providers/products.service';
import { ClientsService } from '../providers/clients.service';

import { HttpModule } from '@angular/http';
import { AuthProvider } from '../providers/auth.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductsService,
    ClientsService,
    AuthProvider 
  ]
})
export class AppModule {}
