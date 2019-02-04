import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation';

/**
 * Generated class for the LocaliseSkiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-localise-ski',
  templateUrl: 'localise-ski.html',
})
export class LocaliseSkiPage {
  public data: any = 'data';
  constructor(public navCtrl: NavController, public navParams: NavParams, public deviceOrientation: DeviceOrientation) {
  }

  public test() {
    this.deviceOrientation.getCurrentHeading().then(
      (dat: DeviceOrientationCompassHeading) => this.data = JSON.stringify(dat),
      (error: any) => console.log(error)
    );
  }

}
