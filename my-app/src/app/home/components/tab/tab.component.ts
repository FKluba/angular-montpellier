import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../../shared/interfaces/item';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/Operators';
import { ItemService } from '../../../core/services/item.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  public collection: Observable<Item[]>;

  constructor(
    private collectionService: CollectionService,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.collection = this.collectionService.collection.pipe(
      tap((data) => {
        this.itemService.item$.next(data[0]);
      })
    );
  }

}
