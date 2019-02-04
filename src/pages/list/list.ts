import { Component, OnInit } from '@angular/core';
import { cardI } from './cardInterface'
import { UUID } from 'angular2-uuid';
import { LocaliseSkiPage } from '../localise-ski/localise-ski';
import { ListService } from '../../services/list.service';
import { Subscription } from 'rxjs/Subscription';
import { NavController, AlertController } from 'ionic-angular';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage implements OnInit {
  items: Array<{ title: string, note: string, icon: string }>;
  cards: Array<cardI> = [];
  gatewayConnected: boolean = false;
  private itemSubscription: Subscription;

  constructor(private openNativeSettings:OpenNativeSettings,private navCtrl: NavController, private alertCtrl: AlertController, private listService: ListService) {
    console.log(openNativeSettings)
  }

  ngOnInit(): void {
    this.itemSubscription = this.listService.itemsSubject.subscribe((items: cardI[]) => this.cards = items);
    this.listService.emitWholeItemSubject();
  }

  public localiseSki(card: cardI) {
    this.navCtrl.push(LocaliseSkiPage, {
      card: card
    });
  }

  removeSkiCard(card: cardI) {
    this.listService.removeSkiCard(card);
  }

  createSkiCard() {
    this.listService.createSkiCardFromParameters('test', UUID.UUID());
  }

  openSetting(){
    this.openNativeSettings.open("bluetooth").then(val => {
      alert('bluettoth')
    }).catch(err=>{
      alert(JSON.stringify(err))
    });
  }

  rename(card: cardI) {
    let al = this.alertCtrl.create({
      title: 'Rename the selected item',
      inputs: [
        {
          name: 'name',
          placeholder: 'New name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
          }
        },
        {
          text: 'Confirm',
          handler: data => {
            this.listService.rename(card, data.name);
          }
        }
      ]
    });
    al.present();
  }

  itemTapped(event, item) {
    // this.navCtrl.push(ListPage, {
    //   item: item
    // });
  }
}
