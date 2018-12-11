import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { CalendarioPage } from '../pages/calendario/calendario';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { DescriptionPage } from '../pages/description/description';
import { CartPage } from '../pages/cart/cart';
import { DinaPage } from '../pages/dina/dina';
import { DescriptiondinaPage } from '../pages/descriptiondina/descriptiondina';

import { HttpClientModule } from '@angular/common/http';
import { NgxErrorsModule } from '@ultimate/ngxerrors';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CalendarioPage,
    ListPage,
    LoginPage,
    DescriptionPage,
    CartPage,
    DinaPage,
    DescriptiondinaPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxErrorsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CalendarioPage,
    ListPage,
    LoginPage,
    DescriptionPage,
    CartPage,
    DinaPage,
    DescriptiondinaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
