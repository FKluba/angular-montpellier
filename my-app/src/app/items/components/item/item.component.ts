import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../../shared/interfaces/item';
import { State } from '../../../shared/enums/state.enum';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  public state = State;
  // decorator permettant de récupérer une donnée d'un component parent
  constructor() { }

  ngOnInit() {
  }

  public changeState(etat: State): void {
    // const states = Object.values(State);
    // const lg = states.length;
    // states.forEach((data, index) => {
    //   if (index < lg - 1) {
    //     this.item.state = states[index + 1];
    //   }
    // });

    this.item.state = etat;

    // todo: utiliser la méthode update de collectionService pour persister les données
  }

}
