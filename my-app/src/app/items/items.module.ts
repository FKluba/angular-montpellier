import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './containers/list/list.component';
import { ItemComponent } from './components/item/item.component';
import { ItemsRoutingModule } from './items-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddComponent } from './containers/add/add.component';

@NgModule({
  imports: [
    CommonModule, SharedModule, ItemsRoutingModule
  ],
  declarations: [ListComponent, ItemComponent, AddComponent]
})
export class ItemsModule { }
