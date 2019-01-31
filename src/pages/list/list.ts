import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {cardI}  from './cardInterface'
import { UUID } from 'angular2-uuid';
import { LocaliseSkiPage }from '../localise-ski/localise-ski'


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})



export class ListPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  cards: Array<cardI>=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //get name from server ? 
    var selectedItem: cardI = {name:null,uid:null};
    selectedItem.name = "randomForNow";
    selectedItem.uid = UUID.UUID(); 
    this.cards.push(selectedItem);
    // this.selectedItem.uid = this.uuid;
    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
  }
  
  createSkiCard(){
    var selectedItem: cardI = {name:null,uid:null};
    selectedItem.name = "randomForNow";
    selectedItem.uid = UUID.UUID(); 
    this.cards.push(selectedItem);
  }

  localiseSki(card){
    this.navCtrl.push(LocaliseSkiPage, {
        card: card
      });
  }

  removeSkiCard(card:cardI){
    this.cards = this.cards.filter(item => item.uid !== card.uid);
    this.cards.push();
  }
  
  itemTapped(event, item) {
    // this.navCtrl.push(ListPage, {
    //   item: item
    // });
  }
}