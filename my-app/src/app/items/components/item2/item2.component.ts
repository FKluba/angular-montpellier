import { Component, OnInit, Input } from '@angular/core';
import { Item2 } from '../../../shared/interfaces/item2';
import { State } from '../../../shared/enums/state.enum';
import { Collection2Service } from '../../../core/services/collection2.service';

@Component({
  selector: 'app-item2',
  templateUrl: './item2.component.html',
  styleUrls: ['./item2.component.css']
})
export class Item2Component implements OnInit {
  @Input() item: Item2;
  public state = State;
  // decorator permettant de récupérer une donnée d'un component parent
  constructor(private collection2Service: Collection2Service) { }

  ngOnInit() {
  }

  public changeState(etat: State): void {
    this.item.state = etat;
    this.collection2Service.update(this.item);
  }

  public delete(): void {
    this.collection2Service.delete(this.item).subscribe((data) => {
      console.log(data);
    });
  }

}
