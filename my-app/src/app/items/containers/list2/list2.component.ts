import { Component, OnInit } from '@angular/core';
import { Collection2Service } from '../../../core/services/collection2.service';
import { Observable } from 'rxjs';
import { Item2 } from '../../../shared/interfaces/item2';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.css']
})
export class List2Component implements OnInit {
  public collection2: Observable<Item2[]>;

  constructor(private collection2Service: Collection2Service) { }

  ngOnInit() {
    this.collection2 = this.collection2Service.collection2;
    // this.collection2.subscribe((data) => {
    //   console.log(data);
    // });
  }
}

