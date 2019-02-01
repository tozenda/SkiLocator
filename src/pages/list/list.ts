import { Component, OnInit } from '@angular/core';
import { cardI } from './cardInterface'
import { UUID } from 'angular2-uuid';
import { LocaliseSkiPage } from '../localise-ski/localise-ski';
import { ListService } from '../../services/list.service';
import { Subscription } from 'rxjs/Subscription';
import { NavController, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage implements OnInit {
  items: Array<{ title: string, note: string, icon: string }>;
  cards: Array<cardI> = [];
  private itemSubscription: Subscription;

  constructor(private navCtrl: NavController, private alertCtrl: AlertController, private listService: ListService) {

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
