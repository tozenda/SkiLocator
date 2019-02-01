import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Observable } from 'rxjs/Observable';
import { ListService } from '../../services/list.service';
import { UUID } from 'angular2-uuid';

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
  private isSaving: Boolean;
  scanData: {};
  options: BarcodeScannerOptions;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, private listService: ListService) {
  }

  // private subscribeToSaveResponse(result: Observable<HttpResponse<any>>) {
  //   result.subscribe((res: HttpResponse<any>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
  // }

  private onSaveSuccess() {
    this.isSaving = false;
  }

  private onSaveError() {
    if (this.isSaving) { this.isSaving = false; }
  }

  /* If you get the 'Err Object(...) is not a funcion just run $ npm i -s @ionic-native/barcode-scanner@4.20.0
*/
  scanCode() {
    this.options = {
      prompt: "Scan your barcode "
    }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {
      console.log(barcodeData);
      this.scanData = barcodeData;
      this.listService.createSkiCardFromParameters(barcodeData.text, UUID.UUID());
    }, (err) => {
      console.log("Error occured : " + err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSkiPage');
  }

}
