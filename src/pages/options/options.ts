import { Component, ViewChild } from '@angular/core';
import { IonicPage,Platform, Nav, NavController, App } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
// import { ProfilePage } from '../pages/profile/profile';
import { ActionSheetController, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { ProfileServiceProvider } from '../../providers/profile-service/profile-service';

/**
 * Generated class for the OptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class OptionsPage {

  constructor(public platform: Platform, public actionSheetCtrl: ActionSheetController,
    public FirebaseService: FirebaseServiceProvider,public navCtrl:NavController,
    public loadingCtrl: LoadingController, public profileService: ProfileServiceProvider,public app:App) {

  }

  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Are you sure you want to Log out?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            // var loader = this.loadingCtrl.create({ content: "Please wait..." });
            // loader.present();
            // this.FirebaseService.logoutUserService();
            // loader.dismiss();
            this.app.getRootNav().setRoot(LoginPage); 
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
