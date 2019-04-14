import { Component, ViewChild } from '@angular/core';
import { IonicPage,Platform, Nav, NavController, App } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
// import { ProfilePage } from '../pages/profile/profile';
import { ActionSheetController, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { ProfileServiceProvider } from '../../providers/profile-service/profile-service';
import * as firebase from 'firebase';
import { CallNumber } from '@ionic-native/call-number/ngx';



@IonicPage()
@Component({
  selector: 'page-service-list',
  templateUrl: 'service-list.html', 
})
export class ServiceListPage { 
  serviceList = [];
  temparr;
  shownGroup = null;

  constructor(public platform: Platform, public actionSheetCtrl: ActionSheetController,
    public FirebaseService: FirebaseServiceProvider,public navCtrl:NavController,
    public loadingCtrl: LoadingController, public profileService: ProfileServiceProvider,public app:App,private callNumber: CallNumber) {
      this.serviceList = [ {
        "About" : "Nestlé Nigeria PLC is one of the largest food and beverage companies in Africa. For over 57 years, Nestlé has been delighting consumers in Nigeria with high quality nutritious food products.To learn more visit: https://www.nestle-cwa.com/en/csv/nestl%C3%A9-nigeria/about-nestl%C3%A9-nigeria",
        "Email" : "test@mail.com",
        "Live chat" : "bla",
        "id" : 1,
        "logo" : "../../assets/imgs/Nestle-Logo.png",
        "name" : "Nestle",
        "phone" : "080063785364"
      }, {
        "About" : "Andela invests in Africa’s most talented software engineers to help companies solve the technical talent shortage and build high-performing distributed engineering teams.To learn more visit: https://andela.com/about/",
        "Email" : "hello@andela.com",
        "Live chat" : "bla",
        "id" : 2,
        "logo" : "../../assets/imgs/Andela.jpg",
        "name" : "Andela",
        "phone" : "0803 302 9181"
      }, {
        "About" : "First Bank of Nigeria Limited (FirstBank) is Nigeria’s premier commercial bank and most valuable banking brand. With over 10 million active customer accounts and more than 750 business locations, we provide a comprehensive range of retail and corporate financial services to customers and investors wishing to explore the vast business opportunities available in Nigeria and our business locations across Africa, Europe, Middle East and Asia. To live our promise of ‘YOU First’, we design products and services to support your personal, family and business needs.To learn more: https://www.firstbanknigeria.com/about-us/",
        "Email" : "firstcontact@firstbanknigeria.com",
        "Live chat" : "bla",
        "id" : 3,
        "logo" : "../../assets/imgs/FirstBank_Logo.jpg.png",
        "name" : "First Bank",
        "phone" : "+234 700 FIRSTCONTACT"
      }, {
        "About" : "Currently, UBA has 20 African subsidiaries, contributing about 20% of the Group’s balance sheet, with a target of contributing 50%. We’re on a quest to build the strongest domestic and African brand.To learn more: https://www.ubagroup.com/nigeria/about-us/",
        "Email" : "cfc@ubagroup.com",
        "Live chat" : "bla",
        "id" : 4,
        "logo" : "../../assets/imgs/UBA-logo-5.gif",
        "name" : "UBA",
        "phone" : "+234 903 000 2455"
      }, {
        "About" : "We are proudly Nigeria’s pioneer and largest Brewing firm. Our company was incorporated in 1946 and in June 1949, we recorded a landmark when the first bottle of STAR lager beer rolled off our Lagos Brewery bottling lines. This first brewery in Lagos has undergone several optimization processes and as at today boasts of one of the most modern brew house in the country.",
        "Email" : "consumercare@nbplc.com",
        "Live chat" : "bla",
        "id" : 5,
        "logo" : "../../assets/imgs/Nigerian-Breweries-Plc-790x425.jpg",
        "name" : "Nigerian Brewries",
        "phone" : "07082558662752"
      } ]

  }
  ionViewWillLoad(){
    // var promise = new Promise((resolve, reject) => {
    //   firebase.database().ref('serviceList/serviceList').once('value', (snapshot) => {
    //      this.temparr = [];
    //     snapshot.forEach(snap => {
    //       this.temparr.push({
    //         id: snap.val().id, 
    //         name: snap.val().name,
    //         email: snap.val().Email,
    //         phone: snap.val().phone,
    //         liveChat: snap.val().liveChat,
    //         about: snap.val().About,
    //         logo: snap.val().logo
    //       })
    //     });
    //     resolve(this.temparr);
    //     console.log(this.temparr)
    //   }).catch(err => {
    //     reject(err);
    //   })
    // })

    this.temparr=[];
    this.serviceList.forEach(snap=>{
      this.temparr.push({
        id:snap.id,
        name:snap.name,
        email:snap.Email,
        phone:snap.phone,
        liveChat:snap.liveChat,
        about:snap.About,
        logo:snap.logo,
      })
    })
  }

 
  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
};
isGroupShown(group) {
    return this.shownGroup === group;
};

call(number){
  this.callNumber.callNumber(number, true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
}


}
