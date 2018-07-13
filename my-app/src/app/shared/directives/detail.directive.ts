import { Directive, HostListener, Input } from '@angular/core';
import { Item } from '../interfaces/item';
import { ItemService } from '../../core/services/item.service';

@Directive({
  selector: '[appDetail]'
})
export class DetailDirective {
  @Input() appDetail: Item;
  constructor(private itemService: ItemService) { }

  @HostListener('mouseover') onHover() {
    // .next() permet d'ajouter des données dans un Subject
    this.itemService.item$.next(this.appDetail);
  }
}
