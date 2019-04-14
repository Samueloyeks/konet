import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { ServiceListPage } from '../service-list/service-list';
import { ProfilePage } from '../profile/profile';
import { OptionsPage } from '../options/options';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  ServiceListPage=ServiceListPage;
  profilePage=ProfilePage;
  optionsPage=OptionsPage;

  constructor(public loadingCtrl:LoadingController,
    public FirebaseService:FirebaseServiceProvider,
    public actionSheetCtrl:ActionSheetController,
    public navCtrl: NavController,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
