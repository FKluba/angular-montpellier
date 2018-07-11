import { Directive, Input, HostBinding, OnChanges } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
  // va nous permettre d'utiliser la directive dans un template à travers ce selector (c.f. item.component.html))
})
export class StateDirective implements OnChanges {
  @Input() appState: State;
  @HostBinding('class') nomClass: string;

  constructor() {
  }

  ngOnChanges() {
    this.nomClass = this.formatClass(this.appState);
  }

/**
 * Selon le state, on veut retrouver le nom de class correspondant
 *
 * A livrer -> state-alivrer
 * En cours -> state-encours
 * Livrée -> state-livree
 */

  private formatClass(etat: State): string {
    return `state-${etat.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
  }


}
