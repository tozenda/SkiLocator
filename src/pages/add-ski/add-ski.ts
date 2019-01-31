import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

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
  constructor(private barcodeScanner: BarcodeScanner) {
    this.barcodeScanner = barcodeScanner;
    console.log(barcodeScanner)
  }

  private subscribeToSaveResponse(result: Observable<HttpResponse<any>>) {
    result.subscribe((res: HttpResponse<any>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
  }

  private onSaveSuccess() {
    this.isSaving = false;
  }

  private onSaveError() {
    if (this.isSaving) { this.isSaving = false; }
  }

  scanCode() {
    this.barcodeScanner.scan()
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        alert(error);
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSkiPage');
  }

}
