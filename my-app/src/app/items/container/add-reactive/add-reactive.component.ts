import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from '../../../shared/interfaces/item';
import { CollectionService } from '../../../core/services/collection.service';

@Component({
  selector: 'app-add-reactive',
  templateUrl: './add-reactive.component.html',
  styleUrls: ['./add-reactive.component.css']
})
export class AddReactiveComponent implements OnInit {

  constructor(private collectionService: CollectionService, private router: Router) { }

  ngOnInit() {
  }

  public add(arg: Item): void {
    // console.log(arg);
    this.collectionService.add(arg);
    this.router.navigate(['/items/list']);
  }

}
