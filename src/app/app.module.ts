import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { ServiceListPage } from '../pages/service-list/service-list';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { ProfileServiceProvider } from '../providers/profile-service/profile-service';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { TabsPage } from '../pages/tabs/tabs';
import { OptionsPage } from '../pages/options/options';
import { ProfilePage } from '../pages/profile/profile';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { TestPage } from '../pages/test/test';
import { CallNumber } from '@ionic-native/call-number/ngx';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ServiceListPage,
    ResetPasswordPage,
    TabsPage,
    OptionsPage,
    ProfilePage,
    EditProfilePage, 
    TestPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, { 
      tabsHideOnSubPages: true,
      backButtonText: '',
      backButtonIcon: 'ios-arrow-back',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition'}
     )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ServiceListPage,
    ResetPasswordPage,
    TabsPage,
    OptionsPage,
    ProfilePage,
    EditProfilePage,
    TestPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider,
    ProfileServiceProvider,
    CallNumber
  ]
})
export class AppModule {}
