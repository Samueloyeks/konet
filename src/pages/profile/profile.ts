
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams, Loading, LoadingController } from 'ionic-angular';

import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import 'firebase/auth';
import 'firebase/database';
import { ProfileServiceProvider } from '../../providers/profile-service/profile-service';
import firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [FirebaseServiceProvider, ProfileServiceProvider]
})
export class ProfilePage {
  birthDate

  public userProfile: any = {
    birthday: '',
  };
  public loading: Loading;

 

  constructor(public alertCtrl: AlertController, public firebaseService: FirebaseServiceProvider,
    public profileService: ProfileServiceProvider, public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController) {
 
  }

  ionViewDidLoad() {
    this.loading = this.loadingCtrl.create();
    this.loading.present();
    this.profileService.getUserProfile().on('value', userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.val();
      console.log(this.userProfile);
      this.birthDate = this.userProfile.birthday;
      this.loading.dismiss();
    });
    this.birthDate = null;
  }

  async updateFirstName(): Promise<void> {
    const alert = await this.alertCtrl.create({
      title: 'Your first name',
      inputs: [
        {
          type: 'text',
          name: 'firstName',
          placeholder: 'Your first name',
          value: this.userProfile.firstName,
        },
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileService.updatefirstName(data.firstName);
          },
        },
      ],
    });
    await alert.present();
  }

  async updateLastName(): Promise<void> {
    const alert = await this.alertCtrl.create({
      title: 'Your last name',
      inputs: [
        {
          type: 'text',
          name: 'lastName',
          placeholder: 'Your last name',
          value: this.userProfile.lastName,
        },
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileService.updateLastName(data.lastName);
          },
        },
      ],
    });
    await alert.present();
  }

  async updateEmail(): Promise<void> {
    const alert = await this.alertCtrl.create({
      inputs: [
        { type: 'text', name: 'newEmail', placeholder: 'Your new email' },
        { name: 'password', placeholder: 'Your password', type: 'password' },
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileService
              .updateEmail(data.newEmail, data.password)
              .then(() => {
                console.log('Email Changed Successfully');
              })
              .catch(error => {
                console.log('ERROR: ' + error.message);
              });
          },
        },
      ],
    });
    await alert.present();
  }

  async updatePassword(): Promise<void> {
    const alert = await this.alertCtrl.create({
      inputs: [
        { name: 'newPassword', placeholder: 'New password', type: 'password' },
        { name: 'oldPassword', placeholder: 'Old password', type: 'password' },
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileService.updatePassword(
              data.newPassword,
              data.oldPassword
            );
          },
        },
      ],
    });
    await alert.present();
  }


}