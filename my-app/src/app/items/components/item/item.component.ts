import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../../shared/interfaces/item';
import { State } from '../../../shared/enums/state.enum';
import { CollectionService } from '../../../core/services/collection.service';
import { ItemService } from '../../../core/services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  public state = State;
  // decorator permettant de récupérer une donnée d'un component parent
  constructor(
    private collectionService: CollectionService,
    private itemService: ItemService,
    private router: Router
  ) { }

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
    this.collectionService.update(this.item);

    // todo: utiliser la méthode update de collectionService pour persister les données
  }

  public delete(): void {
    this.collectionService.delete(this.item);
  }

  public edit(): void {
    this.itemService.item$.next(this.item);
    this.router.navigate(['/items/edit']);
  }
}
