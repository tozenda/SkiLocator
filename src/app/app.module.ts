import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {AddSkiPage } from '../pages/add-ski/add-ski';
import {LocaliseSkiPage } from '../pages/localise-ski/localise-ski';

import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
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
    HomePage,
    ListPage,
    AddSkiPage,
    LocaliseSkiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UniqueDeviceID,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
