import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddSkiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-ski',
  templateUrl: 'add-ski.html',
})
export class AddSkiPage {
  selectedItem: any;
  constructor() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSkiPage');
  }

}
