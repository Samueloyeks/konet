import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import firebase from 'firebase';
import { LoginPage } from '../pages/login/login';
import { ServiceListPage } from '../pages/service-list/service-list';
import { TabsPage } from '../pages/tabs/tabs';
import { TestPage } from '../pages/test/test';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

   config = {
    apiKey: "AIzaSyCfDrsVChcLnoiPCm2rH-I3ISPxJQ23M7M",
    authDomain: "konet-2c327.firebaseapp.com",
    databaseURL: "https://konet-2c327.firebaseio.com",
    projectId: "konet-2c327",
    storageBucket: "konet-2c327.appspot.com",
    messagingSenderId: "746240821648"
  }; 

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
  this.initializeApp();
  }
  initializeApp() {
    firebase.initializeApp(this.config);
    this.platform.ready().then(() => {
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
        console.log(user);
        if (!user) {
          this.rootPage = LoginPage;
          unsubscribe();
        } else {
          if (user.emailVerified) {
            this.rootPage = TabsPage;
            // this.rootPage = TestPage;
          } else {
            this.rootPage = LoginPage;
          }
          unsubscribe();
        }
      });

    });
  }
}

