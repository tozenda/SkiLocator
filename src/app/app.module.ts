import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import {AddSkiPage } from '../pages/add-ski/add-ski';
import {LocaliseSkiPage } from '../pages/localise-ski/localise-ski';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListService } from '../services/list.service'
import { OpenNativeSettings } from '@ionic-native/open-native-settings';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    AddSkiPage,
    LocaliseSkiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    AddSkiPage,
    LocaliseSkiPage
  ],
  providers: [
    ListService,
    BarcodeScanner,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OpenNativeSettings
  ]
})
export class AppModule {}
