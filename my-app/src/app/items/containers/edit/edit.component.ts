import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../core/services/item.service';
import { Subject } from 'rxjs';
import { Item } from '../../../shared/interfaces/item';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public item$: Subject<Item>;
  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.item$ = this.itemService.item$;
    // this.itemService.item$.subscribe((data) => {
    //   this.item$ = this.itemService.item$;
    // });
  }

  public edit(): void {

  }

}
