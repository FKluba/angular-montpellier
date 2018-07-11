import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../../shared/interfaces/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  // decorator permettant de récupérer une donnée d'un component parent
  constructor() { }

  ngOnInit() {
  }

}
