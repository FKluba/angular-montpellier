import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormComponent } from './components/form/form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StateDirective } from './directives/state.directive';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { DetailComponent } from './components/detail/detail.component';
import { DetailDirective } from './directives/detail.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [NavbarComponent, StateDirective, FormComponent, ReactiveFormComponent, DetailComponent, DetailDirective],
  exports: [NavbarComponent, StateDirective, FormComponent, ReactiveFormComponent, DetailComponent, DetailDirective]
})
export class SharedModule { }
