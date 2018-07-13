import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './containers/add/add.component';
import { AddReactiveComponent } from './container/add-reactive/add-reactive.component';
import { AddReactive2Component } from './containers/add-reactive2/add-reactive2.component';
import { EditComponent } from './containers/edit/edit.component';
import { ListComponent } from './containers/list/list.component';
import { List2Component } from './containers/list2/list2.component';

const appRoutes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'list2', component: List2Component },
  { path: 'add', component: AddComponent },
  { path: 'edit', component: EditComponent },
  { path: 'add-reactive', component: AddReactiveComponent },
  { path: 'add-reactive2', component: AddReactive2Component }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class ItemsRoutingModule { }
