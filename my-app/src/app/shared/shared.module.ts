import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { StateDirective } from './directives/state.directive';

@NgModule({
  imports: [
    CommonModule, NgbModule, RouterModule
  ],
  declarations: [NavbarComponent, StateDirective],
  exports: [NavbarComponent, StateDirective]
})
export class SharedModule { }
