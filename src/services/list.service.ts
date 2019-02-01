import { cardI } from '../pages/list/cardInterface';
import { Subject } from "rxjs/Subject";
import { UUID } from 'angular2-uuid';

export class ListService {
  private cards: cardI[] = [
  ]
  public itemsSubject: Subject<cardI[]> = new Subject();

  constructor() { }

  /**
 * 'Updates' items subject with new version of cards list
 * To be called after every significant update of cards list
 */
  public emitWholeItemSubject() {
    this.itemsSubject.next(this.cards.slice());
  }


  public createSkiCardFromCard(card: cardI) {
    this.cards.push(card);
    this.emitWholeItemSubject();
  }

  public createSkiCardFromParameters(name: String, uid) {
    var selectedItem: cardI = { name: null, uid: null };
    selectedItem.name = name;
    selectedItem.uid = UUID.UUID();
    this.cards.push(selectedItem);
    this.emitWholeItemSubject();
  }

  public removeSkiCard(card: cardI) {
    this.cards = this.cards.filter(item => item.uid !== card.uid);
    this.cards.push();
    this.emitWholeItemSubject();
  }


  public rename(card: cardI, name: String) {
    this.cards.filter(cardInList => cardInList.uid === card.uid)[0].name = name;
    this.emitWholeItemSubject();
  }

}
