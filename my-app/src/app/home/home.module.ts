import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './containers/home/home.component';
import { TabComponent } from './components/tab/tab.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, TabComponent]
})
export class HomeModule { }
