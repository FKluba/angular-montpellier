import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StateDirective } from './directives/state.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent, StateDirective],
  exports: [NavbarComponent, StateDirective]
})
export class SharedModule { }
