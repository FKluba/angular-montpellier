import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { State } from '../../enums/state.enum';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // On ne peut pas boucler sur une enum donc on en fait un tableau
  public listStates = Object.values(State);
  public newItem: Item;
  @Output() newElement: EventEmitter<Item> = new EventEmitter();
  // @Input() item: ;
  constructor() { }

  ngOnInit() {
    this.initItem();
  }

  private initItem(): void {
    this.newItem = {
      id: '',
      name: '',
      reference: '',
      state: State.ALIVRER,
      dateLivraison: new Date()
    };
  }

  public process(): void {
    this.newElement.emit(this.newItem);
    this.initItem();
  }

}
