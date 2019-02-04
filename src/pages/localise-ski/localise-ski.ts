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
  public magneticHeading: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public deviceOrientation: DeviceOrientation) {
    this.magneticHeading = 0;
    deviceOrientation.getCurrentHeading().then(
      (data1: DeviceOrientationCompassHeading) => {
        this.magneticHeading = data1.magneticHeading,
          document.getElementById('rotatingArrow').setAttribute("style", "transform: rotate(" + this.magneticHeading + "deg)")
      }
      , (error: any) => console.log(error + "err")
    );
    const options = { frequency: 100 };
    const subscription = deviceOrientation.watchHeading(options).subscribe(
      (data3: DeviceOrientationCompassHeading) => {
        this.magneticHeading = data3.magneticHeading,
          document.getElementById('rotatingArrow').setAttribute("style", "transform: rotate(" + this.magneticHeading + "deg)");
      }
      , (error: any) => console.log(error + "errtt"));
  }

  public test() {
    this.deviceOrientation.getCurrentHeading().then(
      (dat: DeviceOrientationCompassHeading) => {
        this.data = JSON.stringify(dat),
          (error: any) => console.log(error)
      }
    );
  }

}
