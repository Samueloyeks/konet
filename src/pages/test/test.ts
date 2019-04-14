import { Component, ViewChild, NgZone, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Events, Content } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  @ViewChild('myInput') myInput: ElementRef;
  @ViewChild('myInput') myFooter: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  resize() {
    this.myInput.nativeElement.style.height = 'auto'
    this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
    this.myFooter.nativeElement.style.height = 'auto'
    this.myFooter.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
  }

}
