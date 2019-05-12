import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {InAppBrowser} from '@ionic-native/in-app-browser';
import {SplashScreen} from '@ionic-native/splash-screen';

import {IonicStorageModule} from '@ionic/storage';

import {ConferenceApp} from './app.component';
import {ScheduleFilterPage} from '../pages/schedule-filter/schedule-filter';

import {ConferenceData} from '../providers/conference-data';
import {UserData} from '../providers/user-data';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [ConferenceApp, ScheduleFilterPage],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(ConferenceApp, {}),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [ConferenceApp, ScheduleFilterPage],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen
  ]
})
export class AppModule {
}
