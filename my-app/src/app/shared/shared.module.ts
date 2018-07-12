import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormComponent } from './components/form/form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StateDirective } from './directives/state.directive';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [NavbarComponent, StateDirective, FormComponent, ReactiveFormComponent],
  exports: [NavbarComponent, StateDirective, FormComponent, ReactiveFormComponent]
})
export class SharedModule { }
