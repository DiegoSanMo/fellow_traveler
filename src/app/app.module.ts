import { UserService } from './../services/user.service';
import { ProfilePage } from './../pages/profile/profile';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Toast } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DriversPage } from '../pages/drivers/drivers';
import { ProfileDriverPage } from '../pages/profile-driver/profile-driver';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.service';
import { firebaseConfig } from '../config';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { map } from 'rxjs-compat/operators';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DriversPage,
    ProfileDriverPage,
    ProfilePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    AngularFireDatabaseModule,
    NgxErrorsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DriversPage,
    ProfileDriverPage,
    ProfilePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    AngularFireAuth,
    UserService,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
